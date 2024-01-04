import { ALL_PROF  , GET_ERROR_PROF } from "../types";


const initialState = {
    AllProf: [],
    error : {}
};

const ProfReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case ALL_PROF: {
            return { ...state, AllProf: payload };
        }

        case GET_ERROR_PROF: {
            return { ...state, error: payload };
        }

        default:
            return state;
    }
};

export default ProfReducer;