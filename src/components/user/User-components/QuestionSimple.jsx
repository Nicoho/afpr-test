import React, { useState, useEffect } from 'react';
import { setCheckedPossibilities } from '../../../reducers/questionnaire.reducer';

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
      <form >
        <div className='reponses'>
          {
            Answers.map((answer, ind) => {
              return (
                <div key={answer.id_possibilite}>
                  <label className='answer_label'>
                    <input type='checkbox' className="answer_input" value={answer.possibilite} onChange={() => getChecked(ind)} />
                    <span className='answer_texte'>{answer.possibilite}</span>
                  </label>
                </div>
              )
            })
          }
        </div>

        <div className="answer-btn" onClick={(e) => ValidateResponse(e, getResult(Answers), false)}>
          <span>
            valider la réponse
          </span>
        </div>
      </form>
    </div>
  )
}

export default QuestionSimple