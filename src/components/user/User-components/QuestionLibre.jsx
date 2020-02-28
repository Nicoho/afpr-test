import React, { useState } from 'react';

function QuestionLibre({ ValidateResponse }) {
  const [rep, setRep] = useState('')

  let getAnswer = (e) => {
    e.preventDefault();
    setRep(e.target.value)
  }

  return (
    <div className='QuestionLibre'>
      <form >
        <div className='reponses'>
          <input value={rep} onChange={e => getAnswer(e)} />
        </div>
        <div className="answer-btn" onClick={(e) => ValidateResponse(e, rep, false)}>
          <span>
            valider la réponse
          </span>
        </div>
      </form>
    </div>
  )
}

export default QuestionLibre