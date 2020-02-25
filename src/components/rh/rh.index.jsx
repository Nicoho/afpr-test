import React, { useState } from 'react';
import Add from './components/add';
import List from './components/list';
import list from '../../img/list.svg';
import add from '../../img/add.svg';
import "./rh.style.scss"

const Rh = () => {
    let [state, setState] = useState({
        view: "list"
    })
    console.log(state);

    return (
        <div className="container-fluid register">
            <div className="row">
                <div className="register-left">
                    <img src="https://www.amiltone.com/img/LogoMulti.d6367163.svg" alt="" />
                    <div className="btn" onClick={() => setState({ ...state, view: "list" })}>
                        <span><img src={list} width="40px" alt="list" /></span>
                        <span>Liste des candidats</span>
                    </div>
                    <div className="btn" onClick={() => setState({ ...state, view: "add" })}>
                        <span><img src={add} alt="add" /></span>
                        <span>Ajouter un candidat</span>
                    </div>
                </div>
                {state.view === "list" ? <List /> : <Add />}

            </div>
        </div >
    )
}

export default Rh;