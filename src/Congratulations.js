import React from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  position: relative;
  max-width: 500px;
  width: 90%;
  color: #ffde59;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

function Congratulations({ onClose }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}><FiX size={24} /></CloseButton>
        <h2>🎉 Congratulations! You’ve Completed the Course! 🎉</h2>
        <p>
          <strong>What’s Next?</strong> Build your own Flutter apps, explore advanced packages like Riverpod, and share your creations with the community!
        </p>
      </ModalContent>
    </ModalOverlay>
  );
}

export default Congratulations;