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
function* loadMovieList() {
  // cache
  const data = yield select(selectors.getMovieList);
  const moveListAction = actions.movieList;
  const getMovieList = getData.bind(null, moveListAction, api.getMovieList);
  yield call(getMovieList, 'movieList');
}

/**
 * 电影详情
 */
function* loadMovieDetail(id: number) {
  const data = yield select(selectors.getMovieDetail);
  const movieDetailAction = actions.movieDetail;
  const getMovieDetail = getData.bind(null, movieDetailAction, api.getMovieDetail);
  yield call(getMovieDetail, 'movieDetail', { id });
}

/**
 * 获取所有区域列表
 */
function* loadAreaList() {
  // cache
  const data = yield select(selectors.getAreaList);
  const areaListAction = actions.areaList;
  const getAreaList = getData.bind(null, areaListAction, api.getAreaList);
  yield call(getAreaList, 'areaList');
}

/**
 * 获取所有区域列表
 */
function* loadCinemaList() {
  // cache
  const data = yield select(selectors.getCinemaList);
  const cinemaListAction = actions.cinemaList;
  const getCinemaList = getData.bind(null, cinemaListAction, api.getCinemaList);
  yield call(getCinemaList, 'cinemaList');
}



/******************************* WATCHERS *************************************/

function* watchLoadMovieList() {
  while(true) {
    yield take(actions.LOAD_MOVIE_LIST);
    yield fork(loadMovieList);
  }
}


function* watchLoadMovieDetail() {
  while(true) {
    const { id } = yield take(actions.LOAD_MOVIE_DETAIL);
    yield fork(loadMovieDetail, id);
  }
}

function* watchLoadAreaList() {
  while(true) {
    yield take(actions.LOAD_AREA_LIST);
    yield fork(loadAreaList);
  }
}

function* watchLoadCinemaList() {
  while(true) {
    yield take(actions.LOAD_CINEMA_LIST);
    yield fork(loadCinemaList);
  }
}

export default function* root() {
  yield [
    fork(watchLoadMovieList),
    fork(watchLoadMovieDetail),
    fork(watchLoadAreaList),
    fork(watchLoadCinemaList)
  ]
}

