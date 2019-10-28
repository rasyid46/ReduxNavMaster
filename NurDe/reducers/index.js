import {combineReducers} from 'redux'; // split 
import ganjilGenapReducer from './ganjilGenapReducer';

const allReducers = combineReducers({
    reducerGanjilGenap : ganjilGenapReducer
})
export default allReducers;