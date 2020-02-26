import React, { useState } from 'react';

import Questionnaire from './Questionnnaire';
import Fin from './Fin'
import Debut from './Debut';
import LogoAmiltoneSeul from '../../img/LogoASeul.png'
import './user-style.scss'



const Userindex = () => {
  const [page, setPage] = useState(1)

  let handlePageChange = () => {
    page === 3 ? setPage(1) : setPage(page + 1)
  }



  let handleComponent = () => {
    switch (page) {
      case 1:
        return <Debut handlePageChange={handlePageChange} />;
      case 2:
        return <Questionnaire handlePageChange={handlePageChange} />;
      case 3:
        return <Fin handlePageChange={handlePageChange} />;
      default:
        return 'erreur d affichage'
    }
  }

  return (
    <>
      <div className="Userindex container-fluid">
        <div className='logoAmiltoneSeul'>
          <img src={LogoAmiltoneSeul} alt='logoAmiltoneSeul' />
        </div>
        {
          handleComponent()
        }

      </div>
    </>
  )
}

export default Userindex;