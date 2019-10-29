import {TYPE_GANJIL_GENAP} from './Types'; //6

//6
// ke folder Reducers
export const actionGanjilGenap = inputUser => {
  return {
    type: TYPE_GANJIL_GENAP,
    //men set type ganjil genap untuk dipanggil di reducer
    payload: inputUser,
    //mengisi nilai payload untuk inputan user
  };
};
