import React from 'react';


import Question from './Question';
import Chrono from './Chrono'


function Questionnaire({ handlePageChange, test, isEnded, ValidateResponse, setVisible }) {

  return (
    <div className='Questionnaire'>
      <div className='questionnaire_header container'>
        <div className='row'>
          <div className='questionnaire_progression col col-md-6'>
            question {test.indexQuestion + 1} / {test.questions && test.questions.length}
          </div>
          <div className=' questionnaire_chrono col col-md-6'>
            <Chrono ValidateResponse={ValidateResponse} timer={test.timer} setVisible={setVisible} />
          </div>
        </div>
      </div>
      <div className='questionnaire_questions'>
        {test.questions && <Question key={test.indexQuestion} question={test.questions[test.indexQuestion]} ValidateResponse={ValidateResponse} />}
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