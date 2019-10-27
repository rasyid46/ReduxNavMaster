import { combineReducers } from 'redux';
import ganjilGenapReducer from './ganjilGenapReducers';

const allReducers = combineReducers({
    dataAngka: ganjilGenapReducer
});
export default allReducers;