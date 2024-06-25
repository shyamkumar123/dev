import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const Li = styled.li`
  margin: 0 10px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <Ul>
        <Li><StyledLink to="/">Home</StyledLink></Li>
        <Li><StyledLink to="/cases">Cases</StyledLink></Li>
        <Li><StyledLink to="/gallery">Gallery</StyledLink></Li>
        <Li><StyledLink to="/team">Team</StyledLink></Li>
        <Li><StyledLink to="/contact">Contact</StyledLink></Li>
      </Ul>
    </Nav>
  );
};

export default NavBar;
