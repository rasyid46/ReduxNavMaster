//import types
import {TYPE_GANJIL_GENAP} from '../actions/types';

//membuat initial state awal sebagai media penyimpanan data

const initialState = {
    listInputan: [] //tampung nilai berapa array 
};

//membuat fungsi reducers
const ganjilGenapReducer = (state = initialState, actions) => {
    switch(actions.type){
        case TYPE_GANJIL_GENAP:
            return{
                listInputan: state.listInputan.concat({ //concat operasi array untuk join array 
                    key: Math.random(),
                    value: actions.payload
                })
            };
        default:
            return state;
    }
};

export default ganjilGenapReducer;