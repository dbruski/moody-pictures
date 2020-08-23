import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border: 1px solid red;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

function Photo({ details }) {
  return (
    <StyledWrapper>
      <StyledImage src={details.url} />
    </StyledWrapper>
  );
}

// Photo.propTypes = {};

export default Photo;
