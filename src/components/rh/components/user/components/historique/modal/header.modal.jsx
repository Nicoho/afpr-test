import React from 'react';


const HeaderModal = () => {

    return (
        <div className="header">
            <div className="title">
                <h1>Details du test</h1>
            </div>
            <div className="DetailsInfo">
                <span>Date : 21/12/2020</span>
                <span>Langage : React</span>
                <span>Niveau : Junior</span>
                <span>Score : 50%</span>
                <span>Nom : toto</span>
                <span>Prenom : tata</span>
            </div>
        </div>
    )
}

export default HeaderModal;