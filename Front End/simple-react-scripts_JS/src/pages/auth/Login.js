import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CircularProgress, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import logoEmsi from '../../assets/img/logo.png'
import bgLogin from '../../assets/img/logoBg.png'
import Page from '../../components/Page';

import '../../assets/css/Auth/style.css'
import LoginHook from '../../Hook/Auth/login-hook';
import FaceId from '../../components/AuthFaceId/FaceId';




export default function SignInSide() {

    const defaultTheme = createTheme();

    const [
        Email, Password, onEmailChange, onPasswordChange, Errors, handelSubmit, Loading
    
    ] = LoginHook()


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    


    return (
        <Page title="Login" className="Login">
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-t-85 p-b-20">

                        <form  className="login100-form validate-form" style={{display:'flex', flexDirection:'column', justifyContent:'space-between',  alignItems:'center',  height:'76vh', width:'35rem'}} >

                            <span className="login100-form-title p-b-70" style={{fontWeight:'bold', fontSize:'2.5rem'}}>
                                Welcome
                            </span>

                            <span className="login100-form-avatar" style={{width:'7rem', height:'7rem', border:'#00A955 solid 3px', boxShadow:'3px 5px 7px black', borderRadius:'50%' , position:'relative'}} >
                                <img src={logoEmsi} alt="AVATAR"  style={{width:'100%'}}  />
                            </span>

                            <div className="wrap-input100 validate-input m-t-85 m-b-35" data-validate="Enter username">
                                <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                                    <Input
                                        id="standard-adornment-email"
                                        type="email"
                                        onChange={onEmailChange}
                                        value={Email}

                                        
                                    />
                                    <p className='danger' style={{fontSize:'11px'}} > {Errors && Errors.email} </p>
                                </FormControl>
                            </div>

                            <div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
                                <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ?  <Visibility /> :  <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        onChange={onPasswordChange}
                                        value={Password}

                                    />
                                    <p className='danger' style={{fontSize:'11px'}} > {Errors && Errors.password} </p>

                                </FormControl>
                            </div>

                            <div className="container-login100-form-btn">
                                <Button  onClick={handelSubmit}  sx={{ m: 1, width: '40ch', height:'3rem' , borderRadius:'2rem' }} variant="contained" >
                                    {
                                        Loading === true ? <CircularProgress color="success" /> : 'LOGIN'
                                    }
                                    
                                </Button>
                            </div>

                            <ul className="login-more p-t-190" style={{color:'grey', marginRight:'5rem' }} >
                                <li className="m-b-8">
                                    <span className="txt1">
                                        Forgot 
                                    </span>
                                    <a href="#" className="txt2" style={{ textDecoration:'none', color:'green'}} >
                                         Username / Password?
                                    </a>
                                </li>
                                <li>
                                    <span className="txt1">
                                        Don’t have an account?
                                    </span>
                                    <a href="#" className="txt2" style={{ textDecoration:'none', color:'green'}} >
                                        Sign up
                                    </a>
                                </li>
                            </ul>

                        </form>
                    </div>
                </div>
            </div>

            {/* <FaceId/> */}
            
        </Page>
    );
}