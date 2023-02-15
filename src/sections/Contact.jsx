import React from "react";
import styled from "styled-components";
import { MdEmail, MdPhoneIphone } from "react-icons/md";

const Contact = () => {
  return (
    <Container id="contact">
      <Title>
        <h1>Contact</h1>
      </Title>
      <Contents>
        <div>
          <MdEmail />
          Email : answodnd112@gmail.com
        </div>
        <div>
          <MdPhoneIphone />
          Phone : 010-4144-9606
        </div>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  height: 40vh;
  width: 100%;
`;

const Title = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;

  h1 {
    font-weight: 500;
    font-size: 2rem;
  }
`;

const Contents = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;

  div {
    padding: 0.5rem;
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: 0.5rem;
  }
`;

export default Contact;
