import {  UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_FILLIER, GET_ERROR_FILLIER } from "../types"




// Get All Fillier 
export const GetAllFillier = () => async (dispatch) => {
    try {
        const res = await UseGetdata('/filliere')
        // console.log('res :', res)
        dispatch({ type: ALL_FILLIER, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_FILLIER, payload:`Error: ${error.response}` })
    }
}