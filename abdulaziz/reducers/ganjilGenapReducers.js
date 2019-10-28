//import type yg suda di bikin sebelumnya
// import { TYPE_GANJIL_GENAP } '../actions/types';



import{TYPE_GANJIL_GENAP} from '../actions/types';

//membuat inisial state awal sebagai media penyimpanan

const initialState = {
    listInputan:[] // tampung nilai berupa array
};

//membuat fungsi reducers
const ganjilGenapReducers = (state = initialState,action) =>{
    switch (action.type) {
        case TYPE_GANJIL_GENAP:
            return{
                listInputan : state.listInputan.concat({
                    key : Math.random(),
                    value : action.payload
                })
            }    
        default:
            return state;
    }
}
export default ganjilGenapReducers;