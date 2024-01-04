import { ALL_DATES, ALL_DATES_SECONDAIRE, ALL_DATES_WITH_DAYS, ALL_GROUPE_ENCADRE_PROF, DATES_DESPO_OF_PROF, DELETE_GROUPE_ENCADRE_PROF, GET_ERROR_DATES, GET_ERROR_ENCADRE, INITIAL_MESSAGE, MESSAGE_VALIDATION_DATE, MSG_ADD_ENCADRE, ONE_DATES_SECONDAIRE, SALLE_TIME_AVAILABLE_PROF_GRP } from "../types";


const initialState = {
    Msg_Add_Encadre: [],
    Msg_Delete_Encadre: [],
    ALLGrupeEncadre: [],
    DatesSallesAvailableGrpProf: [],
    error: {}
};

const EncadreReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {



        case MSG_ADD_ENCADRE: {
            return { ...state, Msg_Add_Encadre: payload };
        }
        
        case INITIAL_MESSAGE: {
            return { ...state, Msg_Add_Encadre: [], Msg_Delete_Encadre: [] };
        }

        case SALLE_TIME_AVAILABLE_PROF_GRP: {
            return { ...state, DatesSallesAvailableGrpProf: payload };
        }

        case ALL_GROUPE_ENCADRE_PROF: {
            return { ...state, ALLGrupeEncadre: payload };
        }

        case DELETE_GROUPE_ENCADRE_PROF: {
            return { ...state, Msg_Delete_Encadre: payload };
        }



        case GET_ERROR_ENCADRE: {
            return { ...state, error: payload };
        }

        default:
            return state;
    }
};

export default EncadreReducer;