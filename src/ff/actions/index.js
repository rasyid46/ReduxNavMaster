//import module
import {addNumber} from './types';

//export module addNum
export const addNum=num=>{
    return {
        type:addNumber,
        payload:num
    }
}