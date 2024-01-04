import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GetAllGroupe, GetGroupesActive, GetGroupesWithNiveau } from '../../Redux/Actions/GroupeAction'
import { GetAllProf } from '../../Redux/Actions/ProfAction'
import { GetAllFillier } from '../../Redux/Actions/FilliereAction'
import { GetAllNiveau } from '../../Redux/Actions/NiveauAction'
import { GetAllDates, GetAllDatesDisponibleInDay } from '../../Redux/Actions/DatesAction'
import { AddSeance, GetAllSeanceOfProf } from '../../Redux/Actions/SeanceAction'
import { notifySuccess, notifyWarning } from '../../hooks/notification/useNotif'
import { GetSallesWithDateAndJour } from '../../Redux/Actions/SalleAction'
import { AddEncadre, DeleteGroupesEncadreWithProf, GroupesEncadreWithProf } from '../../Redux/Actions/EncadreAction'
// import { escapeLeadingUnderscores } from 'typescript'



// import Swal from 'sweetalert2'


const DeleteEncadreProfHook = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetAllProf())
    }, [])




    // ---------- get data prof
    const DataProf = useSelector(state => state.RedProf.AllProf)
    // console.log('DataProf :', DataProf)











    // Read all data auto slelect 
    const [idProf, setidProf] = useState(null)
    // console.log('idProf', idProf)


    const GetDataProf = (event, value) => {
        if (value) { setidProf(value.id) }
    }




    // get groupes Encadre With prof ---------------------------------------
    const [rerenderData, setrerenderData] = useState(false)
    useEffect(() => {
        if (idProf) {
            dispatch(GroupesEncadreWithProf(idProf))
            setrerenderData(false)
        }
    }, [idProf,rerenderData])
    const datagpEncadre = useSelector(state => state.RedEncadre.ALLGrupeEncadre)
    const DataGroupesEncadre = datagpEncadre.encadres
    // console.log('encadré', DataGroupesEncadre)




    // // Loading 
    const [Loading, setLoading] = useState(false)
    const [Ispress, setIspress] = useState(false)



    // handel submit 
    const HandelDeleteGroupe = async (id) => {
        setIspress(true)

        // console.log('id', id)
        await dispatch(DeleteGroupesEncadreWithProf(id))

    }

    const MsgDeleteEncadre = useSelector(state => state.RedEncadre.Msg_Delete_Encadre)
    // console.log('test', MsgDeleteEncadre)

    // check the message valid 
    useEffect(() => {
        if (MsgDeleteEncadre.message === "Encadre supprimé avec succès" && Ispress) {
            notifySuccess(MsgDeleteEncadre.message)
            setrerenderData(true)
            setIspress(false)
        } 
    }, [MsgDeleteEncadre])





    return [
        DataProf, DataGroupesEncadre,
        GetDataProf,
        HandelDeleteGroupe, Loading

    ]


}

export default DeleteEncadreProfHook