import React, { useState, useContext, useEffect } from 'react';
// import PropTypes from 'prop-types'
import { AppContext } from '../../../context';
import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

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

function PhotoInfo({ details, addPhotoFc }) {
  const { state, addPhoto, removePhoto } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(
      Boolean(state.favorites.find((favorite) => favorite.id === details.id)),
    );
  }, [state]);

  return (
    <StyledWrapper>
      {isFavorite ? (
        <FavoriteIcon
          style={{ color: 'red', fontSize: '72px', cursor: 'pointer' }}
          onClick={() => removePhoto(details.id)}
        />
      ) : (
        <FavoriteBorderIcon
          style={{ fontSize: '72px', cursor: 'pointer' }}
          onClick={() => addPhoto(details)}
        />
      )}

      {details.username}
    </StyledWrapper>
  );
}

// PhotoInfo.propTypes = {}

export default PhotoInfo;