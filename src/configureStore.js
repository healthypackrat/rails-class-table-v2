import { createHashHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import parseLocation from './middleware/parseLocation';
import updateTitle from './middleware/updateTitle';
import updateLocation from './middleware/updateLocation';

export const history = createHashHistory();

const middleware = [parseLocation, routerMiddleware(history), updateTitle, updateLocation];

export default function configureStore(preloadedState) {
  return createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}
