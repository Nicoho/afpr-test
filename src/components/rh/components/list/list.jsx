import React from 'react';

import Historique from './components/historiqueUser';
import ListView from './components/listView';

const List = ({ userId, handleUserId }) => {

    return (
        <div className="register-right">
            {
                userId === "" ?
                    <ListView userDetail={(value) => handleUserId(value)} />
                    :
                    <Historique back={(value) => handleUserId(value)} user={userId} />
            }
        </div >
    )
}

export default List;