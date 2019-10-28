import { TYPE_GANJIL_GENAP } from './types';

export const actionGanjilGenap = inputUser => {
    return {
        type : TYPE_GANJIL_GENAP, //men set type -> TYPE_GANJIL_GENAP
        payload: inputUser, //mengisi payload dr input user
    }
}