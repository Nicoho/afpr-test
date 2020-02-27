import React from 'react';


const FooterModal = ({ openModal }) => {


    return (
        <div className="Footer">
            <div className="btn closeModal" onClick={() => openModal()}>
                <span className="title">Fermer</span>
            </div>
            <div className="btn print">
                <span className="title">Imprimer</span>
            </div>
        </div>
    )
}

export default FooterModal;