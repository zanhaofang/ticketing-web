import * as actions from '../actions';
import { combineReducers } from 'redux';

const defaultDataState = {
  carouselImages: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
  movieList: []
}

/**
 * 如 action 中包含 response 和 field, 更新 state[field]
 */
function data(state = defaultDataState, action) {
  console.log(action);
  if (action.response && action.field && action.response.data) {
    const data = action.response.data;
    const s = Object.assign({}, state, {
      [action.field]: action.response.data
    });
    return s;
  }

  return state;
}

export default {
  data
};
