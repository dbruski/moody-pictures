import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import Photo from '../components/organisms/Photo/Photo';
import { AppContext } from '../context';

const StyledFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
`;

function Home(props) {
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

Home.propTypes = {};

export default Home;
