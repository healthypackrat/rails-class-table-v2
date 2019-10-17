import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import entries from './entries';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  entries
});

export default createRootReducer;
