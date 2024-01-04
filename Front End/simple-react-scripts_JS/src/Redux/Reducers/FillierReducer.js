import { ALL_FILLIER, GET_ERROR_FILLIER } from "../types";


const initialState = {
    AllFillier: [],
    error : {}
};

const FillierReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case ALL_FILLIER: {
            return { ...state, AllFillier: payload };
        }

        case GET_ERROR_FILLIER: {
            return { ...state, error: payload };
        }

        default:
            return state;
    }
};

export default FillierReducer;