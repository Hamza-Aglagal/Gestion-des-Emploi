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
import { GetAllModulesWithFillier } from '../../Redux/Actions/ModuleAction'



// import Swal from 'sweetalert2'


const AddEmploiProfHook = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetAllDatesWithDays())
        // dispatch(GetAllDatesSecondaire())

        dispatch(GetAllProf())
        dispatch(GetAllFillier())
        dispatch(GetAllNiveau())
        dispatch(GetAllGroupe())
    }, [])



    // ---------- get data Dates
    const DataDates = useSelector(state => state.RedDate.AllDateWithDays)
    // console.log('DataDates :', DataDates)
    // ---------- get data prof
    const DataProf = useSelector(state => state.RedProf.AllProf)
    // console.log('DataProf :', DataProf)

    // ---------- get data Fillier
    const DataFillier = useSelector(state => state.RedFillier.AllFillier)
    // console.log('DataFillier :', DataFillier)

    // ---------- get data Niveau
    const DataNiveau = useSelector(state => state.RedNiveau.AllNiveau)
    // console.log('DataNiveau :', DataNiveau)

   



   // this used to rerender data of Emploi Prof 
   const [renderEmploiProf, setrenderEmploiProf] = useState(false)

    // Read Data  Prof
    const [idProf, setidProf] = useState(null)
    const [idFillier, setFillier] = useState(null)
    const [idNiveau, setNiveau] = useState(null)
    const [idGroupe, setGroupe] = useState(null)
    const [idSalle, setSalle] = useState()
    const [IdDate, setIdDate] = useState()
    const [Jour, setJour] = useState()
    const [Index, setIndex] = useState(null)
    const [IdDateSecondaire, setIdDateSecondaire] = useState()
    const [IdModule, setIdModule] = useState(null)

    const [NameProf, setNameProf] = useState()
    const [NomFillier, setNomFillier] = useState()
    const [NomNiveau, setNomNiveau] = useState()
    const [NomGroupe, setNomGroupe] = useState()
    const [NomSalle, setNomSalle] = useState()
    const [NomDateSecondaire, setDateNomSecondaire] = useState()

    // console.log({ 'pr': idProf, 'Fil': idFillier, 'Niv': idNiveau, 'gr': idGroupe, 'salle': idSalle, 'data': IdDate, 'day': Jour, 'data_Sec': IdDateSecondaire })
    // console.log({ 'pr': NameProf, 'Fil': NomFillier, 'Niv': NomNiveau, 'gr': NomGroupe, 'salle': NomSalle, 'data_Sec': NomDateSecondaire })



    // Get Emploi of prof ---------------------
    useEffect(() => {
        if (idProf) {
            dispatch(GetAllSeanceOfProf(idProf))
            setrenderEmploiProf(false)
        }
    }, [idProf,renderEmploiProf])
    const EmploiProf = useSelector(state => state.RedSeance.AllSeanceOfProf)
    // console.log('Emploi : ', EmploiProf)




    const ReadDataProf = (event, value) => {
        if (value) {
            setidProf(value.id)
            setNameProf(`${value.prenom} ${value.nom}`)
        }
    }
    const ReadDataFillier = (event, value) => {
        if (value) {
            setFillier(value.id)
            setNomFillier(value.nom)
        }
    }
    const RaedDataNiveau = (event, value) => {
        if (value) {
            setNiveau(value.id)
            setNomNiveau(value.nom)
        }
    }
    const ReadDatagroupe = (event, value) => {
        if (value) {
            setGroupe(value.id)
            setNomGroupe(value.nom)
        }
    }
    const ReadDatasalle = (event, value) => {
        if (value) {
            setSalle(value.id)
            setNomSalle(`${value.nom} ${value.adresse}`)
        }
    }
    const ReadDataDatesSecondaire = (event, value) => {
        if (value) {
            setIdDateSecondaire(value.id)
            setDateNomSecondaire(`${value.heur_debut} ${value.heur_fin}`)
        }
    }
    const ReadDataDatesModules = (event, value) => {
        if (value) {
            setIdModule(value.id)
        }
    }


    // get groupes with niveau and fillier ---------------------------------------
    // get Modules with niveau and fillier ---------------------------------------
    useEffect(() => {
        if (idNiveau && idFillier) {
            dispatch(GetGroupesWithNiveau(idNiveau, idFillier))
            dispatch(GetAllModulesWithFillier(idFillier,idNiveau))
        }
    }, [idNiveau, idFillier,DataNiveau])
    const DataGroupes = useSelector(state => state.RedGroupe.AllGroupeWithNiveau)
     const DataModules = useSelector(state => state.RedModule.AllModulesOfFillier)


    // get One Date Secondaire ---------------------------------------
    useEffect(() => {
        if (IdDate) {
            dispatch(GetOneDatesSecondaire(IdDate))
        }
    }, [IdDate])
    const OneDateSecondaire = useSelector(state => state.RedDate.OneDateSecondaire)
    // console.log('DataDates :', DataDates)


    // Get all Salles disponible in day and dateHeure ---------------------------------------
    useEffect(() => {
        if (IdDate && Jour) {
            if (IdDateSecondaire) {
                dispatch(GetSallesWithDateAndJour(Jour, IdDateSecondaire))
            } else {
                dispatch(GetSallesWithDateAndJour(Jour, IdDate))

            }
        }
    }, [IdDate, Jour])
    const DataSalleDispo = useSelector(state => state.RedSalle.Salle_Dispo)






    // check date is valid or not  ---------------------------------------
    useEffect(() => {
        if (IdDate && Jour && idProf && idGroupe) {
            if (IdDateSecondaire) {
                dispatch(ChekDatesDiponibleOfGroupe(Jour, IdDateSecondaire, idProf, idGroupe))
            } else {
                dispatch(ChekDatesDiponibleOfGroupe(Jour, IdDate, idProf, idGroupe))

            }
        }
    }, [IdDate, Jour, idGroupe, idProf, IdDateSecondaire])
    const MsgCheckDate = useSelector(state => state.RedDate.CheckDateOfProfGr)

    // notification
    useEffect(() => {
        if (IdDate && Jour && idProf && idGroupe) {
            // console.log('msg :', MsgCheckDate)
            if (MsgCheckDate.error === 'Professeur n’est pas disponible dans cette date .') {
                notifyWarning(MsgCheckDate.error);
                // setIdDateSecondaire(null)
            } else if (MsgCheckDate.error === 'Groupe n’est pas disponible dans cette date.') {
                notifyWarning(MsgCheckDate.error);
                // setIdDateSecondaire(null)
            } else if (MsgCheckDate.message === 'Date Valide') {
                notifySuccess(MsgCheckDate.message);
            }
        }
    }, [MsgCheckDate]);



    const [DataSeancesRead, setDataSeancesRead] = useState([]);
    // console.log(DataSeancesRead)

    const [IsValidateAdding, setIsValidateAdding] = useState(false)
    const [InitialData, setInitialData] = useState(false)

    // initial data in close popUp 
    useEffect(() => {
        if (InitialData) {
            // initialisation 
            setIdDate(null)
            setJour(null)
            setFillier(null)
            setNiveau(null)
            setGroupe(null)
            setSalle(null)
            setIdDateSecondaire(null)

            setNomFillier(null)
            setNomNiveau(null)
            setNomGroupe(null)
            setNomSalle(null)
            setDateNomSecondaire(null)

            setInitialData(false)

        }
    }, [InitialData])


    // initialisation 
    const Inisialisation = () => {
        setIdDate(null)
        setJour(null)
        setFillier(null)
        setNiveau(null)
        setGroupe(null)
        setSalle(null)
        setIdDateSecondaire(null)
        setIdModule(null)

        setNomFillier(null)
        setNomNiveau(null)
        setNomGroupe(null)
        setNomSalle(null)
        setDateNomSecondaire(null)
    }


    const [Ispress, setIspress] = useState(false)


    // handel submit 
    const HandelSubmit = async (e) => {
        // e.preventDefault()
        setIspress(true)
        // Validation 
        if (!idProf) { notifyWarning('pas sélectionné prof') } else
            if (!idFillier) { notifyWarning('pas sélectionné Fillier') } else
                if (!idNiveau) { notifyWarning('pas sélectionné Niveau') } else
                    if (!idGroupe) { notifyWarning('pas sélectionné Groupe') } else
                        if (!idSalle) { notifyWarning('pas sélectionné Salle') } else
                        if (!IdModule) { notifyWarning('pas sélectionné Module') } else
                            if (IdDateSecondaire && MsgCheckDate.message === 'Date Valide') {

                                // setseance({
                                //     'index': Index,
                                //     'IdDate': IdDate,
                                //     'Jour': Jour,
                                //     'NomFillier': NomFillier,
                                //     'NomNiveau': NomNiveau,
                                //     'NomGroupe': NomGroupe,
                                //     'NomSalle': NomSalle,
                                //     'NomDateSecondaire': NomDateSecondaire,
                                // })

                                const $DataSeance = await {
                                    "salle_id": idSalle,
                                    "date_id": IdDateSecondaire,
                                    "groupe_id": idGroupe,
                                    "professeur_id": idProf,
                                    "module_id": IdModule,
                                    "jour": Jour,
                                }

                                await dispatch(AddSeance($DataSeance))
                                setrenderEmploiProf(true)

                            } else if (!IdDateSecondaire && IdDate && MsgCheckDate.message === 'Date Valide') {
                                // setseance({
                                //     'index': Index,
                                //     'IdDate': IdDate,
                                //     'Jour': Jour,
                                //     'NomFillier': NomFillier,
                                //     'NomNiveau': NomNiveau,
                                //     'NomGroupe': NomGroupe,
                                //     'NomSalle': NomSalle,
                                //     'NomDateSecondaire': NomDateSecondaire,
                                // })

                                const DataSeance = await {
                                    "salle_id": idSalle,
                                    "date_id": IdDate,
                                    "groupe_id": idGroupe,
                                    "professeur_id": idProf,
                                    "module_id": IdModule,
                                    "jour": Jour,
                                }

                                await dispatch(AddSeance(DataSeance))
                                setrenderEmploiProf(true)
                            }



    }

    // get message for add Seance
    const MsgAddSeance = useSelector(state => state.RedSeance.Msg_Add_Seance)
    // console.log('__________--', MsgAddSeance)
    useEffect(() => {
        if (MsgAddSeance && Ispress) {
            if (MsgAddSeance.success === 'Séance créée avec succès') {
                notifySuccess(MsgAddSeance.success)
                // Add sence to lacal storage 
                // addOrUpdateSeance(seance);
                // to close PopUp 
                setIsValidateAdding(true)
                // initialisation 
                Inisialisation()
            } else if (MsgAddSeance.error === 'Senace déja existe') {
                notifySuccess(MsgAddSeance.error)
            }
        }
    }, [MsgAddSeance])

    // console.log('ttttttt', DataSeancesRead)



    // get seance id of deleted 
    const [IdSeanceDelete, setIdSeanceDelete] = useState(null)
    // handel Delete 
    const HandelDelte = async () => {
        setIspress(true)

        // console.log('test :', IdSeanceDelete)
        if(IdSeanceDelete){
            await dispatch(DeleteSeance(IdSeanceDelete))
        }
    }
 
    const MsgDeleteSeance = useSelector(state => state.RedSeance.Msg_Delete_Seance)
    useEffect(() => {
        if (MsgDeleteSeance && Ispress) {
            if (MsgDeleteSeance.success === 'Séance supprimée avec succès') {
                notifySuccess(MsgDeleteSeance.success)
                // to close PopUp 
                setIsValidateAdding(true)
                // initialisation 
                Inisialisation()
                setrenderEmploiProf(true)

            } else if (MsgDeleteSeance.error === 'Seance not found') {
                notifySuccess(MsgDeleteSeance.error)
            }
        }
    }, [MsgDeleteSeance])

    // useEffect(() => {
    //     if(renderEmploiProf){
    //         setidProf(idProf)
    //         setrenderEmploiProf(false)
    //     }
    // }, [renderEmploiProf])
    




    return [

        DataDates, DataProf, DataNiveau, DataFillier, DataGroupes, DataSalleDispo, OneDateSecondaire,DataModules,
        ReadDataDatesModules, ReadDataProf, ReadDataFillier, RaedDataNiveau, ReadDatagroupe, ReadDatasalle, ReadDataDatesSecondaire, setJour, setIdDate, setIndex, IsValidateAdding, setIsValidateAdding, setInitialData,setIdSeanceDelete,
        DataSeancesRead, EmploiProf,
        HandelSubmit, HandelDelte
    ]


}

export default AddEmploiProfHook