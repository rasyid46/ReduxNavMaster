import {ADD_BIL} from "./types";

export const addBil = ganjilGenap => {
    return {
        type: ADD_BIL,
        payload: ganjilGenap,
    }
}