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
import { AddEncadre } from '../../Redux/Actions/EncadreAction'
import { INITIAL_MESSAGE } from '../../Redux/types'
// import { escapeLeadingUnderscores } from 'typescript'



// import Swal from 'sweetalert2'


const AjouterEncadreProfHook = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetAllProf())
        dispatch(GetAllFillier())
        dispatch(GetAllNiveau())
    }, [])




    // ---------- get data prof
    const DataProf = useSelector(state => state.RedProf.AllProf)
    // console.log('DataProf :', DataProf)

    // ---------- get data Fillier
    const DataFillier = useSelector(state => state.RedFillier.AllFillier)
    // console.log('DataFillier :', DataFillier)

    // ---------- get data Niveau
    const DataNiveau = useSelector(state => state.RedNiveau.AllNiveau)
    // console.log('DataNiveau :', DataNiveau)







    // ----------- Arry jour 
    // const DataJour = [{ title: 'Lundi' }, { title: 'Mardi' }, { title: 'Mercredi' }, { title: 'Jeudi' }, { title: 'Vendredi' }, { title: 'Samedi' }];


    // to read data 
    const [left, setLeft] = useState([]);

    // Read all data auto slelect 
    const [idProf, setidProf] = useState(null)
    const [idFillier, setidFillier] = useState(null)
    const [idNiveau, setidNiveau] = useState(null)
    const [Type, setType] = useState("PFA")

    const GetDataProf = (event, value) => {
        if (value) { setidProf(value.id) }
    }
    const GetDataFillier = (event, value) => {
        if (value) { setidFillier(value.id) }
    }
    const GetDataNiveau = (event, value) => {
        if (value) { setidNiveau(value.id) }
    }
    // const GetDataGroupe = (event, value) => {
    //     if (value) { setidGroupe(value.id) }
    // }



    // get groupes with niveau and fillier ---------------------------------------
    useEffect(() => {
        if (idNiveau && idFillier) {
            dispatch(GetGroupesWithNiveau(idNiveau, idFillier))
        }
    }, [idNiveau, idFillier, DataFillier])
    const DataGroupes = useSelector(state => state.RedGroupe.AllGroupeWithNiveau)


    // // Loading 
    const [Loading, setLoading] = useState(false)
    const [Ispress, setIspress] = useState(false)




    // handel submit 
    const HandelSubmit = async (e) => {
        e.preventDefault()

        setIspress(true)

        if (left.length === 0) {
            notifyWarning('pas sélectionné groupes')
        } else {

            // console.log('left :', left)
            // console.log('test : ', Type)


            left.map((item) =>

                dispatch(AddEncadre({
                    'type': Type,
                    'professeur_id': idProf,
                    'groupe_id': item.id,
                }))

            )

            setLeft([])

        }







    }

    const MsgAddEncadre = useSelector(state => state.RedEncadre.Msg_Add_Encadre)
    // console.log('test', MsgAddEncadre)

    // check the message valid 
    useEffect(() => {
        if (MsgAddEncadre === "L’encadrement Ajouté avec succès.." && Ispress) {
            notifySuccess(MsgAddEncadre)
            setIspress(false)
        }else if(MsgAddEncadre === "Encadrement existe déja !" && Ispress){
            notifyWarning(MsgAddEncadre)
        }
    }, [MsgAddEncadre, Ispress])







    return [
        DataProf, DataFillier, DataNiveau, DataGroupes,
        GetDataProf, GetDataFillier, GetDataNiveau, setLeft, left, setType,
        HandelSubmit, Loading

    ]


}

export default AjouterEncadreProfHook