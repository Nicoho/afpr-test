import React from 'react';




function Debut({ handlePageChange, test }) {


  const { nom, prenom, langage, niveau, duree } = test
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
        <p>
          Pensez à valider vos réponses, les reponses non validées ne seront pas prises en compte.
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