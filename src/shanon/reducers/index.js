import ganjilGenapReducers from './ganjilGenapReducers';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  reducerGanjilGenap: ganjilGenapReducers,
});

export default allReducers;
