import {  GET_ERROR_SALLE, SALLES_DISPO_WITH_JOUR_DATEHEUR } from "../types";


const initialState = {
    Salle_Dispo: [],
    error : {}
};

const SalleReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case SALLES_DISPO_WITH_JOUR_DATEHEUR: {
            return { ...state, Salle_Dispo: payload };
        }

        case GET_ERROR_SALLE: {
            return { ...state, error: payload };
        }

        default:
            return state;
    }
};

export default SalleReducer;