import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GetAllGroupe, GetGroupesActive, GetGroupesWithNiveau } from '../../Redux/Actions/GroupeAction'
import { GetAllProf } from '../../Redux/Actions/ProfAction'
import { GetAllFillier } from '../../Redux/Actions/FilliereAction'
import { GetAllNiveau } from '../../Redux/Actions/NiveauAction'
import { GetAllDates, GetAllDatesDisponibleInDay } from '../../Redux/Actions/DatesAction'
import { AddSeance, DeleteEmploi, GetAllSeanceOfProf } from '../../Redux/Actions/SeanceAction'
import { notifySuccess, notifyWarning } from '../../hooks/notification/useNotif'
import { GetSallesWithDateAndJour } from '../../Redux/Actions/SalleAction'



// import Swal from 'sweetalert2'


const DeleteEmploiProfHook = () => {

    const dispatch = useDispatch()

    //   logique Dialog 
    const [open, setOpen] = useState(false);



    useEffect(() => {
        dispatch(GetAllProf())

    }, [])




    // ---------- get data prof
    const DataProf = useSelector(state => state.RedProf.AllProf)
    // console.log('DataProf :', DataProf)




    // Read all data auto slelect 
    const [idProf, setidProf] = useState(null)
    // console.log('test : ', idProf  )

    const GetDataProf = (event, value) => {
        if (value) { setidProf(value.id) }
    }



    const [Loading, setLoading] = useState(false)

    // handel submit 
    const HandelSubmit = async (e) => {
        e.preventDefault()


        if (!idProf) {
            notifyWarning('pas sélectionné prof')
            return
        }



        setLoading(true)
        await dispatch(DeleteEmploi(idProf))
        setLoading(false)

    }

    const MSGDeleteEmploiProf = useSelector(state => state.RedSeance.Msg_Delete_Emploi)
    // console.log('test t :', MSGDeleteEmploiProf)


    // check the message valid 
    useEffect(() => {
        if (MSGDeleteEmploiProf.message === 'Toutes les séances supprimées avec succès') {
            notifySuccess(MSGDeleteEmploiProf.message)
            setOpen(false)
        }
    }, [MSGDeleteEmploiProf])


    return [DataProf,
    GetDataProf,
    HandelSubmit, Loading,open,setOpen

  ]



}

export default DeleteEmploiProfHook;