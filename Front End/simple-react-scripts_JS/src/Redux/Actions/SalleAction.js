import {  UseGetdata } from "../../hooks/crud/UseGetdata"
import { GET_ERROR_SALLE, SALLES_DISPO_WITH_JOUR_DATEHEUR } from "../types"





// Get All Prof 
export const GetSallesWithDateAndJour = (jour , idDateHeure) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/seances/salle-disponible/${jour}/${idDateHeure}`)
        // console.log('res :', res)
        dispatch({ type: SALLES_DISPO_WITH_JOUR_DATEHEUR, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_SALLE, payload:`Error: ${error.response}` })
    }
}