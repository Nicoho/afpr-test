import React, { useState } from 'react';

function QuestionLibre({ question, ValidateResponse }) {
  const [rep, setRep] = useState('')

  let getAnswer = (e) => {
    e.preventDefault();
    setRep(e.target.value)
  }

  return (
    <div className='QuestionLibre'>
      <form onSubmit={(e) => ValidateResponse(e, rep)}>
        <input value={rep} onChange={e => getAnswer(e)} />
        <button type='submit' >valider la réponse</button>
      </form>
    </div>
  )
}

export default QuestionLibre