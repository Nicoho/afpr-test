import React, { useReducer, useEffect, useState } from 'react';

import { questionnaire, initialState } from '../../reducers/questionnaire.reducer'
import Question from './Question';
import Chrono from './Chrono'


function Questionnaire({ handlePageChange }) {
  const [state, dispatch] = useReducer(questionnaire, initialState);

  const [isEnded, setIsEnded] = useState(false)



  useEffect(() => {
    dispatch({ type: 'getQuestionnaire' })
  }, [])


  const navigateInTest = () => {
    if (state.indexQuestion === state.test.questions.length - 1) {
      setIsEnded(true)
    } else {
      dispatch({ type: 'setIndex' })
    }
  }

  const ValidateResponse = (e, answer) => {


    dispatch({ type: 'getAnswer', payload: answer })
    navigateInTest()
  }



  return (
    <div className='Questionnaire'>
      <div className='questionnaire_header container'>
        <div className='row'>
          <div className='questionnaire_progression col col-md-6'>
            question {state.indexQuestion + 1} / {state.test.questions && state.test.questions.length}
          </div>
          <div className=' questionnaire_chrono col col-md-6'>
            <Chrono ValidateResponse={ValidateResponse} timer={state.timer} />
          </div>
        </div>
      </div>
      <div className='questionnaire_questions'>
        {state.test.questions && <Question key={state.indexQuestion} question={state.test.questions[state.indexQuestion]} ValidateResponse={ValidateResponse} />}
      </div>
      <div >

        {
          isEnded && handlePageChange()
        }
      </div>
    </div>
  )

}

export default Questionnaire