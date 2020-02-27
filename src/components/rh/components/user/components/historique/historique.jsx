import React from 'react';
import "./historique.style.scss"
import { useState } from 'react';
import Modal from './modal/modal';

import testUser from "../../../../../../data/rh.user.test.json"
import { useEffect } from 'react';

const Historique = ({ user, getBack }) => {
    let [state, setState] = useState({
        isVisibel: false,
        userTest: [],
        details: []
    })

    useEffect(() => {
        const temp = testUser.filter(id => id.id === user.id)

        setState({ ...state, userTest: temp[0].test })
    }, [])

    const openModal = (value) => {
        setState({ ...state, isVisibel: !state.isVisibel, details: value })
    }

    return (
        <div className="details">
            <div className="dashbord">
                <div className="userInfo">
                    <div className="btn" onClick={() => getBack()}>
                        <span> Retour </span>
                    </div>
                    <span className="Nom">Nom : {user.lastName} </span>
                    <span className="Prenom">Prénom :  {user.userName}</span>
                    <span className="Email">E-mail : {user.email}</span>
                </div>
                {state.userTest.map((value, index) => {
                    if (index === state.userTest.length - 1) {
                        return (<div className="infoTest" onClick={() => openModal(value)}>
                            <span>Dernier test: </span>
                            <span> {value.langage}</span>
                            <span> {value.niveau}</span>
                            <span> 50%</span>
                            <span >{value.date}</span>
                        </div>)
                    }
                })
                }

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
                        {state.userTest.map((value, index) => {
                            if (index !== state.userTest.length - 1) {
                                return (<tr onClick={() => openModal(value)}>
                                    <td>Dernier test: </td>
                                    <td> {value.langage}</td>
                                    <td> {value.niveau}</td>
                                    <td> 50%</td>
                                    <td >{value.date}</td>
                                </tr>)
                            }
                        })
                        }
                    </tbody>
                </table>
            </div>
            <Modal isVisibel={state.isVisibel} testDetails={state.details} openModal={() => openModal()} />
        </div>
    )
}

export default Historique;