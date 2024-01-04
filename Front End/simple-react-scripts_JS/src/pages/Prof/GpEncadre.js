import React, { memo, useEffect, useRef, useState } from 'react'
// import '../assets/css/EmploiRespo.css'

// @mui
import { Box, Autocomplete, Container, FormControl, FormHelperText, Input, InputLabel, Stack, TextField, Typography, Backdrop, Button, CircularProgress, Dialog, Table, TableHead, TableRow, TableCell, TableBody, AppBar, Toolbar, IconButton, TableContainer, Paper, Popover, Modal, Fade, Drawer, ListItemButton, ListItemIcon, ListSubheader, Checkbox, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import PostAddIcon from '@mui/icons-material/PostAdd';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DatePicker from 'react-date-picker';


import useSettings from '../../hooks/useSettings';
import ShowGroupesEncadreProf from '../../Hook/EmploiProf/Show-groupe-EncadreProf-hook';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';


const GpEncadre = () => {

  const { themeStretch } = useSettings();

  const [
    DataGroupesEncadre, DataDates, DatesSallesAvailable,onChange,dateValue,handeleRserve,handleClose,openModal,setopenModal,
    HandelSearch, EmploiProf, AllEmploiOfListGroupe, salleid, handleChange, setValue, setDay, setTime

  ] = ShowGroupesEncadreProf()


  const FormatTime = (time) => {
    const parsedTime = new Date(`2000-01-01T${time}`);
    return parsedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };


  const getBackgroundColor = (index) => {
    const colors = ['red', 'black', 'grey'];
    return colors[index % colors.length];
  };

  const isDateAvailable = (datesSallesAvailable, day, itemId) => {
    return datesSallesAvailable && datesSallesAvailable[day] && datesSallesAvailable[day][itemId];
  };





  // date 
  



  const list = (salles) => {

    if (salles) {

      return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
              position: 'relative',
              overflow: 'auto',
              maxHeight: 300,
              marginTop: 5,
              boxShadow: '1px 3px 5px black',
              padding: '1rem',
              '& ul': { padding: 0 },
            }}
          // subheader={<li />}
          >

            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Salles</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={salleid}
                onChange={handleChange}
              >

                {salles.map((salle) => (

                  <FormControlLabel key={`salle-${salle.id}`} value={salle.id} control={<Radio />} label={`Salle ${salle.nom} ---   ${salle.adresse}`} />

                ))}

              </RadioGroup>
            </FormControl>

          </List >

          <Box sx={{ marginLeft: 3, width: '50%', marginTop: 5 }}>
            <FormControl id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true">
              {/* <input placeholder="Select date" type="text" id="example" className="form-control" />
              <label htmlFor="example">Try me...</label>
              <i className="fas fa-calendar input-prefix">.</i> */}
            </FormControl>
          </Box>

        </Box>

      );
    }

    return <Box> Aucun Salle </Box>

  };




  // end logique modal ------------
  const [DataSalles, setDataSalles] = useState(null)
  const HandleOpenModal = (day, time, salles) => {
    setopenModal(true)
    setDay(day)
    setTime(time)
    setDataSalles(salles)

  }




  // Show Content Of Cell in table --------------------------------------
  const renderCellContent = (item, day, index) => {
    const matchingSeancesEmploiProf = EmploiProf[day];
    const allEmploiGroups = Object.values(AllEmploiOfListGroupe);

    let emploiProfContent = null;
    let allEmploiContent = null;

    // Check matching seances in EmploiProf
    if (matchingSeancesEmploiProf) {
      const existeSeanceEmploiProf = matchingSeancesEmploiProf.filter((seance) => seance.date_heurs.id === item.date_id || seance.date_heurs.type_Stp === item.date_id);

      if (existeSeanceEmploiProf.length > 0) {
        const matchingSeanceEmploiProf = existeSeanceEmploiProf[0];
        emploiProfContent = (
          <p style={{ width: '100%', height: '30%', backgroundColor: '#0657D2', color: 'white', fontWeight: 'bold' }} >
            <span>
              {matchingSeanceEmploiProf.salle.adresse} {matchingSeanceEmploiProf.date_heurs.type === "Secondaire" ? <span > --- {FormatTime(matchingSeanceEmploiProf.date_heurs.heur_debut)} à {FormatTime(matchingSeanceEmploiProf.date_heurs.heur_fin)} </span> : null}
            </span>
          </p>
        );
      }
    }

    // Check matching seances in AllEmploiOfListGroupe for all groups
    allEmploiContent = allEmploiGroups.map((groupe, groupeIndex) => (
      <div key={groupeIndex} style={{ width: '100%', height: '30%' }}>
        {groupe[day].map((elem, elemIndex) => (
          (elem.date_heurs.id === item.date_id || elem.date_heurs.type_Stp === item.date_id) ?
            <p key={`${groupeIndex}-${elemIndex}`} style={{ width: '100%', height: '100%', backgroundColor: getBackgroundColor(groupeIndex), color: 'white', fontWeight: 'bold' }}>
              <span>
                {elem.salle.adresse} {elem.date_heurs.type === "Secondaire" ? <span > --- {FormatTime(elem.date_heurs.heur_debut)} à {FormatTime(elem.date_heurs.heur_fin)} </span> : null}
              </span>
            </p> : null
        ))}
      </div>
    ));


    const isAvailable = isDateAvailable(DatesSallesAvailable, day, item.date_id);





    return (


      isAvailable ? (
        <Box
          key={index}
          style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#00AB55', color: 'white', fontWeight: 'bold' }}


        >
          <Box onClick={() => HandleOpenModal(day, item.date_id, DatesSallesAvailable[day][item.date_id].Salles)}>
            Date available
          </Box>

          {/* _____________________________________________________________ */}





        </Box>
      ) :
        <Box sx={{ width: '100%', height: '100%', borderRadius: '1.3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {emploiProfContent}
          {allEmploiContent}

        </Box>



    );
  };




  return (
    <Container maxWidth={themeStretch ? false : 'xl'}>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginLeft: '2rem', marginTop: '2rem' }} >

        <Typography variant="h5" component="h1" paragraph style={{ textAlign: 'center', color: '#1F1F4C', marginTop: '11px', marginBottom: '4rem' }}>
          Encadré groupes
        </Typography>

      </Box>


      <Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">

            <TableHead>

              <TableRow>

                <TableCell sx={{ textAlign: 'center' }} > <b>Groupes</b></TableCell>
                <TableCell sx={{ textAlign: 'center' }} > <b>Fillier</b></TableCell>
                <TableCell sx={{ textAlign: 'center' }} > <b>Niveau</b></TableCell>
                <TableCell sx={{ textAlign: 'center' }} > <b>Objectif</b></TableCell>
                {/* <TableCell sx={{ textAlign: 'center' }} > <b>Action</b></TableCell> */}

              </TableRow>

            </TableHead>

            <TableBody>

              {
                DataGroupesEncadre ?
                  DataGroupesEncadre.map((item, index) =>
                  (
                    <TableRow key={index} style={{ borderBottom: '1px #D3DEE6 solid' }} >

                      <TableCell sx={{ textAlign: 'center' }} > <b> {item.groupe.nom} </b></TableCell>
                      <TableCell sx={{ textAlign: 'center' }} > <b> {item.groupe.filliere.nom} </b></TableCell>
                      <TableCell sx={{ textAlign: 'center' }} > <b> {item.groupe.niveau.nom} </b></TableCell>
                      <TableCell sx={{ textAlign: 'center' }} > <b> {item.type} </b></TableCell>
                      {/* <TableCell sx={{ textAlign: 'center' }} > <Button sx={{ color: 'blue' }} onClick={() => HandelSearch(item.groupe.id)} > Search  </Button></TableCell> */}

                    </TableRow>
                  )
                  ) : (
                    <TableRow >
                      <TableCell sx={{ color: 'red', textAlign: 'center' }} >Aucun groupes</TableCell>
                    </TableRow>
                  )


              }

            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ marginTop: '1rem', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button sx={{ color: 'blue' }} onClick={() => HandelSearch()} > Search  </Button>
        </Box>

      </Box>

      <Typography variant="h5" component="h1" paragraph style={{ marginLeft: '2.5rem', marginTop: '3rem', color: '#1F1F4C', marginBottom: '2rem' }}>
        Dates disponibles
      </Typography>

      <Box sx={{ marginTop: '3rem' }}>

        <Table sx={{ backgroundColor: 'white' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', position: 'relative', textAlign: 'center', border: '2px solid black' }} >

                <Box> Heure \ Jours </Box>
                {/* <Box sx={{ backgroundColor: 'black', position: 'absolute', height: '5.6rem', width: "1px", right: '13px', top: '0' }} > <span style={{ opacity: '0' }} >.</span></Box> */}

              </TableCell>

              {DataDates[Object.keys(DataDates)[0]] ?
                DataDates[Object.keys(DataDates)[0]].map((timeSlot, timeIndex) => (

                  <TableCell key={timeIndex} sx={{ fontWeight: 'bold', position: 'relative', textAlign: 'center', border: '2px solid black' }}>

                    <Box  >
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


                  <TableCell sx={{ width: '11rem', height: '5.7rem', position: 'relative', fontWeight: '700', textAlign: 'center', border: 'black 2px solid' }} >

                    {day}

                    {/* <Box sx={{ backgroundColor: 'black', position: 'absolute', height: '5.6rem', width: "2px", right: '13px', top: '0' }} > <span style={{ opacity: '0' }} >.</span></Box> */}

                  </TableCell>


                  {
                    DataDates[day].map((item, index) => (
                      <TableCell key={index} sx={{ width: '11rem', height: '5.7rem', border: '2px solid #1F1F4C', cursor: 'pointer', fontWeight: '500', textAlign: 'center', position: 'relative', margin: '0', padding: '0' }} >

                        {/* <Box sx={{ width: '100%', height: '100%', borderRadius: '1.3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }} > */}
                        {renderCellContent(item, day, index)}
                        {/* </Box> */}

                      </TableCell>

                    ))
                  }


                </TableRow>

              ))
            }

          </TableBody>
        </Table>


      </Box>


      <Dialog
        fullWidth
        open={openModal}
        onClose={() => setopenModal(false)}
        sx={{ zIndex: 33333 }}
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
              Salle disponible
            </Typography>
            <Button autoFocus color="inherit" onClick={handeleRserve}>
              Reserve
            </Button>
          </Toolbar>
        </AppBar>

        <Box sx={{marginLeft:'9rem'}}>

          {/* <Box sx={{ width: '50%', marginLeft: '5rem' }}> */}
            {list(DataSalles)}
          {/* </Box> */}

          {/* <Box sx={{ width: '50%' }}>
            <DatePicker onChange={onChange} value={dateValue} />
          </Box> */}

        </Box>


      </Dialog>





    </Container >

  )
}

export default GpEncadre