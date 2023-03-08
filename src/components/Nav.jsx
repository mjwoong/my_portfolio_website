import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  return (
    <Container>
      <Title>
        <Link to="home" spy={true} smooth={true}>
          J A E W O O N G
        </Link>
      </Title>
      <NavBar>
        <Link to="home" spy={true} smooth={true}>
          <List
            className={
              scrollPosition >= 0 && scrollPosition < 250
                ? "scrolled-text"
                : "scroll-text"
            }
          >
            Home
          </List>
        </Link>
        <Link to="introduce" spy={true} smooth={true}>
          <List
            className={
              scrollPosition >= 250 && scrollPosition < 850
                ? "scrolled-text"
                : "scroll-text"
            }
          >
            Introduce
          </List>
        </Link>
        <Link to="skills" spy={true} smooth={true}>
          <List
            className={
              scrollPosition >= 850 && scrollPosition < 1600
                ? "scrolled-text"
                : "scroll-text"
            }
          >
            Skills
          </List>
        </Link>
        <Link to="project" spy={true} smooth={true}>
          <List
            className={
              scrollPosition >= 1600 && scrollPosition < 2350
                ? "scrolled-text"
                : "scroll-text"
            }
          >
            Project
          </List>
        </Link>
        <Link to="contact" spy={true} smooth={true}>
          <List
            className={scrollPosition >= 2350 ? "scrolled-text" : "scroll-text"}
          >
            Contact
          </List>
        </Link>
      </NavBar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  z-index: 1;
  position: fixed;
  width: 100vw;
  box-shadow: 0 5px 18px -13px rgba(0, 0, 0, 1);
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  font-weight: bold;
  color: #6e85b7;
  :hover {
    opacity: 0.7;
  }
  cursor: pointer;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const NavBar = styled.ul`
  display: flex;
  justify-content: center;
  width: 60%;

  .scroll-text {
    transition: 0.5s;
  }

  .scrolled-text {
    transition: 1s;
    opacity: 1;
    :after {
      content: "";
      display: block;
      width: 100%;
      height: 0.3rem;
      margin: 0rem 0 0 0;
      background: moccasin;
    }
  }
`;

const List = styled.li`
  padding: 1.5rem;
  font-size: 1.1rem;
  color: black;
  cursor: pointer;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 1rem;
  }
`;

export default Nav;
