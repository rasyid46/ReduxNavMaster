// importing module types
import { ADD_NUMBER } from "../actions/types";

// inisialisasi tempState
const tempState={
    tempArray:[] //buat tempArray
};

// create and export reducer numReducer
export const numReducer=(state=tempState,action)=>{
    //kondisi swith case dengan action.type dari ../action/types
    switch (action.type) {
        //jika typenya = ADD_NUMBER
        case ADD_NUMBER:
            return{
                //nambah value ke tempArray
                tempArray:state.tempArray.concat({
                    key:Math.random(),
                    value:action.payload
                })
            };
        default:
            return state;
    }
}