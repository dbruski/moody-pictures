import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../../../context';
import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

const StyledWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  opacity: 0;
  color: white;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.6;
  }
`;

function PhotoInfo({ details }) {
  const { state, addPhoto, removePhoto, setFullScreen } = useContext(
    AppContext,
  );
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(
      Boolean(state.favorites.find((favorite) => favorite.id === details.id)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <StyledWrapper>
      {isFavorite ? (
        <>
          <FavoriteIcon
            style={{
              color: 'red',
              fontSize: '108px',
              cursor: 'pointer',
            }}
            onClick={() => removePhoto(details.id)}
          />
          <FullscreenIcon
            style={{
              fontSize: '36px',
              position: 'absolute',
              right: '5%',
              bottom: '5%',
              cursor: 'pointer',
            }}
            onClick={() => setFullScreen(details.url)}
          />
        </>
      ) : (
        <FavoriteBorderIcon
          style={{ fontSize: '108px', cursor: 'pointer' }}
          onClick={() => addPhoto(details)}
        />
      )}

      {details.username}
    </StyledWrapper>
  );
}

PhotoInfo.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    username: PropTypes.string,
  }),
};

export default PhotoInfo;
