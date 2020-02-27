import React from 'react';
import List from './components/list/list';
import Historique from './components/historique/historique';
import { useState } from 'react';

const UserIndex = () => {
    let [state, setState] = useState([])

    const viewHistorique = (user) => {
        setState([user])
    }
    const getBack = () => {
        setState([])
    }

    return (
        state.length === 0 ?
            <List getHistorique={(user) => viewHistorique(user)} />
            :
            <Historique user={state[0]} getBack={() => getBack()} />
    )
}

export default UserIndex;