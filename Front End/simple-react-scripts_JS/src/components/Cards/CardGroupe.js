import React from 'react'
import { useTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

// css 
import '../../assets/css/CardAnimation.css'

const CardGroupe = ({ item }) => {
    

const theme = useTheme();

return (
    <Card sx={{ width: '80%', height: '75px', display: 'flex', border: 'green solid 2px', margin: '7px' }}>

        <Box sx={{ width: '100%' }}>
            <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography component="div" variant="h5">
                    {item.nom}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    3 éme année
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Salle 502
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Reseau et Informatique
                </Typography>
                <Typography  className='animate-charcter' variant="subtitle1" color="text.secondary" component="div">
                        Gueliz
                </Typography>
            </CardContent>


        </Box>

    </Card>
)
}

export default CardGroupe