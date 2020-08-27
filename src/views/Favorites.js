import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import MainTemplate from '../templates/MainTemplate';
import Photo from '../components/organisms/Photo/Photo';

const StyledGrid = styled.div`
  display: grid;

  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const StyledInfo = styled.p`
  padding-top: 35vh;
  color: white;
  text-align: center;
`;

const Favorites = () => {
  const { state } = useContext(AppContext);
  const { favorites } = state;

  return (
    <MainTemplate>
      {favorites.length ? (
        <StyledGrid>
          {favorites.map((favorite) => (
            <Photo key={favorite.id} details={favorite} />
          ))}
        </StyledGrid>
      ) : (
        <StyledInfo>
          You don't have any favorite photos. <br />
          Go and add some{' '}
          <Link style={{ color: 'red' }} to={routes.home}>
            here
          </Link>
          .
        </StyledInfo>
      )}
    </MainTemplate>
  );
};

export default Favorites;
