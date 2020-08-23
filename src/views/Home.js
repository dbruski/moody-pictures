import React, { useContext } from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import Photo from '../components/organisms/Photo/Photo';
import { AppContext } from '../context';

const StyledFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
`;

function Home() {
  const { state } = useContext(AppContext);

  return (
    <MainTemplate>
      <>
        <StyledFlex>
          {state.fetched.map((group, idx) => (
            <Photo key={group.id} details={group} />
          ))}
        </StyledFlex>
      </>
    </MainTemplate>
  );
}

export default Home;
