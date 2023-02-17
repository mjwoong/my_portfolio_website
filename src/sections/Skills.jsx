import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <Container id="skills">
      <Header>
        <h1>Skills</h1>
      </Header>
      <Content>
        <Section>
          <Title>[ Language ]</Title>
          <SkillContainer>
            <SkillImag>
              <img src="img/skills/html.png" className="skill" alt="html" />
            </SkillImag>
            <SkillImag>
              <img src="img/skills/css.png" className="skill" alt="css" />
            </SkillImag>
            <SkillImag>
              <img src="img/skills/js.png" className="skill" alt="javaScript" />
            </SkillImag>
          </SkillContainer>
        </Section>
        <Section>
          <Title>[ Library & FrameWork ]</Title>
          <SkillContainer>
            <SkillImag>
              <img
                src="img/skills/styled.png"
                className="skill"
                alt="styledComponents"
              />
            </SkillImag>
            <SkillImag>
              <img src="img/skills/react.png" className="skill" alt="react" />
            </SkillImag>
            <SkillImag>
              <img src="img/skills/redux.png" className="skill" alt="redux" />
            </SkillImag>
          </SkillContainer>
        </Section>
        <Section>
          <Title>[ etc. ]</Title>
          <SkillContainer>
            <SkillImag>
              <img src="img/skills/git.png" className="skill" alt="git" />
            </SkillImag>
            <SkillImag>
              <img src="img/skills/notion.png" className="skill" alt="notion" />
            </SkillImag>
          </SkillContainer>
        </Section>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
`;

const Header = styled.div`
  width: 25%;
  padding: 3rem;
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

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
`;

const Title = styled.h1`
  width: 20rem;
  height: 8rem;
  padding-left: 15rem;
  font-weight: normal;
  font-size: 1.3rem;
`;

const SkillContainer = styled.div`
  width: 50%;
  display: flex;
  margin-bottom: 3rem;
`;

const SkillImag = styled.div`
  background-color: #ffffff;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  border-radius: 1.5rem;
  width: 8rem;
  height: 8rem;
  margin-left: 2rem;
  cursor: pointer;
  :hover {
    opacity: 0.2;
  }

  .skill {
    width: 100%;
    height: 100%;
  }
`;

export default Skills;
