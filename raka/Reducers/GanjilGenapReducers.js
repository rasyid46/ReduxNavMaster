// 7 import type yang sudah dibikin sebelumnya
import {TYPE_GANJIL_GENAP} from '../actions/Types';

// 8 membuat inisial state awal sebagai media penyimpanan data

const initialState = {
  listInputan: [], //9 tampung nilai berupa array
};

//10 membuat fungsi reducers
//11 buat index.js di  folder Reducers

const ganjilGenapReducers = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_GANJIL_GENAP:
      return {
        listInputan: state.listInputan.concat({
          //operasi array untuk join/menggabung array
          key: Math.random(), //pembeda pada array
          value: action.payload,
        }),
      };
    default:
      return state;
  }
};
export default ganjilGenapReducers;
