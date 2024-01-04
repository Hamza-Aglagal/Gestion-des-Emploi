import { useEffect, useMemo, useState } from 'react';

// @mui
import { Autocomplete, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormHelperText, Input, InputLabel, Stack, TextField, Typography } from '@mui/material';

// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import Emploi from '../components/EmploiRes';

import DeleteEmploiProfHook from '../Hook/EmploiProf/delete-emploi-Prof-hook'
// import css file
import '../assets/css/Btn/Btn-Add-seance.css'

// ----------------------------------------------------------------------

export default function DeleteEmploi() {
  const { themeStretch } = useSettings();

  // get all data 
  const [DataProf,
    GetDataProf,
    HandelSubmit, Loading,open,setOpen

  ] = DeleteEmploiProfHook()

  // data in select prof 
  const defaultPropsProf = {
    options: DataProf,
    getOptionLabel: (option) => `${option.prenom} ${option.nom}`,
  };



  // logique dialog 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };







  return (
    <Page title="Ajouter Seance">
      <Container maxWidth={themeStretch ? false : 'xl'}>

        <Typography variant="h5" component="h1" paragraph style={{ color: 'green', marginBottom: '4rem' }}>
          Supprimer Emploi Prof
        </Typography>

        <div style={{ display: 'flex', flex: 'row', justifyContent: 'space-evenly' }}>

          <FormControl style={{ marginTop: '3rem', height: '25vh', width: '70%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

            {/* <div>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            </div> */}

            <Stack spacing={1} sx={{ width: 300, marginTop: '2rem' }}>
              <Autocomplete
                {...defaultPropsProf}
                onChange={GetDataProf}
                id="auto-select"
                autoSelect
                renderInput={(params) => (
                  <TextField {...params} label="Professeur" variant="standard" />
                )}
              />
            </Stack>

            <Box className="wrap">
              <button className="button"
                onClick={handleClickOpen}
              >

                {
                  Loading ? (<div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>) : <p> Delete </p>
                }
              </button>

            </Box>



          </FormControl>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={HandelSubmit} autoFocus>
              Confirme
              </Button>
            </DialogActions>
          </Dialog>

        </div>






      </Container>
    </Page>
  );
}
