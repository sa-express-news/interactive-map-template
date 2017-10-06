import * as types from './action-types';

const getAllMarkers = () => {
	return {
    type: types.GET_ALL_MARKERS
  };
};

export default {
	getAllMarkers: getAllMarkers,
}