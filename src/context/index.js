import React, { createContext, useReducer } from 'react';
import reducer from '../reducer';
import {
  addPhoto as addPhotoAction,
  removePhoto as removePhotoAction,
  fetchData as fetchDataAction,
  setLoading as setLoadingAction,
} from '../actions';

const initialState = {
  isLoading: false,
  favorites: [
    {
      id: 'g2E2NQ5SWSU',
      url:
        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MDAzNH0',
      username: 'abc',
    },
    {
      id: 'g2E2NdsaQ5SWSU',
      url:
        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MDAzNH0',
      username: 'abc',
    },
  ],
  fetched: [
    {
      id: 'g2E2NQ5SWSU',
      url:
        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MDAzNH0',
      username: 'abc',
    },
    {
      id: 'g2E2N2Q5SWSU',
      url:
        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MDAzNH0',
      username: 'abc',
    },
    {
      id: 'g2E2NQ545SWSU',
      url:
        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MDAzNH0',
      username: 'abc',
    },
    {
      id: 'g2E2NQ5S65757WSU',
      url:
        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MDAzNH0',
      username: 'abc',
    },
    {
      id: 'g2E2NQ5Sf65757WSU',
      url:
        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MDAzNH0',
      username: 'abc',
    },
    {
      id: 'g2E2NQ5S6g5757WSU',
      url:
        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MDAzNH0',
      username: 'abc',
    },
  ],
};

export const AppContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
