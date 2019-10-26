import { CEK_GANJILGENAP } from '../actions/types';

const initState = {
    angka: []
};

const ganjilGenapReducer = (state = initState, action) => {
    switch (action.type) {
        case CEK_GANJILGENAP:
            if (parseInt(action.payload) % 2 == 0) {
                return {
                    angka: state.angka.concat(
                        {
                            key: Math.random(),
                            value: action.payload,
                            message: 'Bilangan Genap'
                        }
                    )
                }
            } else {
                return {
                    angka: state.angka.concat(
                        {
                            key: Math.random(),
                            value: action.payload,
                            message: 'Bilangan Ganjil'
                        }
                    )
                }
            }
            ;
        default:
            return state;
    }
}

export default ganjilGenapReducer;