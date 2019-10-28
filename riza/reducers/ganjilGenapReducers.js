import {TYPE_GANJIL_GENAP} from '../actions/types';

//import inisialstate awal sebagai media penyimpanan data
const inisialState = {
    listInputan: [] // tampung nilai berupa array
};

//membuat fungsi reducer
const ganjilGenapReducers = (state = inisialState, action) => {
    switch (action.type) {
        case TYPE_GANJIL_GENAP:
            return{
                listInputan: state.listInputan.concat({
                    key: Math.random(),
                    value: action.payload
                })
            };
    
        default:
            return state;
    }
};

export default ganjilGenapReducers;