import {combineReducers} from 'redux';
import ganjilGenapReducers from './ganjilGenapReducers';

const allReducers = combineReducers({
    reducerGanjilGenap: ganjilGenapReducers,
});

export default allReducers;