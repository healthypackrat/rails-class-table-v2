import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore';
import Main from './components/Main';

const store = configureStore();

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
}
