import { ALL_NIVEAU, GET_ERROR_NIVEAU } from "../types";


const initialState = {
    AllNiveau: [],
    error : {}
};

const NiveauReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case ALL_NIVEAU: {
            return { ...state, AllNiveau: payload };
        }

        case GET_ERROR_NIVEAU: {
            return { ...state, error: payload };
        }

        default:
            return state;
    }
};

export default NiveauReducer;