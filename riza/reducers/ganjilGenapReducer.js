import { ADD_BIL } from "../actions/types";

const initialState = {
    ganjilGenapName: '',
    bilangan: [], //tampung nilai berupa array
};

const ganjilGenapReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BIL:
            return {
                ...state,
                bilangan: state.places.concat({
                    key: Math.random(),
                    value: action.payload,
                })
            }

        default:
            return state;
    };
}

export default ganjilGenapReducer;