import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  margin: 10rem auto 0;
  height: fit-content;
  position: relative;
`;

const ModalCard = styled.div`
  background: white;
  color: black;
  width: 30rem;
  height: 10rem;
`;

const Modal = () => {
  return ReactDOM.createPortal(
    <Wrapper>
      <Overlay />
      <ModalContent>
        <ModalCard>
          <button>x</button>
          some content
        </ModalCard>
      </ModalContent>
    </Wrapper>,
    document.body
  );
};

export default Modal;
