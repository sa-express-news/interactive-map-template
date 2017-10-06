import * as types from '../actions/action-types';

import pages from '../data/pages.json';

const defaultState = {
	len: pages.length,
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.GET_PAGE:
      return Object.assign({}, defaultState, pages[action.id]);
     default:
    	return state;
  }
}