import { ALL_DATES, ALL_DATES_SECONDAIRE, ALL_DATES_WITH_DAYS, DATES_DESPO_OF_PROF, GET_ERROR_DATES, MESSAGE_VALIDATION_DATE, ONE_DATES_SECONDAIRE } from "../types";


const initialState = {
    AllDates: [],
    AllDateWithDays : [],
    AllDateSecondaire : [],
    OneDateSecondaire : [],
    Date_Dispo_Of_Prof : [],
    CheckDateOfProfGr : [],
    error : {}
};

const DateReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case ALL_DATES: {
            return { ...state, AllDates: payload };
        }
        case DATES_DESPO_OF_PROF: {
            return { ...state, Date_Dispo_Of_Prof: payload };
        }
        case ALL_DATES_WITH_DAYS: {
            return { ...state, AllDateWithDays : payload };
        }
        case ALL_DATES_SECONDAIRE: {
            return { ...state, AllDateSecondaire : payload };
        }
        case ONE_DATES_SECONDAIRE: {
            return { ...state, OneDateSecondaire : payload };
        }
        case MESSAGE_VALIDATION_DATE: {
            return { ...state, CheckDateOfProfGr : payload };
        }

        case GET_ERROR_DATES: {
            return { ...state, error: payload };
        }

        default:
            return state;
    }
};

export default DateReducer;