const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_PHOTO':
      return {
        ...state,
        favorites: [...state.favorites, payload.details],
      };
    case 'REMOVE_PHOTO':
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((photo) => photo.id !== payload.id),
        ],
      };
    case 'FETCH_DATA':
      return {
        ...state,
        fetched: [...payload.fetched],
      };

    default:
      return state;
  }
};

export default reducer;
