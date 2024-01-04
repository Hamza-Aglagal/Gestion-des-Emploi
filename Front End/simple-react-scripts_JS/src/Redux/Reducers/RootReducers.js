import { combineReducers } from "redux"
import GroupeReducer from "./GroupeReducer"
import ProfReducer from "./ProfReducer"
import FillierReducer from "./FillierReducer"
import NiveauReducer from "./NiveauReducer"
import DateReducer from "./DateReducer"
import SeanceReducer from "./SeanceReducer"
import SalleReducer from "./SalleReducer"
import EncadreReducer from "./EncadrerReducer"
import AuthReducer from "./AuthReducer"
import ModuleReducer from "./ModulesReducer"




const RootReducers = combineReducers({
    RedGroupe : GroupeReducer,
    RedProf : ProfReducer,
    RedFillier : FillierReducer,
    RedNiveau : NiveauReducer,
    RedDate : DateReducer,
    RedSeance : SeanceReducer,
    RedSalle : SalleReducer,
    RedEncadre : EncadreReducer,
    RedModule : ModuleReducer,
    RedAuth : AuthReducer,
})



export default RootReducers