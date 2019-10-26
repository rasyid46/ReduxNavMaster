import { CEK_GANJILGENAP } from './types';

export function cekGanjilGenap(inputAngka) {
    return {
        type: CEK_GANJILGENAP,
        payload: inputAngka
    }
}