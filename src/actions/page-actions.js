import * as types from './action-types';

const getPage = (id) => {
	return {
    type: types.GET_PAGE,
    id
  };
};

export default {
	getPage: getPage,
}