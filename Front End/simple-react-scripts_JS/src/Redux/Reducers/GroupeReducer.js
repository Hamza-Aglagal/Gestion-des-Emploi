import { ALL_GROUPE, ALL_GROUPE_ACTIVE, ALL_GROUPE_WITH_NIVEAU, GET_ERROR_GROUPE } from "../types";


const initialState = {
    GroupeActive: [],
    AllGroupe: [],
    AllGroupeWithNiveau: [],
    error : {}
};

const GroupeReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case ALL_GROUPE_ACTIVE: {
            return { ...state, GroupeActive: payload };
        }
        case ALL_GROUPE: {
            return { ...state, AllGroupe: payload };
        }
        case ALL_GROUPE_WITH_NIVEAU: {
            return { ...state, AllGroupeWithNiveau: payload };
        }


        case GET_ERROR_GROUPE: {
            return { ...state, error: payload };
        }

        default:
            return state;
    }
};

export default GroupeReducer;