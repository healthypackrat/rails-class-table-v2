import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Main from './components/Main';
import createRootReducer from './reducers';
import parseLocation from './middleware/parseLocation';
import updateTitle from './middleware/updateTitle';
import updateLocation from './middleware/updateLocation';

const history = createHashHistory();

const middleware = [parseLocation, routerMiddleware(history), updateTitle, updateLocation];

const store = createStore(createRootReducer(history), composeWithDevTools(applyMiddleware(...middleware)));

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/search" component={Main} />
          <Route path="/" exact component={Main} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};
