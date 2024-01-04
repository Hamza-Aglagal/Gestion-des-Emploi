import { UseInsertData } from "../../hooks/crud/useInsertData"
import {  UseGetdata } from "../../hooks/crud/UseGetdata"
import {  ALL_SEANCE_OF_PROF, EMPLOI_GROUPES, GET_ERROR_EMPLOI_OF_PROF, GET_ERROR_SEANCE_OF_PROF, MSG_ADD_SEANCE, MSG_ADD_SEANCE_TEMPORAIRE, MSG_DELETE_EMPLOI, MSG_DELETE_SEANCE, TIME_AVAILABLE_PROF_GP } from "../types"




// Get All Seance Of Prof 
export const GetAllSeanceOfProf = (idProf) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/seances/professeur/${idProf}`)
        // console.log('res :', res)
        dispatch({ type: ALL_SEANCE_OF_PROF, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_SEANCE_OF_PROF, payload:`Error: ${error.response}` })
    }
}

// Get All Emploi Of each Groupe with list id groupe
export const GetAllEmploiOfGroupes = (formData) => async (dispatch) => {
    try {
        const res = await UseInsertData(`/emploi/list-groupe`, formData)
        // console.log('res :', res)
        dispatch({ type: EMPLOI_GROUPES, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_SEANCE_OF_PROF, payload:`Error: ${error.response}` })
    }
}


// Add seance
export const AddSeance = (formData) => async (dispatch) => {
    try {
        const res = await UseInsertData(`/seance`,formData)
        // console.log('res :', res)
        dispatch({ type: MSG_ADD_SEANCE, payload: res.data   })
    } catch (error) {
        dispatch({ type: GET_ERROR_SEANCE_OF_PROF, payload:`Error: ${error.response}` })
    }
}

// Delete seance
export const DeleteSeance = (id) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/seances/delete/${id}`)
        // console.log('res :', res)
        dispatch({ type: MSG_DELETE_SEANCE, payload: res.data   })
    } catch (error) {
        dispatch({ type: GET_ERROR_SEANCE_OF_PROF, payload:`Error: ${error.response}` })
    }
}

// Delete Emploi Of Prof
export const DeleteEmploi = (id) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/emploi/professeur/${id}`)
        // console.log('res :', res)
        dispatch({ type: MSG_DELETE_EMPLOI, payload: res.data   })
    } catch (error) {
        dispatch({ type: MSG_DELETE_EMPLOI, payload:`Error: ${error.response}` })
    }
}

// Get All Time Available Between  Prof and Groupe 
export const GetTimesAvailabLeOfProAndGRoupe = (idProf,idGroupe) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/time/available/${idProf}/${idGroupe}`)
        // console.log('res :', res)
        dispatch({ type: TIME_AVAILABLE_PROF_GP, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_SEANCE_OF_PROF, payload:`Error: ${error.response}` })
    }
}




// Seance Temporaire -------------------------------------------------------------------------
// add seance 
export const AddSeanceTemporaire = (formData) => async (dispatch) => {
    try {
        const res = await UseInsertData(`/seanceTemporaire`,formData)
        // console.log('res :', res)
        dispatch({ type: MSG_ADD_SEANCE_TEMPORAIRE, payload: res.data   })
    } catch (error) {
        dispatch({ type: GET_ERROR_SEANCE_OF_PROF, payload:`Error: ${error.response}` })
    }
}