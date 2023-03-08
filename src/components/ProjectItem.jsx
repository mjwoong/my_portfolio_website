import React from "react";
import styled from "styled-components";
import { BsGithub, BsFillHouseDoorFill } from "react-icons/bs";

const ProjectItem = ({
  image,
  title,
  summary,
  article,
  date,
  stack,
  demo,
  github,
}) => {
  return (
    <>
      <Item>
        <ItemMain>
          <ImageBox>{image}</ImageBox>
          <ItemHeader>
            <ItemTitle>{title}</ItemTitle>
            <ItemSummary>{summary}</ItemSummary>
          </ItemHeader>
          <Article>{article}</Article>
          <Date># 프로젝트 기간 : {date}</Date>
          <Stack># 스택 : {stack} </Stack>
        </ItemMain>
        <ItemFooter>
          <Address>
            <a href={demo}>
              <BsFillHouseDoorFill />
            </a>
          </Address>
          <Address>
            <a href={github}>
              <BsGithub />
            </a>
          </Address>
        </ItemFooter>
      </Item>
    </>
  );
};

const Item = styled.li`
  width: 25rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1023px) {
    margin-bottom: 5rem;
  }
  @media (max-width: 768px) {
    width: 18rem;
  }
`;

const ItemMain = styled.div`
  height: 85%;
  background-color: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
`;

const ItemFooter = styled.div`
  height: 10%;
  background-color: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    font-size: 1.8rem;
  }
`;

const ImageBox = styled.div`
  height: 30%;
  .img {
    width: 100%;
    height: 100%;
    border-radius: 1.5rem 1.5rem 0 0;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
const ItemSummary = styled.div`
  padding: 0.5rem;
`;

const Article = styled.div`
  height: 25%;
  padding: 1.5rem;
  font-size: 0.8rem;
  line-height: 1.5rem;
  border-bottom: 0.5px solid lightgray;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Date = styled.div`
  padding: 1rem;
  font-size: 0.8rem;
`;

const Stack = styled.div`
  padding: 0 1rem 0 1rem;
  font-size: 0.8rem;
`;

const Address = styled.div`
  svg {
    font-size: 1.8rem;
  }
`;

export default ProjectItem;
