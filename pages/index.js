import { useState } from 'react';
import Modal from '../components/Modal';

const HomePage = () => {
  
  const [isOpen, setIsOpen] = useState(null);
  return (
    <div>
      <button onClick={()=>{
        setIsOpen('true')
      }}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={setIsOpen}>
        <h2>This is a Modal</h2>
        <p>Using React Portals with Next.js</p>
        <button onClick={()=>{
          setIsOpen(null)
        }}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default HomePage;
