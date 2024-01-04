import { ALL_MODULES, ALL_MODULES_OF_FILLIER, ALL_MODULES_OF_PROF, GET_ERROR_MODULES } from "../types";


const initialState = {

    AllModules: [],
    AllModulesOfFillier: [],
    AllModulesOfProf: [],
    error : {}
};

const ModuleReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case ALL_MODULES: {
            return { ...state, AllModules: payload };
        }

        case ALL_MODULES_OF_FILLIER: {
            return { ...state, AllModulesOfFillier: payload };
        }

        case ALL_MODULES_OF_PROF: {
            return { ...state, AllModulesOfProf: payload };
        }

        case GET_ERROR_MODULES: {
            return { ...state, error: payload };
        }

        default:
            return state;
    }
};

export default ModuleReducer;