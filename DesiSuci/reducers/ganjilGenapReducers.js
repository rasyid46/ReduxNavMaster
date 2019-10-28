//import type yang sudah dibikin sebelumnya
import { TYPE_GANJIL_GENAP } from '../actions/types';

//membuat inisial state awal sebagai media penyimpanan data 
const inisialState = {
    listInputan: [] //tampung nilai berupa array
};

//membuat fungsi reducers
const ganjilGenapReducers = (state = inisialState, action) => {
    switch (action.type) {
        case TYPE_GANJIL_GENAP:
            return {
                listInputan: state.listInputan.concat({ //concat operasi array untuk join array
                    key: Math.random(),
                    value: action.payload
                })
            };
        default:
            return state;
    }
};

export default ganjilGenapReducers;