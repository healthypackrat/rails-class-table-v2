import { SET_FILTER_KEY, SET_SORT_KEY, SET_HIDE_NO_DOC } from './actionTypes';

export const setFilterKey = filterKey => ({
  type: SET_FILTER_KEY,
  payload: {
    filterKey
  }
});

export const setSortKey = sortKey => ({
  type: SET_SORT_KEY,
  payload: {
    sortKey
  }
});

export const setHideNoDoc = hideNoDoc => ({
  type: SET_HIDE_NO_DOC,
  payload: {
    hideNoDoc
  }
});