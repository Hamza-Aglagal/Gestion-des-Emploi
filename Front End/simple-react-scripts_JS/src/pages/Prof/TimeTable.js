import React, { useEffect, useRef, useState } from 'react'
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

// package to create pdf 
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useReactToPrint } from 'react-to-print';

import useSettings from '../../hooks/useSettings';
import ShowEmploiProf from '../../Hook/EmploiProf/Show-Emploi-prof-hook';

import logoEmsi from '../../assets/img/logo_emsi.webp'




const TimeTable = () => {

    const { themeStretch } = useSettings();

    const [
        DataDates, UserData,
        EmploiProf, MoudlesProf,

    ] = ShowEmploiProf()



    const [TypeProf, setTypeProf] = useState(null)
    useEffect(() => {
        if (UserData) {
            setTypeProf(UserData.type)
        }
    }, [UserData])






    const FormatTime = (time) => {
        const parsedTime = new Date(`2000-01-01T${time}`);
        return parsedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    // get date current :
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();



    // Show Content Of Cell in table
    const renderCellContent = (item, day, index) => {

        const matchingSeances = EmploiProf[day];

        if (matchingSeances) {
            const existeSeance = matchingSeances.filter((seance) => seance.date_heurs.id === item.date_id || seance.date_heurs.type_Stp === item.date_id);

            if (existeSeance.length > 0) {
                const matchingSeance = existeSeance[0];
                // console.log(matchingSeance);
                return (
                    <Box sx={{ width: '100%', height: '100%', borderRadius: '1.3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >

                        <p>{matchingSeance.date_heurs.type === "Secondaire" ? <span style={{ color: '#1F1F4C', fontWeight: 'bold' }}> {FormatTime(matchingSeance.date_heurs.heur_debut)} à {FormatTime(matchingSeance.date_heurs.heur_fin)} </span> : null}  </p>

                        <p>  <span style={{ color: '#1F1F4C', fontWeight: 'bold' }} >  {matchingSeance.module.nom} </span> </p>

                        <p><span style={{ color: 'grey', fontWeight: 'bold' }} > <span style={{ color: '#1F1F4C', fontWeight: 'bold' }} > {matchingSeance.salle.adresse} </span> Salle {matchingSeance.salle.nom}  </span> </p>

                        <p><span style={{ color: 'grey', fontWeight: 'bold' }} > <span style={{ color: '#1F1F4C', fontWeight: 'bold' }} > {matchingSeance.groupes.niveau.nom} </span>   {matchingSeance.groupes.nom} </span> </p>

                    </Box>
                );
            }
        }

    };

    // -------------------------------------------------------------------

    // create file pdf
    const ContentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => ContentRef.current,
    })






    return (
        <Container  maxWidth={themeStretch ? false : 'xl'}>

            <Box ref={ContentRef}>

                <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: '2rem', marginTop: '2rem' }} >

                    <Box sx={{ width: '20%' }} >
                        <img src={logoEmsi} alt='logo_emsi' />
                    </Box>

                    <Typography variant="h5" component="h1" paragraph style={{ width: '80%', textAlign: 'center', color: 'black', fontFamily: "Times, Times New Roman, serif", marginTop: '11px', marginBottom: '4rem' }}>
                        EMPLOI DU TEMPS
                    </Typography>

                </Box>



                <Box sx={{ paddingX: '3rem', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontWeight: 'bold' }}>

                    <Box sx={{ paddingBottom: '11px', fontFamily: "Times, Times New Roman, serif" }}> SEMESTRE : 1 </Box>

                    <Box sx={{}} > Professeur : {`<< ${TypeProf} >>`}  </Box>

                    <Box sx={{}} > Annés universitaire : {currentYear}-{currentYear + 1}  </Box>


                </Box>


                <Table sx={{ backgroundColor: 'white' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ backgroundColor: 'white', border: '#1F1F4C solid 2px', position: 'relative', textAlign: 'center', borderBottom: '#1F1F4C solid 1px' }} >

                                <Box> Heure \ Jours </Box>

                            </TableCell>

                            {DataDates[Object.keys(DataDates)[0]] ?
                                DataDates[Object.keys(DataDates)[0]].map((timeSlot, timeIndex) => (

                                    <TableCell key={timeIndex} sx={{ fontWeight: 'bold', position: 'relative', textAlign: 'center', border: '2px solid #1F1F4C' }}>

                                        <Box sx={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }} >
                                            {FormatTime(timeSlot.heur_debut)} à {FormatTime(timeSlot.heur_fin)}
                                        </Box>
                                    </TableCell>

                                )) : null
                            }


                        </TableRow>
                    </TableHead>


                    <TableBody>

                        {
                            Object.keys(DataDates).map((day, index) => (

                                <TableRow key={index}>


                                    <TableCell sx={{ width: '11rem', height: '5.7rem', position: 'relative', fontWeight: '700', textAlign: 'center', border: '#1F1F4C 2px solid' }} >

                                        {day}

                                        {/* <Box sx={{ backgroundColor: 'black', position: 'absolute', height: '5.6rem', width: "2px", right: '13px', top: '0' }} > <span style={{ opacity: '0' }} >.</span></Box> */}

                                    </TableCell>


                                    {
                                        DataDates[day].map((item, index) => (
                                            <TableCell key={index} sx={{ width: '11rem', height: '5.7rem', border: '2px solid #1F1F4C', cursor: 'pointer', fontWeight: '500', textAlign: 'center', position: 'relative', margin: '0', padding: '0' }} >
                                                {/* , borderBottom: 'grey solid 1px', borderRight: 'grey solid 1px' */}
                                                {/* {console.log('----t',item)} */}
                                                {renderCellContent(item, day, index)}


                                            </TableCell>

                                        ))
                                    }


                                </TableRow>

                            ))
                        }

                    </TableBody>
                </Table>
                <Box>
                    {
                        MoudlesProf && MoudlesProf.map((item, index) => (
                            <span key={index} style={{ marginRight: '3px' }} >
                                <b>+</b>  {item.nom}
                            </span>
                        ))
                    }
                </Box>

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '2rem 0', marginTop: '2rem', marginLeft: '3rem' }}>
                <Stack spacing={1} sx={{ width: 200 }}>
                    <Button onClick={handlePrint} sx={{ border: 'green solid 1px' }}> Print </Button>
                </Stack>
            </Box>


        </Container>

    )
}

export default TimeTable