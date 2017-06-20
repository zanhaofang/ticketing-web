const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

interface RequestTypes {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
}

/**
 * 创建异步请求所用 typs 集合
 */
function createRequestTypes(base: string): RequestTypes {
  return {
    REQUEST: `${base}_${REQUEST}`,
    SUCCESS: `${base}_${SUCCESS}`,
    FAILURE: `${base}_${FAILURE}`
  };
}
 
/**
 * 构造 action
 */
function action(type: string, payload: any = {}) {
  return { type, ...payload };
}



// 首页电影列表
export const LOAD_MOVIE_LIST: string = 'LOAD_MOVIE_LIST';

export const loadMovieList = () => action(LOAD_MOVIE_LIST);

const MOVIE_LIST: RequestTypes = createRequestTypes('MOVIE_LIST');

export const movieList = {
  request: (params) => action(MOVIE_LIST.REQUEST, { params }),
  success: (params, response, field) => action(MOVIE_LIST.SUCCESS, { params, response, field }),
  failure: (params, error) => action(MOVIE_LIST.FAILURE, { params, error }),
}

// 跳转电影详情页
export const TO_MOVIE_DETAIL: string = 'TO_MOVIE_DETAIL';

export const toMovieDetail = () => action(TO_MOVIE_DETAIL);