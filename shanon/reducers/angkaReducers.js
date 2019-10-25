import {ANGKA} from '../actions/types';

const initialState = {
  tempatAngka: [], //tampung nilai berupa array
};

const angkaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANGKA:
      return {
        tempatAngka: state.tempatAngka.concat({
          key: Math.random(),
          angka: action.isiAngka,
          status: action.isiStatus,
          //nama: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default angkaReducer;
