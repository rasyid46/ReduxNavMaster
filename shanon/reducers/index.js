import {combineReducers} from 'redux';
import angkaReducer from './angkaReducers';

const allReducers = combineReducers({
  listAngka: angkaReducer,
});

export default allReducers;
