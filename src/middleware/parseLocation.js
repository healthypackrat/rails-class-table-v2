import { setFilterKey, setUseRegExp, setInvertResult, setHideNoDoc } from '../actions';
const qs = require('query-string');

let done = false;

const parseLocation = ({ getState, dispatch }) => next => action => {
  if (!done) {
    done = true;
    const router = getState().router;
    if (router.location.pathname === '/search') {
      const params = qs.parse(router.location.search);
      dispatch(setFilterKey(params.filterKey || ''));
      dispatch(setUseRegExp(params.useRegExp === 'true'));
      dispatch(setInvertResult(params.invertResult === 'true'));
      dispatch(setHideNoDoc(params.hideNoDoc === 'true'));
    } else if (router.location.pathname === '/') {
      dispatch(setFilterKey(''));
    }
  }
  return next(action);
};

export default parseLocation;
