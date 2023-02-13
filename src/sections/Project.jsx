import React from "react";
import styled from "styled-components";

const Project = () => {
  return (
    <Container id="project">
      <Title><h1>Project</h1></Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
`;

const Title = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  justify-content: center;

  h1 {
    font-weight: 500;
    font-size: 2rem;
  }
`;

export default Project;
