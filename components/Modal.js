'use client'
import ReactDOM, { createPortal } from 'react-dom';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

 //add code here
 return(
    createPortal(<div className='modal'>
      {children}
      
    </div>,
    document.body)
 )

};

export default Modal;
