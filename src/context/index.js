import React, { createContext, useReducer, useEffect } from 'react';
import reducer from '../reducer';
import {
  addPhoto as addPhotoAction,
  removePhoto as removePhotoAction,
  fetchData as fetchDataAction,
  setLoading as setLoadingAction,
  setFullScreen as setFullScreenAction,
} from '../actions';

const initialState =
  localStorage.getItem('moody-pictures-state') === null
    ? {
        isLoading: false,
        favorites: [],
        fetched: [],
        fullScreen: null,
      }
    : JSON.parse(localStorage.getItem('moody-pictures-state'));

export const AppContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      'moody-pictures-state',
      JSON.stringify({ favorites: state.favorites }),
    );
  }, [state]);

  const addPhoto = (photo) => {
    dispatch(addPhotoAction(photo));
  };

  const removePhoto = (id) => {
    dispatch(removePhotoAction(id));
  };

  const fetchData = (fetched) => {
    dispatch(fetchDataAction(fetched));
  };

  const setLoading = (loading) => {
    dispatch(setLoadingAction(loading));
  };

  const setFullScreen = (url) => {
    dispatch(setFullScreenAction(url));
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addPhoto,
        removePhoto,
        fetchData,
        setLoading,
        setFullScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
