import React from 'react';
import { Link } from 'react-router-dom'


function Fin() {


  return (
    <div className='Fin'>
      <div>
        Fin du test: tu es nul
      </div>
      <Link to='/'>
        <button>Accueil</button>
      </Link>
    </div>
  )
}

export default Fin