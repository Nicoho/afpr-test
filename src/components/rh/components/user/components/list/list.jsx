import React from 'react';
import loupe from "../../../../../../img/loupe.svg"
import send from "../../../../../../img/send.png"
import edit from "../../../../../../img/edit.png"
import del from "../../../../../../img/delete.png"

import "./list.style.scss"
const List = ({ getHistorique }) => {
    return (
        <div className="register-right">
            <h3 className="register-heading">Liste des candidats</h3>
            <div>
                <div className="search input-group col-md-4">
                    <img src={loupe} width="20px" alt="Loupe" />
                    <input type="text" placeholder="Recherche" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <table className="table table-fixed table-striped table-borderless">
                    <thead>
                        <tr>
                            <th >Nom</th>
                            <th >Prénom</th>
                            <th >E-mail</th>
                            <th >Langage</th>
                            <th >Niveau</th>
                            <th >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[0, 1,].map((v, i) => {
                            return (
                                <tr onClick={() => getHistorique(i)} >
                                    <td ><p>John</p></td>
                                    <td ><p>Doe</p></td>
                                    <td ><p>johndoe@email.com</p></td>
                                    <td ><p>React</p></td>
                                    <td ><p>Junior</p></td>
                                    <td >
                                        <div className="contImg" onClick={() => alert("envoyer")}>
                                            <img src={send} alt="" width="45px" height="90px" />
                                        </div>
                                        <div className="contImg" onClick={() => alert("editer")}>
                                            <img src={edit} alt="" width="45px" height="90px" />
                                        </div>
                                        <div className="contImg" onClick={() => alert("suprimer")}>
                                            <img src={del} alt="" width="45px" height="90px" />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List;