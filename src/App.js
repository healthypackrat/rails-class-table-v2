import React from 'react';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import rootReducer from './reducers';

const store = createStore(rootReducer, devToolsEnhancer());

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/search" component={Main} />
          <Route path="/" exact component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
};
