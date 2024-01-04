import React, { forwardRef, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Height, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, MobileStepper, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useTheme } from '@emotion/react';
import PopUpAddSeanceHook from '../../Hook/Seance/PopUp-Test-hook';
import CardSallesPopUp from '../Cards/CardSallesPopUp';




const PopUp = ({ open, setOpen, data }) => {

    // use hook add seance in PopUp 
    const [
        setJour, setIdDate, Jour, IdDate,
        DataDateWithDays
    ] = PopUpAddSeanceHook();






    const handleClose = () => {
        setOpen(false);
    };


    const renderTable = (day) => {
        const tableData = DataDateWithDays.AvailableDates[day];
        if (!tableData) return null;

        const columns = ["Heure de début", "Heure de fin"];

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
                            <TableCell>{item.heur_debut}</TableCell>
                            <TableCell>{item.heur_fin}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    };



    return (

        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
        // fullWidth
        >
            <AppBar sx={{ position: 'relative', }}>
                <Toolbar>

                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Dates Disponible
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        exit
                    </Button>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>

            </AppBar>



            <Box sx={{ maxWidth: 1000, flexGrow: 1, position: 'relative' }}>

                {DataDateWithDays ?
                DataDateWithDays.AvailableDates.map((day) => (
                    <Box key={day}>
                        <h4>{day.charAt(0).toUpperCase() + day.slice(1)}</h4>
                        {renderTable(day)}
                    </Box>
                )) : 'test'
                }


            </Box>


        </Dialog>


    )
}

export default PopUp