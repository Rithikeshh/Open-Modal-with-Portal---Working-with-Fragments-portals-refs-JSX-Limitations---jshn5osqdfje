'use client'
import ReactDOM, { createPortal } from 'react-dom';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

 //add code here
 return(
    createPortal(<div className='modal'>
      {children}
      <div style={{ backgroundColor: 'white', padding: '2rem', position: 'relative' }} onClick={(e) => {
        e.stopPropagation()
        onClose(null)
      }} >
      </div>
    </div>,
    document.body)
 )

};

export default Modal;
