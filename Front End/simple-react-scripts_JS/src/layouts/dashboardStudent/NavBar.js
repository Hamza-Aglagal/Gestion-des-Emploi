import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import logo from '../../assets/img/logo.png'



const NavBar = () => {

    const location = useLocation()
    const navegate = useNavigate()


    const [Clicked, setClicked] = useState('/student/home')

    useEffect(() => {
        setClicked(location.pathname)
    }, [location])


  const handelLogoutStudent = () => {
    localStorage.removeItem('token');
    setTimeout(() => navegate('/login'), 500)
  }



    return (

        <header className='navBarStudent'>
            <div className="logo">
                <Link to='/student'>
                    <img src={logo} alt="" />
                </Link>
                <Link to='/student' style={{textDecoration:'none'}} >
                    <h2 >E<span className="success">M</span>S<span className="success">I</span></h2>
                </Link>

            </div>
            <div className="navbar">
                <Link to="home" className={`link ${Clicked === '/student/home' && 'active'} `}>
                    <span className="material-icons-sharp">home</span>
                    <h3>Home</h3>
                </Link>
                <Link to="time-table" className={`link ${Clicked === '/student/time-table' && 'active'} `} >
                    <span className="material-icons-sharp">today</span>
                    <h3>Time Table</h3>
                </Link>
                <Link to="examination" className={`link ${Clicked === '/student/examination' && 'active'} `}  >
                    <span className="material-icons-sharp">grid_view</span>
                    <h3>Examination</h3>
                </Link>
                <Link to="change-password" className={`link ${Clicked === '/student/change-password' && 'active'} `}>
                    <span className="material-icons-sharp">password</span>
                    <h3>Change Password</h3>
                </Link>
                <Link to="#" onClick={handelLogoutStudent}  className={`link ${Clicked === '#' && 'active'} `}>
                    <span className="material-icons-sharp">logout</span>
                    <h3>Logout</h3>
                </Link>
            </div>
            <div id="profile-btn" style={{ display: "none" }}>
                <span className="material-icons-sharp">person</span>
            </div>
            <div className="theme-toggler">
                <span className="material-icons-sharp active">light_mode</span>
                <span className="material-icons-sharp">dark_mode</span>
            </div>
        </header>





    )
}

export default NavBar