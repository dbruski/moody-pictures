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
