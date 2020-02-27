
import React from 'react';
import Modal from 'react-modal';
import "./modal.style.scss"
import BodyModal from './body.modal';
import HeaderModal from './header.modal';
import FooterModal from './footer.modal';

const myModal = ({ openModal, isVisibel, testDetails }) => {
    console.log("Modal Details =>", testDetails);

    return (
        <Modal
            className="inModal"
            isOpen={isVisibel}
            onRequestClose={openModal}>
            <div className="inModal">
                <HeaderModal />
                <BodyModal />
                <FooterModal openModal={() => openModal()} />
            </div>
        </Modal>
    )
}

export default myModal;



