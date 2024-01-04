import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewUser } from '../../Redux/Actions/AuthAction'
import { useNavigate } from 'react-router-dom'



const RegisterHook = () => {

    const dispatch = useDispatch()
    const navegate = useNavigate()

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const [Loading, setLoading] = useState(false)

    const [errors, setErrors] = useState({
        firstname: null,
        lastname: null,
        email: null,
        password: null
    })



    const onFirstNameChange = (e) => {
        e.persist()
        setFirstName(e.target.value)
    }
    const onLastNameChange = (e) => {
        e.persist()
        setLastName(e.target.value)
    }
    const onEmailChange = (e) => {
        e.persist()
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        e.persist()
        setPassword(e.target.value)
    }

    // function validation
    const validateForm = () => {
        // Validate FirstName
        if (!FirstName) {
            errors.firstname = 'Please enter your first name';
        } else {
            errors.firstname = null
        }
        // Validate LastName
        if (!LastName) {
            errors.lastname = 'Please enter your last name';
        } else {
            errors.lastname = null
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
        } else if (!isStrongPassword(Password)) {
            errors.password = 'Password should contain symbols, numbers, and characters';
        } else {
            errors.password = null
        }

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

    const ShowPassword = () => {
        var x = document.getElementById("InputPassword");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    // get data client 
    const Client = useSelector(state => state.AuthRed.NewUser)

    // handel submit
    const handelSubmit = async (e) => {
        e.preventDefault()
        validateForm()

        setLoading(true)
        await dispatch(createNewUser({
            'firstname': FirstName,
            'lastname': LastName,
            'email': Email,
            'password': Password,
        }))
        setLoading(false)

    }

    useEffect(() => {
        if (Loading === false) {
            if (Client) {
                // console.log('Client :', Client)
                if (Client.token) {
                    localStorage.setItem('token', Client.token)
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPassword('')
                    // setLoading(true)
                    setTimeout(() => navegate('/login')  )
                }
                if (Client.data.errors) {
                    console.log('error_email', Client.data.errors.email[0])
                    setErrors({ ...errors, email: Client.data.errors.email[0] })
                }
            }
        }
    }, [Loading])




    return [FirstName, LastName, Email, Password, onFirstNameChange, onLastNameChange, onEmailChange, onPasswordChange, errors, handelSubmit, ShowPassword, Loading]



}

export default RegisterHook