import { take, put, call, fork, select } from 'redux-saga/effects';
import * as actions from '../actions';
import * as selectors from '../reducers/selectors';
import { api } from '../services'

/***************************** Subroutines ************************************/

/**
 * 可复用的异步加载
 */
function* getData(data, apiFn, field: string, params = {}) {
  yield put( data.request(params) )
  const { response, error } = yield call(apiFn, params);
  console.log({res: response, err: error});
  if (response) {
    yield put( data.success(params, response, field) );
  } else {
    yield put( data.failure(params, error) );
  }
}

/**
 * 获取今日上映列表
 */
function* loadToday() {
  // cache
  const data = yield select(selectors.getToday);
  if (data.length <= 0) {
    const today = actions.movieList;
    const getMovieList = getData.bind(null, today, api.getMovieList)
    yield call(getMovieList, 'movieList');
    
  }
}


/******************************* WATCHERS *************************************/

function* watchLoadMovieList() {
  while(true) {
    yield take(actions.LOAD_MOVIE_LIST);
    yield fork(loadToday);
  }
}


export default function* root() {
  yield [
    fork(watchLoadMovieList)
  ]
}
