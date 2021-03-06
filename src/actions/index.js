export const addPhoto = (details) => {
  return {
    type: 'ADD_PHOTO',
    payload: { details },
  };
};

export const removePhoto = (id) => {
  return {
    type: 'REMOVE_PHOTO',
    payload: { id },
  };
};

export const fetchData = (fetched) => {
  return {
    type: 'FETCH_DATA',
    payload: { fetched },
  };
};

export const setLoading = (loading) => {
  return {
    type: 'SET_LOADING',
    payload: { loading },
  };
};

export const setFullScreen = (url) => {
  return {
    type: 'SET_FULL_SCREEN',
    payload: { url },
  };
};
