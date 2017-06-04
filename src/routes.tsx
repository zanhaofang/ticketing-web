import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import HomePage from './containers/HomePage';
import DetailPage from './containers/DetailPage';

const history = createHistory();

export const App = () => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/detal/:id" component={DetailPage} />
    </div>
  </Router>
)