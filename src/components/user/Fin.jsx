import React from 'react';


function Fin({ handlePageChange }) {


  return (
    <div className='Fin'>
      <div>
        Fin du test
      </div>
      <button className="btn btn-outline-primary start-btn" onClick={() => handlePageChange()}>Accueil</button>
    </div>
  )
}

export default Fin