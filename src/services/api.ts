import request from '../utils/request';

export const getMovieList = (params) => {
  return request({
    url: `api/movie`
  });
};

export const getMovieDetail = (params) => {
  return request({
    url: `api/movie/${params.movieId}`
  })
}