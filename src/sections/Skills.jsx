import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <Container id='skills'>
      <AboutMe>
        <h1>Skills</h1>
      </AboutMe>
      <Text>
        <Title>Publishing</Title>
        <Explain>JavaScript</Explain>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #ececec;
`;

const AboutMe = styled.div`
  width: 25%;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 500;
    font-size: 2rem;
  }
`;

const Text = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  padding: 5rem 0 5rem 0;
`;
const Title = styled.h1``;

const Explain = styled.div`
  margin-top: 1rem;
  line-height: 1.4rem;
`;

export default Skills;
