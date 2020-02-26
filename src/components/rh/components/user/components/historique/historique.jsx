import React from 'react';
import "./historique.style.scss"
import { useState } from 'react';
import Modal from './modal';
const Historique = ({ user, getBack }) => {
    let [state, setState] = useState({
        isVisibel: false
    })

    const openModal = () => {
        setState({ ...state, isVisibel: !state.isVisibel })
    }

    return (
        <div className="details">
            <div className="dashbord">
                <div className="userInfo">
                    <div className="btn" onClick={() => getBack()}>
                        <span> Retour </span>
                    </div>
                    <span className="Nom">Nom : Joe </span>
                    <span className="Prenom">Prénom : TESTESTEST</span>
                    <span className="Email">E-mail :  TAMAMMEMEMEM</span>
                </div>

                <div className="infoTest" onClick={() => openModal()}>
                    <span>Dernier test: </span>
                    <span> React</span>
                    <span> Junior</span>
                    <span> 50%</span>
                    <span >12/04/2019</span>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th >Langage</th>
                            <th >Niveau</th>
                            <th >Score</th>
                            <th >Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[0, 1,].map((v, i) => {
                            return (
                                <tr onClick={() => openModal()} >
                                    <td >React</td>
                                    <td >Junior</td>
                                    <td>25%</td>
                                    <td>12/05/2016</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Modal isVisibel={state.isVisibel} openModal={() => openModal()} />
        </div>
    )
}

export default Historique;