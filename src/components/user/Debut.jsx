import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { infos_test } from '../../constantes/test.constantes'



function Debut({ handlePageChange }) {
  const [infosTest, setInfosTest] = useState('')

  useEffect(() => {
    setInfosTest(infos_test)

  }, [])
  let info = useParams()
  console.log(info)

  const { nom, prenom, langage, niveau, duree } = infosTest
  return (
    <div className='Debut'>
      <div className='intro-text'>
        <p>  Bonjour {prenom} {nom},</p>
        <p> vous allez passer le test {langage} niveau {niveau}.</p>
        <p>
          Ce test dure au maximum {Math.floor(duree / 60000)} min
          {duree % 60000 / 1000 !== 0 ? ' ' + duree % 60000 / 1000 + ' sec.' : ""}.
          </p>
        <p>
          Assurez vous d'avoir le temps nécessaire devant vous pour le réaliser dans de bonnes conditions.

        </p>
        <div className="start-btn" onClick={() => handlePageChange()}>
          <span>
            Commencer le test
          </span>
        </div>
      </div>
    </div>
  )
}

export default Debut