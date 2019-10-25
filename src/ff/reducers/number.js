import { addNumber } from "../actions/types";

//inisialisasi tempState
const tempState={
    tempArray:[] //buat tempArray
};

export const numReducer=(state=tempState,action)=>{
    //kondisi swith case dengan action.type dari ../action/types
    switch (action.type) {
        //jika typenya = ADD_CITY
        case addNumber:
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