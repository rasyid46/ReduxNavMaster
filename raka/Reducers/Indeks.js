import {combineReducers} from 'redux'; //12 import combineReducers from 'redux'
import GanjilGenapReducers from './GanjilGenapReducers'; //12

//13
//14 buat file App.js pada folder raka
const semuaReducers = combineReducers({
  reducerGanjilGenap: GanjilGenapReducers,
});

export default semuaReducers;
