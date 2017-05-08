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



export const LOAD_TODAY_MOVIE: string = 'LOAD_TODAY_MOVIE';

export const loadTodayMovie = (cityId: number) => action(LOAD_TODAY_MOVIE, { cityId });

const TODAY: RequestTypes = createRequestTypes('TODAY');
export const today = {
  request: (params) => action(TODAY.REQUEST, { params }),
  success: (params, response, field) => action(TODAY.SUCCESS, { params, response, field }),
  failure: (params, error) => action(TODAY.FAILURE, { params, error }),
}
