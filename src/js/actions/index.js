import {INPUT_SEARCH,DELETE_MOVIE,ADD_MOVIE,RATING_SEARCH,EDIT_MOVIE } from '../contantes/actions-types'

export const inputSearch = payload => ({
    type: INPUT_SEARCH,
    payload
  });

export const addMovie = payload => ({
    type: ADD_MOVIE,
    payload
  });

export const deleteMovie = payload => ({
    type: DELETE_MOVIE,
    payload
  });

export const editMovie = payload => ({
    type: EDIT_MOVIE,
    payload
  });

export const ratingSearch = payload => ({
    type: RATING_SEARCH,
    payload
  });
