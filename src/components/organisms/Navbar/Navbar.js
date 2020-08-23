import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';
import { AppContext } from '../../../context';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { API_KEY } from '../../../API';
import axios from 'axios';

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
  const { state, fetchData } = useContext(AppContext);
  const { favorites } = state;
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=9&query=${inputValue}`,
      )
      .then((response) => {
        console.log(response);
        const data = response.data.map((result) => {
          return {
            id: result.id,
            url: result?.urls.regular,
            username: result.user.username,
          };
        });
        fetchData(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledWrapper>
      <StyledNavButton as={NavLink} exact to={routes.home} activeclass="active">
        <HomeIcon style={{ fontSize: '72px' }} />
      </StyledNavButton>
      <StyledSearchContainer>
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit" onClick={handleSubmit}>
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
