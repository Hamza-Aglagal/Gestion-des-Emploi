import { UseDeleteData } from "../../hooks/crud/useDeleteData"
import { UseGetdata } from "../../hooks/crud/UseGetdata"
import { UseInsertData } from "../../hooks/crud/useInsertData"
import { ALL_GROUPE_ENCADRE_PROF, DELETE_GROUPE_ENCADRE_PROF, GET_ERROR_ENCADRE, MSG_ADD_ENCADRE, SALLE_TIME_AVAILABLE_PROF_GRP } from "../types"






// Get All Dates 
export const AddEncadre = (formData) => async (dispatch) => {
    try {
        const res = await UseInsertData('/Encadrer', formData)
        // console.log('res :', res)
        dispatch({ type: MSG_ADD_ENCADRE, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_ENCADRE, payload:`Error: ${error.response}` })
    }
}



// Get All groupes encadre with prof 
export const GroupesEncadreWithProf = (id) => async (dispatch) => {
    try {
        const res = await UseGetdata(`/prof/encadre/${id}`)
        // console.log('res :', res)
        dispatch({ type: ALL_GROUPE_ENCADRE_PROF, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_ENCADRE, payload:`Error: ${error.response}` })
    }
}



// delete groupes encadre with prof 
export const DeleteGroupesEncadreWithProf = (id) => async (dispatch) => {
    try {
        const res = await UseDeleteData(`/Encadrer/${id}`)
        // console.log('res :', res)
        dispatch({ type: DELETE_GROUPE_ENCADRE_PROF, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_ENCADRE, payload:`Error: ${error.response}` })
    }
}


// Get All Dates And salles available of Prof and groupe
export const DatesAndSalleDisponibleofProfAndGP = (formData) => async (dispatch) => {
    try {
        const res = await UseInsertData(`/dates-salle-disponible/prof-groupe`, formData)
        // console.log('res :', res)
        dispatch({ type: SALLE_TIME_AVAILABLE_PROF_GRP, payload: res.data    })
    } catch (error) {
        dispatch({ type: GET_ERROR_ENCADRE, payload:`Error: ${error.response}` })
    }
}


