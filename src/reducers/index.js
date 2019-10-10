import { SET_FILTER_KEY, SET_SORT_KEY, SET_HIDE_NO_DOC, SET_USE_REGEXP } from '../actionTypes';
import entries from '../data/entries.json';

const sortPriorities = {
  class_name: ['class_name'],
  class_desc: ['class_desc', 'method_desc', 'method_count', 'class_name'],
  method_count: ['method_count', 'method_desc', 'class_desc', 'class_name'],
  method_desc: ['method_desc', 'class_desc', 'method_count', 'class_name'],
  total: ['total', 'method_desc', 'class_desc', 'method_count', 'class_name']
};

const initialState = {
  filterKey: '',
  filteredEntries: entries.slice(),
  sortKey: 'class_desc',
  sortOrders: {
    class_name: 1,
    class_desc: -1,
    method_count: -1,
    method_desc: -1,
    total: -1
  },
  hideNoDoc: true,
  useRegExp: false
};

const filterEntries = state => {
  const sortPriority = sortPriorities[state.sortKey];
  return entries.filter(entry => {
    let useRegExp = state.useRegExp;
    let pattern;
    if (useRegExp) {
      try {
        pattern = new RegExp(state.filterKey, 'i');
      } catch (e) {
        useRegExp = false
      }
    }
    if (useRegExp) {
      return pattern.test(entry.class_name);
    } else {
      return entry.class_name.toLowerCase().indexOf(state.filterKey.toLowerCase()) !== -1;
    }
  }).filter(entry => {
    if (state.hideNoDoc) {
      return entry.total !== 0;
    } else {
      return true;
    }
  }).sort((a, b) => {
    for (let i = 0; i < sortPriority.length; i++) {
      const key = sortPriority[i]
      const x = a[key];
      const y = b[key];
      const order = state.sortOrders[key];
      if (x < y) {
        return -1 * order;
      } else if (x > y) {
        return 1 * order;
      }
    }
    return 0;
  }).map((entry, index) => {
    entry.index = index + 1;
    return entry;
  });
};

export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_FILTER_KEY:
      newState = {
        ...state,
        filterKey: action.payload.filterKey
      };
      newState.filteredEntries = filterEntries(newState);
      return newState;
    case SET_SORT_KEY:
      const sortKey = action.payload.sortKey;
      const order = sortKey === state.sortKey ? -1 : 1;
      const sortOrders = {...state.sortOrders};
      sortOrders[sortKey] *= order;
      newState = {
        ...state,
        sortKey,
        sortOrders
      };
      newState.filteredEntries = filterEntries(newState);
      return newState;
    case SET_HIDE_NO_DOC:
      newState = {
        ...state,
        hideNoDoc: action.payload.hideNoDoc
      }
      newState.filteredEntries = filterEntries(newState);
      return newState;
    case SET_USE_REGEXP:
      newState = {
        ...state,
        useRegExp: action.payload.useRegExp
      }
      newState.filteredEntries = filterEntries(newState);
      return newState;
    default:
      return state
  }
};
