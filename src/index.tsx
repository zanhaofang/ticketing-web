import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import "regenerator-runtime/runtime";
import createSagaMiddleware from 'redux-saga'
import { App } from './routes';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = {
  ...createStore(combineReducers({ ...reducers, router: routerReducer }), applyMiddleware(sagaMiddleware)),
  runSaga: sagaMiddleware.run
};

store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);


