import {  UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_PROF, GET_ERROR_PROF } from "../types"




// Get All Prof 
export const GetAllProf = () => async (dispatch) => {
    try {
        const res = await UseGetdata('/professeur')
        // console.log('res :', res)
        dispatch({ type: ALL_PROF, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_PROF, payload:`Error: ${error.response}` })
    }
}