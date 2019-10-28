import {TYPE_GANJIL_GENAP} from './types';

export const actionGanjilGenap = inputUser => {
    return {
        type: TYPE_GANJIL_GENAP, //men set type untuk dipanggil di reducers
        payload: inputUser //mengisi nilai payload dari inputan user
    }
}