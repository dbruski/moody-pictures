import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';
import { AppContext } from '../../../context';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { UNSPLASH_API_KEY, WEATHER_API_KEY } from '../../../API';
import axios from 'axios';

const StyledWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  box-shadow: 0px 2px 22px 1px #000;

  @media (min-width: 1024px) {
    box-shadow: 0px 2px 22px 1px #000;
    top: 0;
  }
`;

const StyledNavButton = styled.div`
  position: relative;
  height: 100%;
  width: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: ${({ theme }) => theme.tertiary};
  transition: 0.3s ease;

  &.active {
    color: ${({ theme }) => theme.quaternary};
  }
`;

const StyledFavoritesLabel = styled.div`
  position: absolute;
  background: #f00;
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
  color: #fff;
`;

const StyledSearchContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = () => {
  const { state, fetchData, setLoading } = useContext(AppContext);
  const { favorites } = state;
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const firstSearch = async () => {
      setLoading(true);
      const locationData = await axios.get('https://geolocation-db.com/json/');
      const city = locationData.data.city;

      const weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${WEATHER_API_KEY}`,
      );
      const weather = weatherData.data.weather[0].main;

      const date = new Date();
      const hour = date.getHours();
      const timeOfDay =
        hour < 14 ? 'Morning' : hour > 19 ? 'Night' : 'Afternoon';
      getPhotos(`${weather} ${timeOfDay}`);
    };
    firstSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    getPhotos(inputValue);
  };

  const getPhotos = (query) => {
    axios
      .get(
        `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&count=6&query=${query}`,
      )
      .then((response) => {
        const data = response.data.map((result) => {
          return {
            id: result.id,
            url: result?.urls.regular,
            username: result.user.username,
          };
        });
        fetchData(data);
        setLoading(false);
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
          <SearchIcon style={{ fontSize: '42px', color: '#b9b9b9' }} />
        </button>
      </StyledSearchContainer>
      <StyledNavButton as={NavLink} to={routes.favorites} activeclass="active">
        {favorites && favorites.length !== 0 && (
          <StyledFavoritesLabel>{favorites.length}</StyledFavoritesLabel>
        )}
        <FavoriteIcon style={{ fontSize: '72px' }} />
      </StyledNavButton>
    </StyledWrapper>
  );
};

export default Navbar;
