import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import Groups2Icon from '@mui/icons-material/Groups2';

import '../../assets/css/Prof/style.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { token } from 'stylis';



const SideBar = () => {

    const location = useLocation()
    const navegate = useNavigate()

    const [Clicked, setClicked] = useState('/prof/home')

    useEffect(() => {
        setClicked(location.pathname)
    }, [location])


    const handlLogout = () => {
        setClicked('/prof/logout')
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('userData');
        localStorage.removeItem('typeUser');
        setTimeout(() => navegate('/login'),500)
    }

    return (

        // dark-ui  
        <header className='SideBarProf' >

            <div className="navwrapper">


                <div className="nav mainnav">



                    <Link to="/prof/home" className={Clicked === '/prof/home' ? 'selected navbutton  ' : 'navbutton '} onClick={() => setClicked('/prof/home')} >
                        <div className="navicon">
                            <HomeIcon />
                        </div>
                        <div className="navlabel">
                            Home
                        </div>
                    </Link>

                    <Link to="/prof/time-table" className={Clicked === '/prof/time-table' ? 'selected navbutton demoanimhover ' : 'navbutton demoanimhover '} onClick={() => setClicked('/prof/time-table')}>
                        <div className="navicon">
                            <AccessTimeFilledIcon />
                        </div>
                        <div className="navlabel" >
                            time table
                        </div>
                    </Link>

                    <Link to="#" className={Clicked === '/prof/Searche' ? 'selected navbutton  ' : 'navbutton '} onClick={() => setClicked('/prof/Searche')}>
                        <div className="navicon">
                            <ContentPasteSearchIcon />
                        </div>
                        <div className="navlabel">
                            Searche
                        </div>
                    </Link>

                    <Link to="/prof/groupe-encadre" className={Clicked === '/prof/groupe-encadre' ? 'selected navbutton  ' : 'navbutton '} onClick={() => setClicked('/prof/groupe-encadre')} >
                        <div className="navicon">
                            <Groups2Icon />
                        </div>
                        <div className="navlabel">
                            Encadrement
                        </div>
                    </Link>

                    <Link to="#" className={Clicked === '/prof/Profile' ? 'selected navbutton  ' : 'navbutton '} onClick={() => setClicked('/prof/Profile')} >
                        <div className="navicon">
                            <PersonIcon />
                        </div>
                        <div className="navlabel">
                            Profile
                        </div>
                    </Link>

                    <Link to="#" className={Clicked === '/prof/logout' ? 'selected navbutton  ' : 'navbutton '} onClick={handlLogout}>
                        <div className="navicon">
                            <LogoutIcon />
                        </div>
                        <div className="navlabel">
                            logout
                        </div>
                    </Link>

                </div>

            </div>
            {/* <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script> */}
            {/* <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}
        </header>




    )
}

export default SideBar


