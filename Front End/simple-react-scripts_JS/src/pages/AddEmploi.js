import React, { useEffect, useState } from 'react'
// import '../assets/css/EmploiRespo.css'

// @mui
import { Box, Autocomplete, Container, FormControl, FormHelperText, Input, InputLabel, Stack, TextField, Typography, Backdrop, Button, CircularProgress, Dialog, Table, TableHead, TableRow, TableCell, TableBody, AppBar, Toolbar, IconButton } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import PostAddIcon from '@mui/icons-material/PostAdd';

import useSettings from '../hooks/useSettings';

import AddEmploiProfHook from '../Hook/EmploiProf/Add-emploi-Prof-hook';




const AddEmploi = () => {
    const { themeStretch } = useSettings();

    const [
        DataDates, DataProf, DataNiveau, DataFillier, DataGroupes, DataSalleDispo, OneDateSecondaire,DataModules,
        ReadDataDatesModules, ReadDataProf, ReadDataFillier, RaedDataNiveau, ReadDatagroupe, ReadDatasalle, ReadDataDatesSecondaire, setJour, setIdDate, setIndex, IsValidateAdding, setIsValidateAdding, setInitialData,setIdSeanceDelete,
        DataSeancesRead, EmploiProf,
        HandelSubmit,HandelDelte
    ] = AddEmploiProfHook()

    // console.log('tes', DataDates)

    const FormatTime = (time) => {
        const parsedTime = new Date(`2000-01-01T${time}`);
        return parsedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    // Logique PopUp 
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false)
        setInitialData(true)
    };

    useEffect(() => {
        setOpen(false)
        setIsValidateAdding(false)
    }, [IsValidateAdding])




    // -------------------------------------------------------------------

    // data in select prof 
    const defaultPropsProf = {
        options: DataProf,
        getOptionLabel: (option) => `${option.prenom} ${option.nom}`,
    };
    // data in select Fillier 
    const defaultPropsFillier = {
        options: DataFillier,
        getOptionLabel: (option) => `${option.nom}`,
    };
    // data in select Niveau 
    const defaultPropsNiveau = {
        options: DataNiveau,
        getOptionLabel: (option) => ` ${option.nom}`,
    };
    // data in select groupe 
    const defaultPropsGroupe = {
        options: DataGroupes,
        getOptionLabel: (option) => ` ${option.nom}`,
    };
    // data in select salle 
    const defaultPropsSalles = {
        options: DataSalleDispo,
        getOptionLabel: (option) => `${option.nom}  --  ${option.adresse}`,
    };
    // data in select dates secondaire 
    const defaultPropsDatesSecondaire = {
        options: OneDateSecondaire,
        getOptionLabel: (option) => `${FormatTime(option.heur_debut)}  --  ${FormatTime(option.heur_fin)}`,
    };
     // data in select Modules 
     const defaultPropsModules = {
        options: DataModules,
        getOptionLabel: (option) => `${option.nom}`,
    };



    const handleClick = (idDate, day, index, idSeance) => {
        setIdDate(idDate)
        setJour(day)
        setIndex(index)
        handleClickOpen()
        setIdSeanceDelete(idSeance)
        // console.log('idSeance :', idSeance)

    }

    // Show Content Of Cell in table
    const renderCellContent = (item, day,index) => {

        const matchingSeances = EmploiProf[day];
    
        if (matchingSeances) {
            const existeSeance = matchingSeances.filter((seance) => seance.date_heurs.id === item.date_id || seance.date_heurs.type_Stp === item.date_id);
    
            if (existeSeance.length > 0) {
                const matchingSeance = existeSeance[0];
            // console.log(matchingSeance);
                return (
                    <Box sx={{fontSize:'.7rem'}} onClick={() => handleClick(item.date_id, day, index, matchingSeance.id)} >
                        {/* <p> Fillier:  <span style={{color:'green',fontWeight:'900', fontSize:'.9rem'}} > {matchingSeance.groupes.filliere.nom} </span> </p> */}
                        {/* <p> Module:  <span style={{color:'green',fontWeight:'900', fontSize:'.9rem'}} > {matchingSeance.module.nom} </span> </p> */}
                        <p>Groupe: <span style={{color:'green',fontWeight:'900', fontSize:'.9rem'}} > {matchingSeance.groupes.nom} </span> </p>
                        <p>Salle: <span style={{color:'green',fontWeight:'900', fontSize:'.9rem'}} > {matchingSeance.salle.nom} - {matchingSeance.salle.adresse} </span> </p>
                        <p>{matchingSeance.date_heurs.type === "Secondaire" ? <span style={{color:'green'}}> {FormatTime(matchingSeance.date_heurs.heur_debut)} - {FormatTime(matchingSeance.date_heurs.heur_fin)} </span> : null }  </p>
                        <p> Niveau:  <span style={{color:'green',fontWeight:'900', fontSize:'.9rem'}} > {matchingSeance.groupes.niveau.nom} </span> </p>
                        {/* <Box> delete </Box> */}
                    </Box>
                );
            }
        }
    
        // // use filtration
        // const isDateRead = DataSeancesRead.some(seance => seance.IdDate === item.date_id && seance.Jour === day);
    
        // if (isDateRead) {
        //     const matchingSeance = DataSeancesRead.find(seance => seance.IdDate === item.date_id && seance.Jour === day);
    
        //     return (
        //         <Box onClick={() => handleClick(item.date_id, day, index)}>
        //             <p> Fillier:  <span> {matchingSeance.NomFillier} </span> </p>
        //             <p>Groupe: <span> {matchingSeance.NomGroupe} </span> </p>
        //             <p>Salle: <span> {matchingSeance.NomSalle} </span> </p>
        //             <p>{matchingSeance.NomDateSecondaire && <span style={{color:'green'}}> {matchingSeance.NomDateSecondaire} </span>} </p>
        //         </Box>
        //     );
        // }
    
        return <PostAddIcon sx={{ width:'120px',height:'50px'}} onClick={() => handleClick(item.date_id, day, index)} />;
    };

    // -------------------------------------------------------------------


    return (
        <Container maxWidth={themeStretch ? false : 'xl'}>


            <Typography variant="h5" component="h1" paragraph style={{ color: 'green', marginBottom: '4rem' }}>
                Ajouter Emploi
            </Typography>

            <Box sx={{ marginBottom: '3rem', marginLeft: '3rem' }}>
                <Stack spacing={1} sx={{ width: 250 }}>
                    <Autocomplete
                        {...defaultPropsProf}
                        onChange={ReadDataProf}
                        id="auto-select"
                        autoSelect
                        renderInput={(params) => (
                            <TextField {...params} label="Professeurs" variant="standard" />
                        )}
                    />
                </Stack>
            </Box>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ textAlign: 'center' }} > <b>Heure \ Jours</b></TableCell>

                        {DataDates[Object.keys(DataDates)[0]] ?
                            DataDates[Object.keys(DataDates)[0]].map((timeSlot, timeIndex) => (

                                <TableCell key={timeIndex} sx={{ fontWeight: '700', textAlign: 'center' }}>
                                    {FormatTime(timeSlot.heur_debut)} - {FormatTime(timeSlot.heur_fin)}
                                </TableCell>

                            )) : null
                        }


                    </TableRow>
                </TableHead>


                <TableBody>

                    {
                        Object.keys(DataDates).map((day, index) => (

                            <TableRow key={index}>


                                <TableCell sx={{ fontWeight: '700', textAlign: 'center' }} > {day} </TableCell>


                                {
                                    DataDates[day].map((item, index) => (
                                        <TableCell key={index} sx={{ cursor: 'pointer', fontWeight: '700', textAlign: 'center' ,height: '80px', position:'relative', borderBottom: 'grey solid 1px', borderRight: 'grey solid 1px' }} >
                                            {/* {console.log('----t',item)} */}
                                            {DataSeancesRead && renderCellContent(item, day,index)}


                                        </TableCell>

                                    ))
                                }


                            </TableRow>

                        ))
                    }

                </TableBody>
            </Table>


            <Dialog fullWidth open={open} onClose={handleClose} // TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Sound
                        </Typography>
                        
                        <Button autoFocus sx={{color:'red'}} onClick={HandelDelte}>
                            delete
                        </Button>

                        <Button autoFocus color="inherit" onClick={HandelSubmit}>
                            save
                        </Button>
                       
                    </Toolbar>
                </AppBar>

                <Box sx={{ height: '65vh' }} >

                    <Box sx={{ display: 'flex', flex: 'row', justifyContent: 'space-evenly', marginTop: '1rem' }}>

                        <Stack spacing={1} sx={{ width: 250 }}>
                            <Autocomplete
                                {...defaultPropsFillier}
                                onChange={ReadDataFillier}
                                id="auto-select"
                                autoSelect
                                renderInput={(params) => (
                                    <TextField {...params} label="Fillier" variant="standard" />
                                )}
                            />
                        </Stack>

                        <Stack spacing={1} sx={{ width: 250 }}>
                            <Autocomplete
                                {...defaultPropsGroupe}
                                onChange={ReadDatagroupe}
                                id="auto-select"
                                autoSelect
                                renderInput={(params) => (
                                    <TextField {...params} label="Groupe" variant="standard" />
                                )}
                            />
                        </Stack>


                    </Box>

                    <Box sx={{ display: 'flex', flex: 'row', justifyContent: 'space-evenly', marginTop: '3rem' }}>

                        <Stack spacing={1} sx={{ width: 250 }}>
                            <Autocomplete
                                {...defaultPropsNiveau}
                                onChange={RaedDataNiveau}
                                id="auto-select"
                                autoSelect
                                renderInput={(params) => (
                                    <TextField {...params} label="Niveau" variant="standard" />
                                )}
                            />
                        </Stack>

                        <Stack spacing={1} sx={{ width: 250 }}>
                            <Autocomplete
                                {...defaultPropsSalles}
                                onChange={ReadDatasalle}
                                id="auto-select"
                                autoSelect
                                renderInput={(params) => (
                                    <TextField {...params} label="Salle" variant="standard" />
                                )}
                            />
                        </Stack>


                    </Box>


                    <Box sx={{ display: 'flex', flex: 'row', justifyContent: 'flex-start', marginTop: '3rem', paddingLeft: '2rem' }}>

                        <Stack spacing={1} sx={{ width: 250 }}>
                            <Autocomplete
                                {...defaultPropsDatesSecondaire}
                                onChange={ReadDataDatesSecondaire}
                                id="auto-select"
                                autoSelect
                                renderInput={(params) => (
                                    <TextField {...params} label="dates secondaire (optionnel)" variant="standard" />
                                )}
                            />
                        </Stack>

                        <Stack spacing={1} sx={{ width: 250 }}>
                            <Autocomplete
                                {...defaultPropsModules}
                                onChange={ReadDataDatesModules}
                                id="auto-select"
                                autoSelect
                                renderInput={(params) => (
                                    <TextField {...params} label="Modules" variant="standard" />
                                )}
                            />
                        </Stack>



                    </Box>

                </Box>


            </Dialog>



        </Container>

    )
}

export default AddEmploi