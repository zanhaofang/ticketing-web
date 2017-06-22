import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory'
import "regenerator-runtime/runtime";
import createSagaMiddleware from 'redux-saga'
import { App } from './routes';
import { ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux';
import reducers from './reducers';
import rootSaga from './sagas'

const history = createHistory()
const sagaMiddleware = createSagaMiddleware();
const middleware  = routerMiddleware(history);



const store = {
  ...createStore(combineReducers({ ...reducers, router: routerReducer }), applyMiddleware(sagaMiddleware, middleware)),
  runSaga: sagaMiddleware.run
};

store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById("app")
);


