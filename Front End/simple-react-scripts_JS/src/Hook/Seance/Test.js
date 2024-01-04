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


const AjouterEmploiHook = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetAllProf())
        dispatch(GetAllDatesWithDays())
        dispatch(GetAllFillier())
        dispatch(GetAllNiveau())
        dispatch(GetAllGroupe())
        // dispatch(GetAllDates())
    }, [])




    // ---------- get data prof
    const DataProf = useSelector(state => state.RedProf.AllProf)
    // console.log('DataProf :', DataProf)

    //  // ---------- get data dates
    const DataDates = useSelector(state => state.RedDate.AllDateWithDays)
    //  console.log('Data :', DataDates)

    // ---------- get data Fillier
    const DataFillier = useSelector(state => state.RedFillier.AllFillier)
    // console.log('DataFillier :', DataFillier)

    // ---------- get data Niveau
    const DataNiveau = useSelector(state => state.RedNiveau.AllNiveau)
    // console.log('DataNiveau :', DataNiveau)




    // Read all data auto slelect ----------------------------------
    const [idProf, setidProf] = useState(null)
    const [idFillier, setFillier] = useState(null)
    const [idNiveau, setNiveau] = useState(null)
    const [idGroupe, setGroupe] = useState(null)
    const [idSalle, setSalle] = useState()

    const [Jour, setJour] = useState()
    const [IdDate, setIdDate] = useState()


    const ReadDataProf = (event, value) => {
        if (value) { setidProf(value.id) }
    }
    const ReadDataFillier = (event, value) => {
        if (value) { setFillier(value.id) }
    }
    const RaedDataNiveau = (event, value) => {
        if (value) { setNiveau(value.id) }
    }
    const ReadDatagroupe = (event, value) => {
        if (value) { setGroupe(value.id) }
    }
    const ReadDatasalle = (event, value) => {
        if (value) { setSalle(value.id) }
    }

    const handelClik = (id, day) => {
        setJour(day);
        setIdDate(id)
    }



    console.log({'f': idFillier, 'N' : idNiveau, 'Date': IdDate,'Jour': Jour, 'salle':idSalle })



    // ---------- get groupes with niveau and fillier ---------------------------------------
    useEffect(() => {
        if (idNiveau && idFillier) {
            dispatch(GetGroupesWithNiveau(idNiveau, idFillier))
        }
    }, [idNiveau, idFillier])
    const DataGroupesFIllAndNiveau = useSelector(state => state.RedGroupe.AllGroupeWithNiveau)
    // console.log('DataGroupesFiltter :', DataGroupesFIllAndNiveau)

    
    // Get all Salles disponible in day and dateHeure---------------------------------------
    useEffect(() => {
        if (IdDate && Jour) {
            dispatch(GetSallesWithDateAndJour(Jour, IdDate))
        }
    }, [IdDate, Jour])
    const DataSalleDispo = useSelector(state => state.RedSalle.Salle_Dispo)
    // console.log('DataSalleDispo :', DataSalleDispo)


    // Loading ----------------------------------------------------------------
    const [Loading, setLoading] = useState(false)
    const [IspressValid, setIspressValid] = useState(false)




    // handel submit 
    const HandelSubmit = async (e) => {
        e.preventDefault()


        // if (!idProf) {
        //     notifyWarning('pas sélectionné prof')

        // }  else{
        //     setIspressValid(true)
        // }



        // setLoading(true)
        // await dispatch(GetTimesAvailabLeOfProAndGRoupe(idProf, idGroupe))
        // setLoading(false)


    }



    return [
        HandelSubmit, IspressValid, DataDates, DataNiveau, DataFillier, DataProf, DataGroupesFIllAndNiveau,DataSalleDispo,
        ReadDataProf, ReadDataFillier, RaedDataNiveau, ReadDatagroupe, ReadDatasalle, handelClik
    ]


}

export default AjouterEmploiHook