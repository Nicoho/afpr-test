import React, { useState } from 'react';
import Add from './components/add/add';
import List from './components/list/list';
import list from '../../img/list.svg';
import add from '../../img/add.svg';
import "./rh.style.scss"

const Rh = () => {
    let [state, setState] = useState({
        view: "list",
        userId: ""
    })

    const handleView = (value) => {
        value === "list" ?
            setState({ ...state, view: "list", userId: "" })
            :
            setState({ ...state, view: "add" })
    }

    const handleUserId = (value) => {
        setState({ ...state, userId: value })
    }

    return (
        <div className="container-fluid register">
            <div className="row">
                <div className="register-left">
                    <img src="https://www.amiltone.com/img/LogoMulti.d6367163.svg" alt="" />
                    <div className="btn" onClick={() => handleView("list")}>
                        <span><img src={list} width="40px" alt="list" /></span>
                        <span>Liste des candidats</span>
                    </div>
                    <div className="btn" onClick={() => handleView("add")}>
                        <span><img src={add} alt="add" /></span>
                        <span>Ajouter un candidat</span>
                    </div>
                </div>
                {state.view === "list" ? <List handleUserId={(value) => handleUserId(value)} userId={state.userId} /> : <Add />}

            </div>
        </div >
    )
}

export default Rh;