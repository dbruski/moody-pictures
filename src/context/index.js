import React, { createContext, useReducer, useEffect } from 'react';
import reducer from '../reducer';
import {
  addPhoto as addPhotoAction,
  removePhoto as removePhotoAction,
  fetchData as fetchDataAction,
  setLoading as setLoadingAction,
} from '../actions';

const initialState =
  localStorage.getItem('moody-pictures-state') === null
    ? {
        isLoading: false,
        favorites: [],
        fetched: [],
      }
    : JSON.parse(localStorage.getItem('moody-pictures-state'));

export const AppContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      'moody-pictures-state',
      JSON.stringify({ favorites: state.favorites, fetched: state.fetched }),
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

  return (
    <AppContext.Provider
      value={{ state, addPhoto, removePhoto, fetchData, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};
