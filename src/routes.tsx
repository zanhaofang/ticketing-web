import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import { ConnectedRouter, push } from 'react-router-redux'
import HomePage from './containers/HomePage';
import DetailPage from './containers/DetailPage';
import CinemaPage from './containers/CinemaPage';
import ShowPage from './containers/ShowPage';
import SeatsPage from './containers/SeatsPage';

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
        <Route path="/movie/:movieId/cinema" component={CinemaPage} />
        <Route path="/show/movie/:movieId/cinema/:cinemaId" component={ShowPage} />
        <Route path="/seats/:movieId/show/:showId/date/:showDate" component={SeatsPage} />
      </div>
    </ConnectedRouter >
  )
}