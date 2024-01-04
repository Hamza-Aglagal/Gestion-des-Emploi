import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GetAllGroupe, GetGroupesActive, GetGroupesWithNiveau } from '../../Redux/Actions/GroupeAction'
import { GetAllProf } from '../../Redux/Actions/ProfAction'
import { GetAllFillier } from '../../Redux/Actions/FilliereAction'
import { GetAllNiveau } from '../../Redux/Actions/NiveauAction'
import { ChekDatesDiponibleOfGroupe, GetAllDates, GetAllDatesDisponibleInDay, GetAllDatesSecondaire, GetAllDatesWithDays, GetOneDatesSecondaire } from '../../Redux/Actions/DatesAction'
import { AddSeance, DeleteSeance, GetAllSeanceOfProf } from '../../Redux/Actions/SeanceAction'
import { notifySuccess, notifyWarning } from '../../hooks/notification/useNotif'
import { GetSallesWithDateAndJour } from '../../Redux/Actions/SalleAction'
import { getIdFromToken } from '../../routes/Pravite-routes'
import { GetAllModulesOfProf } from '../../Redux/Actions/ModuleAction'



// import Swal from 'sweetalert2'


const ShowEmploiProf = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetAllDatesWithDays())
        // dispatch(GetAllDatesSecondaire())

      
    }, [])



  



   // this used to rerender data of Emploi Prof 
   const [renderEmploiProf, setrenderEmploiProf] = useState(false)


     // get id prof in token -----------------
     const [IdProf, setIdProf] = useState(null)
     const [UserData, setUserData] = useState(null)
     useEffect(() => {
         const storedToken = localStorage.getItem('token');
         const user = JSON.parse(localStorage.getItem('user'));
         const id = getIdFromToken(storedToken)
         setIdProf(id)
         setUserData(user)
         
       }, [])        

       

  
    // Get Emploi of prof ---------------------
    useEffect(() => {
        if (IdProf) {
            dispatch(GetAllSeanceOfProf(IdProf))
            dispatch(GetAllModulesOfProf(IdProf))
            setrenderEmploiProf(false)
        }
    }, [IdProf,renderEmploiProf])
    const EmploiProf = useSelector(state => state.RedSeance.AllSeanceOfProf)
    // // console.log('Emploi : ', EmploiProf)

    const MoudlesProf = useSelector(state => state.RedModule.AllModulesOfProf)
    // console.log('MoudlesProf : ', MoudlesProf)


  



 
    // ---------- get data Dates
    const DataDates = useSelector(state => state.RedDate.AllDateWithDays)
    // console.log('DataDates :', DataDates)



  

  
  




    return  [
        DataDates, UserData,
         EmploiProf,MoudlesProf,

    ]


}

export default ShowEmploiProf