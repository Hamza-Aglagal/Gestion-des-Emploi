import { UseGetdata } from "../../hooks/crud/UseGetdata"
import { ALL_MODULES, ALL_MODULES_OF_FILLIER, ALL_MODULES_OF_PROF, GET_ERROR_MODULES } from "../types"




// Get All Modules of filleir
export const GetAllModulesWithFillier = (idFillier,idNiveau) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/modules/niveau/${idNiveau}/fillier/${idFillier}`)
        // console.log('res :', res)
        dispatch({ type: ALL_MODULES_OF_FILLIER, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_MODULES, payload:`Error: ${error.response}` })
    }
}



// Get All Modules of Prof
export const GetAllModulesOfProf = (idProf) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/modules/prof/${idProf}`)
        // console.log('res :', res)
        dispatch({ type: ALL_MODULES_OF_PROF, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_MODULES, payload:`Error: ${error.response}` })
    }
}

