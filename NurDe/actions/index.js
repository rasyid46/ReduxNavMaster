import {TYPE_GANJIL_GENAP} from './types';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

export const actionGanjilGenap = inputUser => {
    return{
        type: TYPE_GANJIL_GENAP, // men set type -> TYPE_GANJIL_GENAP untuk dipanggil di reducers
        payload: inputUser // mengisi nilai payload dari inputan user
    }
}