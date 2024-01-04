import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../../Redux/Actions/AuthAction'
import { getUserTypeFromToken } from '../../routes/Pravite-routes'
import { USER_TYPE } from '../../Redux/types'



const LoginHook = () => {

    const dispatch = useDispatch()
    const navegate = useNavigate()

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const [Loading, setLoading] = useState(false)
    const [onPress, setonPress] = useState(false)
    const [Errors, setErrors] = useState()


    // console.log(Email)
    // console.log(Password)

    const onEmailChange = (e) => {
        // e.persist()
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        // e.persist()
        setPassword(e.target.value)
    }

    // function validation
    const validateForm = () => {
        const errors = {
            email: '',
            password: ''
        }
        // Validate Email
        if (!Email) {
            errors.email = 'Please enter your email';
        } else if (!isValidEmail(Email)) {
            errors.email = 'Please enter a valid email address';
        } else {
            errors.email = null
        }
        // Validate Password
        if (!Password) {
            errors.password = 'Please enter a password';
        } else if (Password.length < 8) {
            errors.password = 'Password should be at least 8 characters long';
        } else {
            errors.password = null
        }

        return errors

    }

    const isValidEmail = (email) => {
        // Basic email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const isStrongPassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        return passwordRegex.test(password);
    }



    // get info login 
    const Client = useSelector(state => state.RedAuth.LoginUser)
    // console.log('res :', Client)


    // handel submit
    const handelSubmit = async (e) => {

        setonPress(true)

        await setErrors(validateForm())


        if (Email && Password) {
            setLoading(true)

            await dispatch(LoginUser({
                'email': Email,
                'password': Password
            }))
            setLoading(false)
        }


    }


    useEffect(() => {
        if (!Loading && onPress) {
            if (Client) {
                // console.log('Client :', Client)
                if (Client.token) {
                    localStorage.setItem('token', Client.token)
                    localStorage.setItem('user', JSON.stringify(Client.userData))
                    // localStorage.setItem('user', JSON.stringify(Client.data))
                    // localStorage.setItem('userData', Client.userData)


                    setEmail('')
                    setPassword('')

                    if (Client.userType === "professeur") {
                        setTimeout(() => navegate('/prof', 2000))
                    } else if (Client.userType === "admin") {
                        setTimeout(() => navegate('/dashboard', 1500))
                    } else if (Client.userType === "student") {
                        setTimeout(() => navegate('/student', 1500))
                    }


                } else {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                }
                if (Client.error) {
                    // console.log('error_email', Client.data.errors.email[0])
                    setErrors({ ...Errors, password: Client.error })
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                }
            }
        }
    }, [Loading])




    return [
        Email, Password, onEmailChange, onPasswordChange, Errors, handelSubmit, Loading
    ]



}

export default LoginHook