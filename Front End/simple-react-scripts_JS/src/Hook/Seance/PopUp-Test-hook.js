import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GetAllGroupe, GetGroupesActive, GetGroupesWithNiveau } from '../../Redux/Actions/GroupeAction'
import { GetAllProf } from '../../Redux/Actions/ProfAction'
import { GetAllFillier } from '../../Redux/Actions/FilliereAction'
import { GetAllNiveau } from '../../Redux/Actions/NiveauAction'
import { GetAllDates, GetAllDatesDisponibleInDay, GetAllDatesWithDays } from '../../Redux/Actions/DatesAction'
import { AddSeance, GetAllSeanceOfProf, GetTimesAvailabLeOfProAndGRoupe } from '../../Redux/Actions/SeanceAction'
import { notifySuccess, notifyWarning } from '../../hooks/notification/useNotif'
import { GetSallesWithDateAndJour } from '../../Redux/Actions/SalleAction'



// import Swal from 'sweetalert2'


const PopUpAddSeanceHook = () => {

    const dispatch = useDispatch()




    // Dispatch All date with days ---------------------------------------------------
    useEffect(() => {
        dispatch(GetAllDatesWithDays())
    }, [])

    // Get All dates With Days ---------------------------------------------------
     const DataDateWithDays = useSelector(state => state.RedDate.AllDateWithDays)
    console.log('DataDateWithDays : ',DataDateWithDays )




    // Read all data auto slelect ---------------------------------------------------
    const [IdDate, setIdDate] = useState(null)
    const [Jour, setJour] = useState(null)
    // console.log('test : ', IdDate , Jour )




    // Get all Salles disponible in day and dateHeure ---------------------------------------------------
    //  useEffect(() => {
    //     if (IdDate && Jour) {
    //         dispatch(GetSallesWithDateAndJour(Jour, IdDate))
    //     }
    // }, [IdDate, Jour])
    // const DataSalleDispo = useSelector(state => state.RedSalle.Salle_Dispo)
    // console.log('salles : ',DataSalleDispo )









    // Loading 
    const [Loading, setLoading] = useState(false)
    const [IspressValid, setIspressValid] = useState(false)




    // handel submit 
    // const HandelSubmit = async (e) => {
    //     e.preventDefault()

    //     if (!idFillier) {
    //         notifyWarning('pas sélectionné fillier')
    //         return
    //     }
    //     if (!idNiveau) {
    //         notifyWarning('pas sélectionné niveau')
    //         return
    //     }
    //     if (!idProf) {
    //         notifyWarning('pas sélectionné prof')
    //         return
    //     }    
    //     if (!idGroupe) {
    //         notifyWarning('pas sélectionné groupe')
    //         return
    //     }



    //     setLoading(true)
    //     await dispatch(GetTimesAvailabLeOfProAndGRoupe(idProf, idGroupe))
    //     setLoading(false)
    //     setIspressValid(true)

    // }



    return [
        setJour, setIdDate, Jour, IdDate,
        DataDateWithDays
    ]


}

export default PopUpAddSeanceHook