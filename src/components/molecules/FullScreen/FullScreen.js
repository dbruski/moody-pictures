import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { AppContext } from '../../../context';
import PropTypes from 'prop-types';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9998;
`;

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }

  70% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.09);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);

  }
`;

const StyledWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 80vw;
  height: 80vh;
  box-shadow: 0px 4px 12px 0px #000;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 9999;
  animation: ${appear} 0.3s ease-in-out;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FullScreen = ({ url }) => {
  const { setFullScreen } = useContext(AppContext);

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledImg src={url} />
        <FullscreenExitIcon
          style={{
            fontSize: '36px',
            position: 'absolute',
            right: '1%',
            top: '1%',
            cursor: 'pointer',
          }}
          onClick={() => setFullScreen(null)}
        />
      </StyledWrapper>
    </StyledContainer>
  );
};

FullScreen.propTypes = {
  url: PropTypes.string.isRequired,
};

export default FullScreen;
