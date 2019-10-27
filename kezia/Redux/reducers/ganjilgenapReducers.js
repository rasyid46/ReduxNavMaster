import {CHECK_GANJILGENAP} from '../actions/types';

const initState = { 
    angka: []
};

const ganjilgenapReducers = (state = initState, action) => {
    switch(action.type){
        case CHECK_GANJILGENAP:
            if(parseInt(action.payload)%2 == 0){
                return{
                    numbers: state.numbers.concat(
                        {
                            key: Math.random(),
                            value: action.payload,
                            message: 'bilangan Genap'
                        }
                    )
                }
            }else{
                return{
                    numbers: state.numbers.concat(
                        {
                            key: Math.random(),
                            value: action.payload,
                            message: 'bilangan Ganjil'
                        }
                    )
                }
            }
            ;
        default: 
            return state;
    }
}

export default ganjilgenapReducers;