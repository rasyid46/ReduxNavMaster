import {CHECK_GANJILGENAP} from './types';

export function checkGanjilGenap(inputAngka){
    return{
        type: CHECK_GANJILGENAP,
        payload: inputAngka
    }
}