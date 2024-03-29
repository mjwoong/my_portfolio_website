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
              <p className="explain">HTML</p>
              <img src="img/skills/html.png" className="skill" alt="html" />
            </SkillImag>
            <SkillImag>
              <p className="explain">CSS</p>
              <img src="img/skills/css.png" className="skill" alt="css" />
            </SkillImag>
            <SkillImag>
              <p className="explain">JavaScript</p>
              <img src="img/skills/js.png" className="skill" alt="javaScript" />
            </SkillImag>
          </SkillContainer>
        </Section>
        <Section>
          <Title>[ Library & FrameWork ]</Title>
          <SkillContainer>
            <SkillImag>
              <p className="explain">
                Styled
                <br />
                Components
              </p>
              <img
                src="img/skills/styled.png"
                className="skill"
                alt="styledComponents"
              />
            </SkillImag>
            <SkillImag>
              <p className="explain">React</p>
              <img src="img/skills/react.png" className="skill" alt="react" />
            </SkillImag>
            <SkillImag>
              <p className="explain">Redux</p>
              <img src="img/skills/redux.png" className="skill" alt="redux" />
            </SkillImag>
            <SkillImag>
              <p className='explain'>Bootstrap</p>
              <img src='img/skills/bootstrap.png' className='skill' alt='bootstrap' />
            </SkillImag>
          </SkillContainer>
        </Section>
        <Section>
          <Title>[ etc. ]</Title>
          <SkillContainer>
            <SkillImag>
              <p className="explain">Git</p>
              <img src="img/skills/git.png" className="skill" alt="git" />
            </SkillImag>
            <SkillImag>
              <p className="explain">Notion</p>
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
  background-color: #eef7ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;
  border-bottom: 1px solid white;
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

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 40%;
  height: 8rem;
  font-weight: normal;
  font-size: 1.3rem;

  @media (max-width: 1023px) {
    width: auto;
    height: 4rem;
  }
`;

const SkillContainer = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .skill {
    width: 100%;
    height: 100%;
    :hover {
      opacity: 0;
    }
  }

  .explain {
    position: absolute;
    opacity: 0;
    font-size: 1.2rem;
    text-align: center;
  }
  :hover .explain {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
    margin-left: 1rem;
  }
`;

export default Skills;
