import { SET_FILTER_KEY, SET_SORT_KEY, SET_HIDE_NO_DOC, SET_USE_REGEXP, SET_INVERT_RESULT } from '../actionTypes';
import entries from '../data/entries.json';

const sortPriorities = {
  class_name: ['class_name'],
  class_desc: ['class_desc', 'method_desc', 'method_count', 'class_name'],
  method_count: ['method_count', 'method_desc', 'class_desc', 'class_name'],
  method_desc: ['method_desc', 'class_desc', 'method_count', 'class_name'],
  total: ['total', 'method_desc', 'class_desc', 'method_count', 'class_name']
};

const defaultSortKey = 'class_desc';
const validSortKeys = Object.keys(sortPriorities);

const initialState = {
  filterKey: '',
  filteredEntries: [],
  sortKey: defaultSortKey,
  sortOrders: {
    class_name: 1,
    class_desc: -1,
    method_count: -1,
    method_desc: -1,
    total: -1
  },
  hideNoDoc: true,
  useRegExp: false,
  invertResult: false
};

const totalChars = entries.reduce((sum, entry) => sum + entry.total, 0);

const setFilteredEntries = state => {
  state.filteredEntries = filterEntries(state);
  const filteredTotalChars = state.filteredEntries.reduce((sum, entry) => sum + entry.total, 0);
  if (state.filteredEntries.length === entries.length) {
    state.percentage = 100;
  } else if (state.filteredEntries.length === 0) {
    state.percentage = 0;
  } else {
    state.percentage = Math.round((filteredTotalChars / totalChars) * 10000) / 100;
  }
  return state;
};

const filterEntries = state => {
  const sortPriority = sortPriorities[state.sortKey];
  return entries.filter(entry => {
    let useRegExp = state.useRegExp;
    let pattern;
    let condition;
    if (useRegExp) {
      try {
        pattern = new RegExp(state.filterKey, 'i');
      } catch (e) {
        useRegExp = false;
      }
    }
    if (useRegExp) {
      condition = pattern.test(entry.class_name);
    } else {
      condition = entry.class_name.toLowerCase().indexOf(state.filterKey.toLowerCase()) !== -1;
    }
    return state.invertResult ? !condition : condition;
  }).filter(entry => {
    if (state.hideNoDoc) {
      return entry.total !== 0;
    } else {
      return true;
    }
  }).sort((a, b) => {
    for (let i = 0; i < sortPriority.length; i++) {
      const key = sortPriority[i];
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
    return {
      ...entry,
      index: index + 1
    };
  });
};

const on_SET_FILTER_KEY = (state, action) => {
  const newState = {
    ...state,
    filterKey: action.payload.filterKey
  };
  return setFilteredEntries(newState);
};

const on_SET_SORT_KEY = (state, action) => {
  let sortKey = action.payload.sortKey;
  if (!validSortKeys.includes(sortKey)) {
    sortKey = defaultSortKey;
  }
  const order = (action.payload.reverse && sortKey === state.sortKey) ? -1 : 1;
  const sortOrders = {...state.sortOrders};
  sortOrders[sortKey] *= order;
  const newState = {
    ...state,
    sortKey,
    sortOrders
  };
  return setFilteredEntries(newState);
};

const on_SET_HIDE_NO_DOC = (state, action) => {
  const newState = {
    ...state,
    hideNoDoc: action.payload.hideNoDoc
  };
  return setFilteredEntries(newState);
};

const on_SET_USE_REGEXP = (state, action) => {
  const newState = {
    ...state,
    useRegExp: action.payload.useRegExp
  };
  return setFilteredEntries(newState);
};

const on_SET_INVERT_RESULT = (state, action) => {
  const newState = {
    ...state,
    invertResult: action.payload.invertResult
  };
  return setFilteredEntries(newState);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_KEY:
      return on_SET_FILTER_KEY(state, action);
    case SET_SORT_KEY:
      return on_SET_SORT_KEY(state, action);
    case SET_HIDE_NO_DOC:
      return on_SET_HIDE_NO_DOC(state, action);
    case SET_USE_REGEXP:
      return on_SET_USE_REGEXP(state, action);
    case SET_INVERT_RESULT:
      return on_SET_INVERT_RESULT(state, action);
    default:
      return state;
  }
};
