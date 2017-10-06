import { combineReducers } from 'redux';

// Reducers
import markers from './map-reducer';
import page from './page-reducer';

// Combine Reducers
const reducers = combineReducers({
    markers,
    page,
});

export default reducers;