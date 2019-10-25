import { combineReducers } from "redux";
import ganjilGenapReducer from "./ganjilGenapReducer";
const allReducers = combineReducers({
    listGanjilGenap: ganjilGenapReducer,
});

export default allReducers;