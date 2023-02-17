import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

const Introduce = () => {
  return (
    <Container id="about">
      <Subject>
        <h1>Introduce</h1>
      </Subject>
      <Text>
        <Title>도전하는 사람</Title>
        <Explain>
          React를 중심으로 WEB / APP 개발 공부를 하고 있는 개발자 문재웅입니다.{" "}
          <br />
          평소 외적인 부분에 민감하여 자연스레 ‘프론트엔드 개발자’가 되기로
          도전했습니다. 더 좋은 코드와 더 좋은 UI를 위해 끊임없이
          노력하겠습니다. <br />
          단체생활을 즐겨 사람들과 적극적으로 소통하는 것을 좋아하고 도전을
          두려워하지 않습니다. <br />잘 부탁드립니다 !
        </Explain>
        <AddressContainer>
          <Address>
            <a href="https://github.com/mjwoong">
              <BsGithub />
            </a>
          </Address>
          <Address>
            <a href="https://velog.io/@answodnd112">
              <img src="img/velog.png" alt="velog" />
            </a>
          </Address>
        </AddressContainer>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Subject = styled.div`
  width: 25%;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

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

const Text = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  padding: 7rem 0 7rem 0;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.7rem;
`;

const Explain = styled.div`
  margin: 1rem 0 1rem 0;
  line-height: 1.7rem;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Address = styled.div`
  margin-right: 1rem;
  svg {
    font-size: 2rem;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export default Introduce;
