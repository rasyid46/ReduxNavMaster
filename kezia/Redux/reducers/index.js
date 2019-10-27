import {combineReducers} from 'redux';
import ganjilgenapReducers from './ganjilgenapReducers';

const allReducers = combineReducers({
    dataAngka: ganjilgenapReducers
});
export default allReducers;