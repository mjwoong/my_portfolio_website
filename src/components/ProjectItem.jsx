import React from "react";
import styled from "styled-components";

const ProjectItem = ({ image, title, summary, article, date, stack }) => {
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
        <ItemFooter></ItemFooter>
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
`;

const ItemMain = styled.div`
  height: 85%;
  background-color: #ffffff;
  border-radius: 1.5rem;
`;

const ItemFooter = styled.div`
  height: 10%;
  background-color: #ffffff;
  border-radius: 1.5rem;
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
  padding: 1rem;
`;
const ItemSummary = styled.div``;

const Article = styled.div`
  height: 25%;
  padding: 1.5rem;
  font-size: 0.8rem;
  line-height: 1.5rem;
  border-bottom: 0.5px solid lightgray;
`;

const Date = styled.div`
  padding: 1.5rem;
  padding-bottom: 1rem;
  font-size: 0.8rem;
`;

const Stack = styled.div`
  padding: 0 1.5rem 0 1.5rem;
  font-size: 0.8rem;
`;
export default ProjectItem;
