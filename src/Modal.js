import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ( { openModal, closeModal, isModalOpen } ) => {
  console.log(openModal, closeModal);
  return (
    <div className={`${ isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
      <div className='modal-container'>
        <h2>Modal content</h2>
        <button className='btn close-btn'>
          <FaTimes onClick={closeModal}/>
        </button>
      </div>
    </div>
  )
}

export default Modal
