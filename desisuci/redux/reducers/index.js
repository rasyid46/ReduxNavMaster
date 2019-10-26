import { combineReducers } from 'redux';
import ganjilGenapReducer from './ganjilGenapReducer';

const allReducers = combineReducers({
    dataAngka: ganjilGenapReducer
});
export default allReducers;