import { useEffect, useState } from 'react';

// @mui
import { Autocomplete, Box, Button, Checkbox, Container, FormControl, FormHelperText, Grid, Input, InputLabel, List, ListItem, ListItemIcon, ListItemText, ListSubheader, MenuItem, Paper, Radio, RadioGroup, Select, Stack, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import Page from '../components/Page'
import useSettings from '../hooks/useSettings';
import AjouterEncadreProfHook from '../Hook/EmploiProf/Ajouter-encadr-prof-hook';

import '../assets/css/Btn/text-effect.css'
import DeleteEncadreProfHook from '../Hook/EmploiProf/Delete-Encadr-Prof-hook';


const DeleteEncadrement = () => {

  const { themeStretch } = useSettings();


  const [
    DataProf, DataGroupesEncadre,
    GetDataProf,
    HandelDeleteGroupe, Loading

  ] = DeleteEncadreProfHook()

  // data in select prof 
  const defaultPropsProf = {
    options: DataProf,
    getOptionLabel: (option) => `${option.prenom} ${option.nom}`,
  };









  // Radio Groupe : 'PFE' or PFA'


  return (

    <Page title="Supprimer Encadrement">
      <Container maxWidth={themeStretch ? false : 'xl'}>

        <Typography variant="h5" component="h1" paragraph style={{ color: 'green', marginBottom: '4rem' }}>
          Supprimer Encadrement
        </Typography>


        <Box sx={{ display: 'flex', flex: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '1rem' }}>

          <Stack spacing={1} sx={{ width: 250 }}>
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

          {/* 
            <Box sx={{ margin: '3rem', display: 'flex', justifyContent: 'flex-end' }}>
              <Button onClick={HandelSubmit} variant="contained" endIcon={<PersonSearchIcon />}>
                Cherche
              </Button>
            </Box> */}


        </Box>

        <Box sx={{ marginTop: '5rem' }}>

          <Table>

            <TableHead>

              <TableRow>

                <TableCell sx={{ textAlign: 'center' }} > <b>Groupes</b></TableCell>
                <TableCell sx={{ textAlign: 'center' }} > <b>Fillier</b></TableCell>
                <TableCell sx={{ textAlign: 'center' }} > <b>Niveau</b></TableCell>
                <TableCell sx={{ textAlign: 'center' }} > <b>Objectif</b></TableCell>
                <TableCell sx={{ textAlign: 'center' }} > <b>Action</b></TableCell>

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
                      <TableCell sx={{ textAlign: 'center' }} > <Button sx={{ color: 'red' }} onClick={() => HandelDeleteGroupe(item.id)} > Supprime  </Button></TableCell>

                    </TableRow>
                  )
                  ) : (
                    <TableRow >
                      <TableCell sx={{color: 'red', textAlign: 'center' }} >Aucun groupes</TableCell>
                    </TableRow>
                  )


              }

            </TableBody>

          </Table>



        </Box>





      </Container>
    </Page >

  )

}

export default DeleteEncadrement