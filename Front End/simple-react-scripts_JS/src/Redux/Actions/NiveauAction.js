import {  UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_NIVEAU, GET_ERROR_NIVEAU } from "../types"




// Get All Fillier 
export const GetAllNiveau = () => async (dispatch) => {
    try {
        const res = await UseGetdata('/niveau')
        // console.log('res :', res)
        dispatch({ type: ALL_NIVEAU, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_NIVEAU, payload:`Error: ${error.response}` })
    }
}