import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GetAllGroupe, GetGroupesActive, GetGroupesWithNiveau } from '../../Redux/Actions/GroupeAction'
import { GetAllProf } from '../../Redux/Actions/ProfAction'
import { GetAllFillier } from '../../Redux/Actions/FilliereAction'
import { GetAllNiveau } from '../../Redux/Actions/NiveauAction'
import { ChekDatesDiponibleOfGroupe, GetAllDates, GetAllDatesDisponibleInDay, GetAllDatesSecondaire, GetAllDatesWithDays, GetOneDatesSecondaire } from '../../Redux/Actions/DatesAction'
import { AddSeance, AddSeanceTemporaire, DeleteSeance, GetAllEmploiOfGroupes, GetAllSeanceOfProf } from '../../Redux/Actions/SeanceAction'
import { notifySuccess, notifyWarning } from '../../hooks/notification/useNotif'
import { GetSallesWithDateAndJour } from '../../Redux/Actions/SalleAction'
import { getIdFromToken } from '../../routes/Pravite-routes'
import { DatesAndSalleDisponibleofProfAndGP, GroupesEncadreWithProf } from '../../Redux/Actions/EncadreAction'



// import Swal from 'sweetalert2'


const ShowGroupesEncadreProf = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetAllDatesWithDays())
        // dispatch(GetAllDatesSecondaire())


    }, [])


    // get id prof in token -----------------
    const [IdProf, setIdProf] = useState(null)
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const id = getIdFromToken(storedToken)
        setIdProf(id)

    }, [])
    // console.log('idprof :', IdProf)




    // ---------- get data Dates
    const DataDates = useSelector(state => state.RedDate.AllDateWithDays)
    // console.log('DataDates :', DataDates)




    // Get Emploi of prof ------------------------------------
    // this used to rerender data of Emploi Prof 
    const [renderEmploiProf, setrenderEmploiProf] = useState(false)
    useEffect(() => {
        if (IdProf) {
            dispatch(GetAllSeanceOfProf(IdProf))
            setrenderEmploiProf(false)
        }
    }, [IdProf, renderEmploiProf])
    const EmploiProf = useSelector(state => state.RedSeance.AllSeanceOfProf)
    // // console.log('Emploi : ', EmploiProf)




    // get groupes Encadre With prof ---------------------------------------
    const [rerenderData, setrerenderData] = useState(false)
    useEffect(() => {
        if (IdProf) {
            dispatch(GroupesEncadreWithProf(IdProf))
            setrerenderData(false)
        }
    }, [IdProf, rerenderData])
    const Data = useSelector(state => state.RedEncadre.ALLGrupeEncadre)
    const DataGroupesEncadre = Data.encadres
    const DataGroupesEncadreId = Data.groupe_ids

    // console.log('encadré', DataGroupesEncadre)
    // console.log('encadré id gr', DataGroupesEncadreId)

    useEffect(() => {
        if (DataGroupesEncadreId) {
            dispatch(GetAllEmploiOfGroupes({
                "groupesId": DataGroupesEncadreId
            }))
        }
    }, [DataGroupesEncadreId])
    const AllEmploiOfListGroupe = useSelector(state => state.RedSeance.AllEmploiOfListGroupes)
    // console.log('Emploi-list : ', Object.values(AllEmploiOfListGroupe));


    // Read Radio Groupe 
    const [salleid, setValue] = useState(null);
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // read data time and day 
    const [Time, setTime] = useState(null)
    const [Day, setDay] = useState(null)

    // console.log('time :', Time)
    // console.log('Day :', Day)
    // console.log('salleid :', salleid)


    const [dateValue, onChange] = useState(new Date());
    // console.log('date: ', dateValue.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }))


    // logique modal 
    const [openModal, setopenModal] = useState(false)
    const handleClose = () => {
        setopenModal(false);
    };


    const HandelSearch = () => {

        // console.log("idGP", idgroupe)
        // console.log("idProf", IdProf)

        dispatch(DatesAndSalleDisponibleofProfAndGP({
            'idProf': IdProf,
            'GroupesId': DataGroupesEncadreId
        }))



    }



    // get data salles and dates available of groupe and prof  --------------------
    const DatesSallesAvailable = useSelector(state => state.RedEncadre.DatesSallesAvailableGrpProf)
    // console.log('DatesSallesAvailable :', DatesSallesAvailable)


    const [IsPress, setIsPress] = useState(false)


    const handeleRserve = () => {
        setIsPress(true)
        dispatch(AddSeanceTemporaire({
            "salle_id": salleid,
            "date_id": Time,
            "professeur_id": IdProf,
            "groupe_ids": DataGroupesEncadreId,
            "jour": Day
        }))
    }


    const MSGREservation = useSelector(state => state.RedSeance.Msg_AddSeance_Temporaire)
    console.log('MSGREservation :', MSGREservation)

    useEffect(() => {
        if (MSGREservation.success === 'Seance reserve avec succes' && IsPress) {
            notifySuccess(MSGREservation.success)
            setIsPress(false)
            setopenModal(false)
        } else if(MSGREservation.error ===  'Seance deja existe' && IsPress ){
            notifyWarning(MSGREservation.error)
            setIsPress(false)
            setopenModal(false)
        }
    }, [MSGREservation])


    return [
        DataGroupesEncadre, DataDates, DatesSallesAvailable, onChange, dateValue, handeleRserve,handleClose,openModal,setopenModal,
        HandelSearch, EmploiProf, AllEmploiOfListGroupe, salleid, handleChange, setValue, setDay, setTime

    ]


}

export default ShowGroupesEncadreProf