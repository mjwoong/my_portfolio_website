import React from "react";
import styled from "styled-components";
import ProjectItem from "../components/ProjectItem";

const projectList = [
  {
    id: 1,
    image: <img src="img/yata.png" className="img" alt="notebook" />,
    title: "YATA",
    summary: "저렴한 가격에 함께 이동할 수 있는 카 쉐어링 서비스",
    article:
      "서비스 기획부터 시작하여 로그인 및 회원가입과 이메일 인증 기능을 구현했으며, 마이페이지를 비롯하여 여러 페이지의 UI를 만들었습니다. Toast를 이용한 상황에 따른 알림을 구현했습니다.",
    date: "2023.01 - 2023.02",
    stack: "React, Styled Components, Axios, Redux Toolkit",
    demo: "https://yata-tau.vercel.app/",
    github: "https://github.com/codestates-seb/seb41_main_021",
  },
  {
    id: 2,
    image: <img src="img/portfolio.png" className="img" alt="notebook" />,
    title: "Portfolio",
    summary: "프론트엔드 개발자 개인 포트폴리오 웹사이트",
    article:
      "React를 기반으로 개발한 개인 포트폴리오 사이트입니다. PC 화면 위주로 개발하였으며, 모바일에서도 불편함없이 볼 수 있도록 반응형 웹앱으로 구현할 예정입니다.",
    date: "2023.02",
    stack: "React, Styled Components, github.io",
    demo: "https://mjwoong.github.io/my_portfolio_website/",
    github: "https://github.com/mjwoong/my_portfolio_website",
  },
];

const Project = () => {
  return (
    <Container id="project">
      <Title>
        <h1>Project</h1>
      </Title>
      <List>
        {projectList.map((it) => (
          <ProjectItem key={it.id} {...it}/>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 55rem;
  background-color: #eef7ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 18px -13px rgba(0,0,0,1);

  @media (max-width: 1023px) {
    height: auto;
  }
`;

const Title = styled.div`
  padding: 3rem;
  display: flex;

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

const List = styled.ul`
  width: 75%;
  height: 40rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 1023px) {
    height: auto;
    flex-direction: column;
  }
`;

export default Project;
