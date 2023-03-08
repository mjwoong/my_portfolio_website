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
    font-weight: bold;
    font-size: 2rem;

    ::after {
      content: "";
      display: block;
      width: 100%;
      height: 0.3rem;
      margin: -0.6rem 0 0 0;
      background: moccasin;
    }
  }
`;

const Contents = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  font-weight: normal;

  div {
    padding: 1rem;
    display: flex;
    align-items: center;  
  }
  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export default Contact;
