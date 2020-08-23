import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PhotoInfo from './PhotoInfo';

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
  const { url } = details;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledWrapper
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledImage src={url} />
      {isHovered && <PhotoInfo details={details} />}
    </StyledWrapper>
  );
}

Photo.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    username: PropTypes.string,
  }),
};

export default Photo;
