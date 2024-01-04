import {  UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_GROUPE, ALL_GROUPE_ACTIVE, ALL_GROUPE_WITH_NIVEAU, GET_ERROR_GROUPE } from "../types"




// Get groupes active
export const GetGroupesActive = () => async (dispatch) => {
    try {
        const res = await UseGetdata('/groupes/groupe-active')
        // console.log('res :', res)
        dispatch({ type: ALL_GROUPE_ACTIVE, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_GROUPE, payload:`Error: ${error.response}` })
    }
}


// Get All groupes 
export const GetAllGroupe = () => async (dispatch) => {
    try {
        const res = await UseGetdata('/groupe')
        // console.log('res :', res)
        dispatch({ type: ALL_GROUPE, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_GROUPE, payload:`Error: ${error.response}` })
    }
}

// Get  groupes with niveau 
export const GetGroupesWithNiveau = (Niveau, Fillier) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/groupes/niveau/${Niveau}/${Fillier}/groupes`)
        // console.log('res :', res)
        dispatch({ type: ALL_GROUPE_WITH_NIVEAU, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_GROUPE, payload:`Error: ${error.response}` })
    }
}