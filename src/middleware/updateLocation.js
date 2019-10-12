import { push } from 'connected-react-router';
import { SET_FILTER_KEY, SET_HIDE_NO_DOC, SET_INVERT_RESULT, SET_USE_REGEXP } from '../actionTypes';
const qs = require('query-string');

const updateLocation = ({ getState, dispatch }) => next => action => {
  const result = next(action);

  switch (action.type) {
    case SET_FILTER_KEY:
    case SET_HIDE_NO_DOC:
    case SET_INVERT_RESULT:
    case SET_USE_REGEXP:
      const router = getState().router;
      const currentLocation = router.location.pathname + router.location.search;

      const entries = getState().entries;
      const query = qs.stringify({
        filterKey: entries.filterKey,
        useRegExp: entries.useRegExp,
        invertResult: entries.invertResult,
        hideNoDoc: entries.hideNoDoc
      });
      const newLocation = entries.filterKey ? `/search?${query}` : '/';

      if (newLocation !== currentLocation) {
        dispatch(push(newLocation));
      }
      break;
    default:
      break;
  }

  return result;
};

export default updateLocation;
