import React from "react";
import styled from "styled-components";

const ModalProfileItem = ({ icon, title, content }) => {
  return (
    <>
      <List>
        <Item>
          <Title>
            <div className="iconBox">{icon}</div>
            <div className="title">{title}</div>
          </Title>
          <div className="content">{content}</div>
        </Item>
      </List>
    </>
  );
};

const List = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.5rem;
  }

  .content {
    font-size: 1rem;
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 0.8rem;  
    }
    .content {
      font-size: 0.7rem;
    }
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .iconBox {
    color: #6e85b7;
    display: flex;
    align-items: center;
  }
`;

export default ModalProfileItem;
