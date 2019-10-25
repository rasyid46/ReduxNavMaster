import {combineReducers} from 'redux';
import numReducer from './number';

const allReducers=combineReducers({
    numList:numReducer
});

export default allReducers;