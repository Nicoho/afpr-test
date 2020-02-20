import React from 'react';
import QuestionLibre from './QuestionLibre'
import QuestionSimple from './QuestionSimple'

function Question({ question, ValidateResponse, answeringTime }) {

  let type = question.type
  return (
    <div className='Question'>

      <div>
        {
          question.question
        }
      </div>

      {
        type === 'libre' && <QuestionLibre question={question} ValidateResponse={ValidateResponse} answeringTime={answeringTime} />
      }
      {
        type === 'simple' && <QuestionSimple question={question} ValidateResponse={ValidateResponse} answeringTime={answeringTime} />
      }
    </div>
  )
}

export default Question