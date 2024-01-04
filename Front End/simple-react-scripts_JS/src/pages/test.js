import { forwardRef, Fragment, useEffect, useState } from 'react';

// @mui
import { Box, Autocomplete, Container, FormControl, FormHelperText, Input, InputLabel, Stack, TextField, Typography, Backdrop, Button, CircularProgress, Dialog, Table, TableHead, TableRow, TableCell, TableBody, AppBar, Toolbar, IconButton } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


import PopUp from '../components/Responsable/PopUp';

// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

// import css file
import "../assets/css/Btn/Btn-Search-seance.css"
import AjouterEmploiHook from '../Hook/Seance/Test';




export default function AjouterEmploi() {
  const { themeStretch } = useSettings();

  // get all data 
  const [
    HandelSubmit, IspressValid, DataDates, DataNiveau, DataFillier, DataProf, DataGroupesFIllAndNiveau,DataSalleDispo,
    ReadDataProf, ReadDataFillier, RaedDataNiveau, ReadDatagroupe, ReadDatasalle, handelClik
  ] = AjouterEmploiHook()

  // console.log('test---', DataNiveau)



  // ---------------------------------------------------------------------------------------------------------

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
    options: DataGroupesFIllAndNiveau,
    getOptionLabel: (option) => ` ${option.nom}`,
  };
   // data in select salle 
   const defaultPropsSalles = {
    options: DataSalleDispo,
    getOptionLabel: (option) =>`${option.nom}  --  ${option.adresse}`,
  };






  // ---------------------------------------------------------------------------------------------------------



  // Pop up logique 
  const Transition = forwardRef((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
  ));

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  const renderTable = (day) => {
    const tableData = DataDates[day];
    if (!tableData) return null;


    const columns = ["Heure de début", "Heure de fin", "Fillier", "Niveau", "Groupe", "Salle", "Save"];

    return (
      <Table key={day}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>

          {tableData.map((item) => (
            <TableRow key={item.date_id}>

              <TableCell sx={{ fontWeight: '700' }} >{item.heur_debut}</TableCell>
              <TableCell sx={{ fontWeight: '700' }} >{item.heur_fin}</TableCell>

              <TableCell>
                <Stack spacing={1} sx={{ width: 170 }}>
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
              </TableCell>

              <TableCell>
                <Stack spacing={1} sx={{ width: 170 }}>
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
              </TableCell>

              <TableCell>
                <Stack spacing={1} sx={{ width: 170 }}>
                  <Autocomplete
                    {...defaultPropsGroupe}
                    onChange={ReadDatagroupe}
                    onSelect={() => handelClik(item.date_id, day)}
                    id="auto-select"
                    autoSelect
                    renderInput={(params) => (
                      <TextField {...params} label="Groupe" variant="standard" />
                    )}
                  />
                </Stack>
              </TableCell>

              <TableCell>
                <Stack spacing={1} sx={{ width: 170 }}>
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
              </TableCell>

              <TableCell> <Button  variant="contained"> Save </Button> </TableCell>



            </TableRow>
          ))}

        </TableBody>
      </Table>
    );
  };


  return (
    <Page title="Ajouter Emploi">
      <Container maxWidth={themeStretch ? false : 'xl'}>

        <Typography variant="h5" component="h1" paragraph style={{ color: 'green', marginBottom: '4rem' }}>
          Test
        </Typography>

        <FormControl style={{ height: '50vh', width: '100%', display: 'flex', flex: 'column', justifyContent: 'space-evenly' }}>

          <Box display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center">

            <Stack spacing={1} sx={{ width: 300 }}>
              <Autocomplete
                {...defaultPropsProf}
                onChange={ReadDataProf}
                id="auto-select"
                autoSelect
                renderInput={(params) => (
                  <TextField {...params} label="Professeur" variant="standard" />
                )}
              />
            </Stack>


            <Box onClick={() => handleClickOpen()} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <button className="pushable" onClick={HandelSubmit} >
                <span className="shadow">.</span>
                <span className="edge">.</span>
                <span className="front">
                  Next
                </span>
              </button>


            </Box>


          </Box>



        </FormControl>

        {/* ----------------------------------------------------------------------------------------------------------------------------- */}

        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
        // TransitionComponent={Transition}
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
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>


          {Object.keys(DataDates).map((day) => (
            <Box key={day}>
              <h4>{day.charAt(0).toUpperCase() + day.slice(1)}</h4>
              {renderTable(day)}
            </Box>
          ))}

        </Dialog>



        {/* ----------------------------------------------------------------------------------------------------------------------------- */}





      </Container>
    </Page >
  );
}
