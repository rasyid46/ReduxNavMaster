// importing module
import {combineReducers} from 'redux';
import {numReducer} from './number';

// combine all reducer
const allReducers=combineReducers({
    numList:numReducer
});

// export all Reducer
export default allReducers;