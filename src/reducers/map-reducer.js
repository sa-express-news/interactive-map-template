import * as types from '../actions/action-types';

import markers from '../data/map.json';

export default (state = [], action) => {
  switch(action.type) {
    case types.GET_ALL_MARKERS:
      return state.concat(markers);
     default:
    	return state;
  }
}