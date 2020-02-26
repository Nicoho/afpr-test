import React, { useState } from 'react';
import logo_List from '../../img/list.svg'
import logo_Add from '../../img/add.svg'
import List from './components/user/components/list/list';
import Add from './components/add/add';
import Historique from './components/user/components/historique/historique';

import "./rh.style.scss"
import UserIndex from './components/user/user.index';


const Rh = () => {
    let [state, setState] = useState({
        view: "list",
    })

    const handleView = (value) => {
        value === "list" ?
            setState({ ...state, view: "list", userId: "" })
            :
            setState({ ...state, view: "add" })
    }
    return (
        <div className="container-fluid RhNavigation">
            <div className="row">
                <div className="RhNavigation-left">
                    <img src="https://www.amiltone.com/img/LogoMulti.d6367163.svg" alt="" />
                    <div className="btn" onClick={() => handleView("list")}>
                        <span><img src={logo_List} width="40px" alt="list" /></span>
                        <span>Liste des candidats</span>
                    </div>
                    <div className="btn" onClick={() => handleView("add")}>
                        <span><img src={logo_Add} alt="add" /></span>
                        <span>Ajouter un candidat</span>
                    </div>
                </div>
                {state.view === "list" ? <UserIndex /> : <Add />}
            </div>
        </div >
    )
}

export default Rh;