import request from '../utils/request';

export const getToday = (params) => {
  return request({
    url: `movie/today/${params.cityId}`
  });
};
