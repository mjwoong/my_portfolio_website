import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import TypingText from "../components/TypingText";
import { TbHandClick } from "react-icons/tb";

const Home = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Container id="home">
        <img src="img/home.jpg" className="bg" alt="notebook" />
        <TextBox>
          <TypingText text="Frontend Developer 문재웅입니다." />
          <ProfileButton
            onClick={() => {
              setModal(true);
            }}
          >
            <div>
              프로필 보기 <TbHandClick />
            </div>
          </ProfileButton>
          {modal === true ? (
            <Modal closeModal={setModal} />
          ) : null}
        </TextBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #041732;

  .bg {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: relative;
    filter: brightness(80%);
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  color: #ffffff;
  position: absolute;
`;

const ProfileButton = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }

  div {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #6e85b7;
  }
`;

export default Home;
