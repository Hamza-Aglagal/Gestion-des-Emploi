import {  UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_DATES, ALL_DATES_SECONDAIRE, ALL_DATES_WITH_DAYS, DATES_DESPO_OF_PROF, GET_ERROR_DATES, MESSAGE_VALIDATION_DATE, ONE_DATES_SECONDAIRE } from "../types"




// Get All Dates 
export const GetAllDates = () => async (dispatch) => {
    try {
        const res = await UseGetdata('/DateHeure')
        // console.log('res :', res)
        dispatch({ type: ALL_DATES, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_DATES, payload:`Error: ${error.response}` })
    }
}


// Get All Dates premier with Days
export const GetAllDatesWithDays = () => async (dispatch) => {
    try {
        const res = await UseGetdata('/date-heure/allDates-premier')
        // console.log('res :', res)
        dispatch({ type: ALL_DATES_WITH_DAYS, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_DATES, payload:`Error: ${error.response}` })
    }
}

// Get All Dates Secondaire with Days
export const GetAllDatesSecondaire = () => async (dispatch) => {
    try {
        const res = await UseGetdata('/date-heure/allDate-secondaire')
        // console.log('res :', res)
        dispatch({ type: ALL_DATES_SECONDAIRE, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_DATES, payload:`Error: ${error.response}` })
    }
}

// Get One Date Secondaire
export const GetOneDatesSecondaire = (IdDate) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/date-heure/One-Date-secondaire/${IdDate}`)
        // console.log('res :', res)
        dispatch({ type: ONE_DATES_SECONDAIRE, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_DATES, payload:`Error: ${error.response}` })
    }
}



// Check if date is disponible of groupe or not
export const ChekDatesDiponibleOfGroupe = (Jour, IdDate, idProf, idGroupe) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/date-heure/Check-dateValide/${Jour}/${IdDate}/${idProf}/${idGroupe}`)
        // console.log('res :', res)
        dispatch({ type: MESSAGE_VALIDATION_DATE, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_DATES, payload:`Error: ${error.response}` })
    }
}


// Get All Dates Disponible in Day of Prof and groupe
export const GetAllDatesDisponibleInDay = (id , jour, groupeId) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/seances/dates-diponible/${id}/${jour}/${groupeId}`)
        // console.log('res :', res)
        dispatch({ type: DATES_DESPO_OF_PROF, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_DATES, payload:`Error: ${error.response}` })
    }
}


