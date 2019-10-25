import {ANGKA} from './types';

export const addAngka = (adaAngka, adaStatus) => {
  return {
    type: ANGKA,
    isiAngka: adaAngka,
    isiStatus: adaStatus,
  };
};
