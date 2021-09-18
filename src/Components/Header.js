import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <List>
        <Item>
          <StyledLink to="/">Movies</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/tv">TV</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/search">Search</StyledLink>
        </Item>
      </List>
    </HeaderContainer>
  );
};

export default Header;
