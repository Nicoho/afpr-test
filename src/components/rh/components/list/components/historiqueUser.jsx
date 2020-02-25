import React from 'react';
const Historique = ({ back, user }) => {

    return (
        <div className="container">

            <div className="btn" onClick={() => back("")}>
                <span>Retour à la liste des candidats</span>
            </div>

            <div className="userInfo">

            </div>
            <div className="userHistorique">

            </div>


        </div>

    )
}

export default Historique;