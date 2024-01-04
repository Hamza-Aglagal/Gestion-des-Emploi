import { UseInsertData, useInsertDataWithImg } from "../../hooks/crud/useInsertData"
import { LOGIN_ERROR, LOGIN_USER } from "../types"








// Login User 
export const LoginUser = (formData) => async (dispatch) => {
    try {
        const response = await UseInsertData('login',formData)
        // console.log('t----------t',response.data)
        dispatch({ type: LOGIN_USER, payload: response.data, Loading: true })
    } catch (error) {
        dispatch({ type: LOGIN_ERROR, payload: error.response })
    }
}





