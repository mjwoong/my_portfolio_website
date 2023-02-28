import React from "react";
import styled from "styled-components";
import TypingText from "../components/TypingText";

const Home = () => {
  return (
    <>
      <Container id="home">
        <img src="img/home.jpg" className="bg" alt="notebook" />
        <TextBox>
          <TypingText text="Frontend Developer 문재웅입니다." />
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

  .bg {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: relative;
    filter: brightness(80%);
  }
`;

const TextBox = styled.div`
  font-size: 2rem;
  color: #ffffff;
  position: absolute;
`;

export default Home;
