import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import { ConnectedRouter, push } from 'react-router-redux'
import HomePage from './containers/HomePage';
import DetailPage from './containers/DetailPage';

export interface RouterProps {
  history: any
}

export const App = (props: RouterProps) => {
  const { history } = props; 
  return (
    <ConnectedRouter  history={history}>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/detail/:id" component={DetailPage} />
      </div>
    </ConnectedRouter >
  )
}