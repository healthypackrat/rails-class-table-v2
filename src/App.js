import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import rootReducer from './reducers';
import updateTitle from './middleware/updateTitle';

const middleware = [updateTitle];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

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
