import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ( { openModal, closeModal} ) => {
  console.log(openModal, closeModal);
  return (
    <div className='modal-ovarlay'>
      <div className='modal-container'>
        <h2>Modal content</h2>
        <button className='btn close-btn'>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
