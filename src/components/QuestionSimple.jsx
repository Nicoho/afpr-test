import React, { useState, useEffect } from 'react';
import { setCheckedPossibilities } from '../reducers/questionnaire.reducer';

function QuestionSimple({ question, ValidateResponse }) {
  const [Answers, setAnswers] = useState([])

  useEffect(() => {
    setAnswers(setCheckedPossibilities(question.possibilite))
  }, [question.possibilite])

  const getChecked = (ind) => {
    let result = [...Answers]
    result[ind].isChecked = !result[ind].isChecked
    setAnswers(result)
  }

  const getResult = (answers) => {
    let result = answers.filter(answer => answer.isChecked).map(answer => answer.possibilite)
    return result
  }


  return (
    <div className='QuestionSimple'>
      <form onSubmit={() => ValidateResponse(getResult(Answers))}>
        <div>
          {
            Answers.map((answer, ind) => {
              return (
                <div key={answer.id_possibilite}>
                  <label>
                    <input type='checkbox' value={answer.possibilite} onChange={() => getChecked(ind)} />
                    {answer.possibilite}
                  </label>
                </div>
              )
            })
          }
        </div>
        <button type='submit'>valider la réponse</button>
      </form>
    </div>
  )
}

export default QuestionSimple