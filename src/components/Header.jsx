import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Container>
      <HeaderBar>
        <Link to="home" spy={true} smooth={true}>
          <List>Home</List>
        </Link>
        <Link to="about" spy={true} smooth={true}>
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
      </HeaderBar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderBar = styled.ul`
  display: flex;
  position: fixed;
  z-index: 1;
  /* background-color: rgba(0, 0, 0, 0.7); */
  background-color: #BDCDD6;
  opacity: 0.7;
  border-radius: 2px 2px 30px 30px;
  padding: 0 2rem 0 2rem;
`;

const List = styled.li`
  padding: 1.5rem;
  font-size: 1.1rem;
  color: #ececec;
  color: #ffffff;
  color: black;
  opacity: 0.7;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

export default Header;
