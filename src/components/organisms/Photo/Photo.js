import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PhotoInfo from './PhotoInfo';

const StyledWrapper = styled.div`
  position: relative;
  min-height: 230px;
  background: center center no-repeat;
  background-image: url(${({ url }) => url});
  background-size: cover;
  flex: 1;
  @media (min-width: 1024px) {
    &:nth-child(1) {
      grid-area: a;
    }
    &:nth-child(2) {
      grid-area: b;
    }
    &:nth-child(3) {
      grid-area: c;
    }
    &:nth-child(4) {
      grid-area: d;
    }
    &:nth-child(5) {
      grid-area: e;
    }
    &:nth-child(6) {
      grid-area: f;
    }
  }
`;

function Photo({ details }) {
  const { url } = details;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledWrapper
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      url={url}
    >
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
