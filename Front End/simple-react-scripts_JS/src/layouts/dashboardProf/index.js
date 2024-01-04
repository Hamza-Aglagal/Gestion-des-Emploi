import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';







const DashboardLayoutProf = () => {

    const [UsrData, setUsrData] = useState()
    useEffect(() => {
        setUsrData(JSON.parse(localStorage.getItem('user')))
    }, [])
    


    return (

        <div style={{ backgroundColor: '#f6f6f9', minHeight: '100vh' }}>

            <Box sx={{width:'20%', backgroundColor:'#1f1f4c', color:'white', zIndex:'1111',height:'4rem',position:'fixed', top:'0', right:'0', borderTopLeftRadius:'0rem', borderBottomLeftRadius:'3rem', display:'flex', placeItems:'center', justifyContent:'center' }} >
               <Box sx={{marginRight:'1rem'}}>  {UsrData ? `${UsrData.prenom}  ${UsrData.nom}` : 'Professeur'  } </Box>
                <PersonIcon/>
            </Box>

            <SideBar/>



            <div style={{ minHeight:'100vh' , backgroundColor:'#f6f6f7', paddingLeft:'5rem', paddingTop:'1rem'}}>

                <Outlet/>

            </div>

        </div>

    )
}

export default DashboardLayoutProf