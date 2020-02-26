
import React from 'react';
import Modal from 'react-modal';
import "./modal.style.scss"

const myModal = ({ openModal, isVisibel, testDetails }) => {

    return (
        <Modal
            className="inModal"
            isOpen={isVisibel}
            onRequestClose={openModal}>
            <div className="header">
                <div className="title">
                    <span>Details du test</span>
                </div>
            </div>
            <div className="Body">Contenuer</div>
            <div className="Footer">
                <div className="btn closeModal" onClick={() => openModal()}>
                    <span className="title">Fermer</span>
                </div>
                <div className="btn print">
                    <span className="title">Imprimer</span></div>
            </div>

        </Modal>
    )
}

export default myModal;