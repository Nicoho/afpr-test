import React from 'react';

import './TimeOutModal.scss'

const TimeOutModal = ({ visible, TimedOutNav }) => {


  return (
    <div className={visible ? 'TimeOutModal ' : 'cache'}>

      <p>Le temps pour cette question s'est écoulé.</p>
      <span className="btnModal" onClick={() => TimedOutNav()}> continuer</span>

    </div>

  )
}

export default TimeOutModal;