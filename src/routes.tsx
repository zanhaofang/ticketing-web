import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import HomePage from './containers/HomePage';

const history = createHistory();

export const App = () => (
  <Router history={history}>
    <Route exact path="/" component={HomePage} />
  </Router>
)