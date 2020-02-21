import React from 'react';
import loupe from "../../../img/loupe.svg"
import send from "../../../img/send.png"
import edit from "../../../img/edit.png"
import del from "../../../img/delete.png"
const List = () => {
    return (
        <div className="register-right">
            <h3 className="register-heading">Liste des candidats</h3>
            <div>
                <div className="input-group col-md-3">
                    <img src={loupe} width="20px" alt="Loupe" />
                    <input type="text" class="form-control" placeholder="Recherche" aria-label="Username" aria-describedby="basic-addon1" />
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
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((v, i) => {
                            return (
                                <tr>
                                    <td ><p>John</p></td>
                                    <td ><p>Doe</p></td>
                                    <td ><p>johndoe@email.com</p></td>
                                    <td ><p>React</p></td>
                                    <td ><p>Junior</p></td>
                                    <td >
                                        <div className="contImg">
                                            <img src={send} alt="" width="45px" height="90px" />
                                        </div>
                                        <div className="contImg">
                                            <img src={edit} alt="" width="45px" height="90px" />
                                        </div>
                                        <div className="contImg">
                                            <img src={del} alt="" width="45px" height="90px" />
                                        </div>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default List;