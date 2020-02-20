import React, { useReducer, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { questionnaire, initialState } from '../../../reducers/questionnaire.reducer'
import Question from './Question';
import Chrono from './Chrono'


function Questionnaire() {
  const [state, dispatch] = useReducer(questionnaire, initialState);

  const [isEnded, setIsEnded] = useState(false)



  useEffect(() => {
    dispatch({ type: 'getQuestionnaire' })
  }, [])


  let navigateInTest = () => {
    if (state.indexQuestion === state.test.questions.length - 1) {
      setIsEnded(true)
    } else {
      dispatch({ type: 'setIndex' })
    }
  }

  let ValidateResponse = (answer) => {
    dispatch({ type: 'getAnswer', payload: answer })
    navigateInTest()
  }



  return (
    <div className='Questionnaire'>
      <h1>{state.test.test_name}</h1>
      <div>
        question {state.indexQuestion + 1} /{state.test.questions && state.test.questions.length}
      </div>
      <div>
        <Chrono ValidateResponse={ValidateResponse} timer={state.timer} />
      </div>
      <div>
        {state.test.questions && <Question key={state.indexQuestion} question={state.test.questions[state.indexQuestion]} ValidateResponse={ValidateResponse} />}
      </div>
      {
        isEnded && <Redirect to='/end' />
      }
    </div>
  )

}

export default Questionnaire