import React from 'react'

import { Box } from '@mui/material'

import { Outlet } from 'react-router-dom';


import NavBar from './NavBar'

import '../../assets/css/Student/Index.css'

import Aside from './Aside'



const DashboardLayoutStudent = () => {




    return (

        <div
            style={{backgroundColor:'#f6f6f9', minHeight:'100vh'}}
        >

            <NavBar />
        
            <div className='container' >


                <Aside />

                <Outlet />


            </div>

        </div>

    )
}

export default DashboardLayoutStudent