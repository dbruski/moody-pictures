import React, { useContext } from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import Photo from '../components/organisms/Photo/Photo';
import { AppContext } from '../context';

const StyledGrid = styled.main`
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 5px;
  overflow: hidden;
  grid-template-areas: 'a a b b' 'a a d c' 'f e e c';
`;

function Home() {
  const { state } = useContext(AppContext);

  return (
    <MainTemplate>
      <StyledGrid>
        {state.fetched.map((group) => (
          <Photo key={group.id} details={group} />
        ))}
      </StyledGrid>
    </MainTemplate>
  );
}

export default Home;
