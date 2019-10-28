// importing module types
import {ADD_NUMBER} from './types';

// export reducer addNumber
export const addNumber=num=>{
    return{
        type:ADD_NUMBER,
        payload:num
    }
}