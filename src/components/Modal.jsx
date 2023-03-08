import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import ModalProfile from "../sections/ModalProfile";

const Modal = ({ closeModal }) => {

  return (
    <Container>
      <Background
        onClick={() => {
          closeModal(false);
        }}
      />
      <ModalBlock>
        <CloseBtnContainer>
          <CloseBtn
            onClick={() => {
              closeModal(false);
            }}
          >
            <IoMdClose />
          </CloseBtn>
        </CloseBtnContainer>
        <ModalProfile />
      </ModalBlock>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: brightness(20%);
  cursor: pointer;
`;

const ModalBlock = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 6.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: white;
  color: black;
  width: 40rem;
  height: 30rem;

  @media (max-width: 768px) {
    width: 15rem;
    width: 75%;
    height: 25rem;
  }
`;

const CloseBtnContainer = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: end;
`;

const CloseBtn = styled.div`
  cursor: pointer;
  font-size: 1.8rem;
  :hover {
    opacity: 0.7;
  }
`;

export default Modal;
