import { useEffect, useState } from 'react';

// @mui
import { Autocomplete, Box, Button, Checkbox, Container, FormControl, FormHelperText, Grid, Input, InputLabel, List, ListItem, ListItemIcon, ListItemText, ListSubheader, MenuItem, Paper, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';

import Page from '../components/Page'
import useSettings from '../hooks/useSettings';
import AjouterEncadreProfHook from '../Hook/EmploiProf/Ajouter-encadr-prof-hook';

import '../assets/css/Btn/text-effect.css'



const AjouterEncadremant = () => {

    const { themeStretch } = useSettings();


    const [
        DataProf, DataFillier, DataNiveau, DataGroupes,
        GetDataProf, GetDataFillier, GetDataNiveau, setLeft, left,setType,
        HandelSubmit, Loading

    ] = AjouterEncadreProfHook()

    // data in select prof 
    const defaultPropsProf = {
        options: DataProf,
        getOptionLabel: (option) => `${option.prenom} ${option.nom}`,
    };

    const defaultPropsFillier = {
        options: DataFillier,
        getOptionLabel: (option) => `${option.nom}`,
    };

    const defaultPropsNiveau = {
        options: DataNiveau,
        getOptionLabel: (option) => `${option.nom} année`,
    };


    // Logique  transfer list 

    function not(a, b) {
        return a.filter((value) => b.indexOf(value) === -1);
    }

    function intersection(a, b) {
        return a.filter((value) => b.indexOf(value) !== -1);
    }

    const [checked, setChecked] = useState([]);
    const [right, setRight] = useState([]);


    // console.log('left :', left)
    // console.log('right :', right)
    useEffect(() => {
        setRight(DataGroupes)
    }, [DataGroupes])


    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };

    const customList = (items, themeColor) => (
        <Paper sx={{ boxShadow: '1px 3px 5px black', width: 200, height: 230, overflow: 'auto' }}>
            <List dense component="div" role="list">
                {items.map((value, index) => {
                    const labelId = `transfer-list-item-${value}-label`;
                    // console.log('test :', value)
                    return (
                        <ListItem
                            key={index}
                            role="listitem"
                            button
                            onClick={handleToggle(value)}
                            sx={{ boxShadow: themeColor === 'left' && '1px 3px 5px hsl(130 80% 50%)' }}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`  ${value.nom}`} />
                        </ListItem>
                    );
                })}
            </List>
        </Paper>
    );


    // Radio Groupe : 'PFE' or PFA'


    return (

        <Page title="Ajouter Encadrement">
            <Container maxWidth={themeStretch ? false : 'xl'}>

                <Typography variant="h5" component="h1" paragraph style={{ color: 'green', marginBottom: '4rem' }}>
                    Ajouter Encadrement
                </Typography>


                <Box sx={{ display: 'flex', flex: 'row', justifyContent: 'space-around', marginTop: '1rem' }}>

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

                    <Stack spacing={1} sx={{ width: 250 }}>
                        <Autocomplete
                            {...defaultPropsFillier}
                            onChange={GetDataFillier}
                            id="auto-select"
                            autoSelect
                            renderInput={(params) => (
                                <TextField {...params} label="Fillier" variant="standard" />
                            )}
                        />
                    </Stack>

                    <Stack spacing={1} sx={{ width: 250 }}>
                        <Autocomplete
                            {...defaultPropsNiveau}
                            onChange={GetDataNiveau}
                            id="auto-select"
                            autoSelect
                            renderInput={(params) => (
                                <TextField {...params} label="Niveau" variant="standard" />
                            )}
                        />
                    </Stack>

                    <Stack spacing={1} sx={{ width: 100 }}>

                        <TextField
                            id="standard-read-only-input"
                            label="Objectif"
                            defaultValue="PFA"
                            onChange={(e)=> setType(e.target.value) }
                            InputLabelProps={{
                                shrink: true,
                              }}
                            variant="standard"
                        />

                    </Stack>


                </Box>

                <Box sx={{ marginTop: '5rem' }}>

                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Box>  <span className="underlined underline-clip"> Groupes encadrés : </span>  </Box>
                        <Grid item>{customList(left, 'left')}</Grid>

                        <Grid item>

                            <Grid container direction="column" alignItems="center">
                                <Button
                                    sx={{ my: 0.5 }}
                                    variant="outlined"
                                    size="small"
                                    onClick={handleAllRight}
                                    disabled={left.length === 0}
                                    aria-label="move all right"
                                >
                                    ≫
                                </Button>
                                <Button
                                    sx={{ my: 0.5 }}
                                    variant="outlined"
                                    size="small"
                                    onClick={handleCheckedRight}
                                    disabled={leftChecked.length === 0}
                                    aria-label="move selected right"
                                >
                                    &gt;
                                </Button>
                                <Button
                                    sx={{ my: 0.5 }}
                                    variant="outlined"
                                    size="small"
                                    onClick={handleCheckedLeft}
                                    disabled={rightChecked.length === 0}
                                    aria-label="move selected left"
                                >
                                    &lt;
                                </Button>
                                <Button
                                    sx={{ my: 0.5 }}
                                    variant="outlined"
                                    size="small"
                                    onClick={handleAllLeft}
                                    disabled={right.length === 0}
                                    aria-label="move all left"
                                >
                                    ≪
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid item>{customList(right, 'right')}</Grid>

                    </Grid>

                    <Box sx={{ margin: '3rem', display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={HandelSubmit} variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Box>

                </Box>





            </Container>
        </Page>

    )

}

export default AjouterEncadremant