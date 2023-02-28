import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <Container>
      <Title>
        <Link to="home" spy={true} smmoth={true}>
          J A E W O O N G
        </Link>
      </Title>
      <NavBar>
        <Link to="home" spy={true} smooth={true}>
          <List>Home</List>
        </Link>
        <Link to="introduce" spy={true} smooth={true}>
          <List>Introduce</List>
        </Link>
        <Link to="skills" spy={true} smooth={true}>
          <List>Skills</List>
        </Link>
        <Link to="project" spy={true} smooth={true}>
          <List>Project</List>
        </Link>
        <Link to="contact" spy={true} smooth={true}>
          <List>Contact</List>
        </Link>
      </NavBar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 5rem;
  box-shadow: 0 5px 18px -13px rgba(0,0,0,1);
`;

const Title = styled.div`
  margin-left: 15rem;
  padding: 1.5rem;
  /* opacity: 0.7; */
  font-weight: bold;
  color: #6E85B7;
  :hover {
    opacity: 0.7;
  }
  cursor: pointer;
`;

const NavBar = styled.ul`
  display: flex;
  padding: 0 10rem 0 10rem;
`;

const List = styled.li`
  padding: 1.5rem;
  font-size: 1.1rem;
  color: black;
  opacity: 1;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

export default Nav;
