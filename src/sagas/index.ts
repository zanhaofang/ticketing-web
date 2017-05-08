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
function* loadToday(cityId: number) {
  // cache
  const data = yield select(selectors.getToday, cityId);
  if (data.length <= 0) {
    const today = actions.today;
    const getToday = getData.bind(null, today, api.getToday)
    yield call(getToday, 'todayMovies', { cityId });
  }
}


/******************************* WATCHERS *************************************/

function* watchLoadTodayMovie() {
  while(true) {
    const { cityId } = yield take(actions.LOAD_TODAY_MOVIE);
    yield fork(loadToday, cityId);
  }
}


export default function* root() {
  yield [
    fork(watchLoadTodayMovie)
  ]
}
