// import type yang udah di bikin sebelumnya
import {TYPE_GANJIL_GENAP} from '../actions/types';

//membuat inisial state awal sebagai media penyimpanan data

const inisialState = {
  listInput: [], //tampung nilai berupa array
};

//membuat fungsi reducers
const ganjilGenapReducer = (state = inisialState, action) => {
  switch (action.type) {
    case TYPE_GANJIL_GENAP:
      return  {
        listInputan: state.listInputan.concat({
          key: Math.random(),
          value: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default ganjilGenapReducer;
