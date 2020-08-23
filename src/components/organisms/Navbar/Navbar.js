import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import Input from '../../atoms/Input/Input';
import { NavLink, Link } from 'react-router-dom';
import { routes } from '../../../routes';
import { AppContext } from '../../../context';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';

const StyledWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  background: limegreen;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavButton = styled.div`
  position: relative;
  height: 100%;
  width: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;

  &.active {
    color: blue;
  }
`;

const StyledFavoritesLabel = styled.div`
  position: absolute;
  background: red;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  right: 5px;
  border-radius: 50px;
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledSearchContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = () => {
  const { state } = useContext(AppContext);
  const { favorites } = state;

  return (
    <StyledWrapper>
      <StyledNavButton as={NavLink} exact to={routes.home} activeclass="active">
        <HomeIcon style={{ fontSize: '72px' }} />
      </StyledNavButton>
      <StyledSearchContainer>
        <Input />
        <button type="submit">
          <SearchIcon />
        </button>
      </StyledSearchContainer>
      <StyledNavButton as={NavLink} to={routes.favorites} activeclass="active">
        {favorites.length !== 0 && (
          <StyledFavoritesLabel>{favorites.length}</StyledFavoritesLabel>
        )}
        <FavoriteIcon style={{ fontSize: '72px' }} />
      </StyledNavButton>
    </StyledWrapper>
  );
};

export default Navbar;
