import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ResetPassword } from '../../Redux/Actions/AuthAction'

const ResetPasswordHook = (id) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [Password, setPassword] = useState()
    const [PasswordConfirm, setPasswordConfirm] = useState()
    const [Errors, setErrors] = useState('')
    const [Loading, setLoading] = useState(false)
    const [onPress, setonPress] = useState(false)
    const [IsConfirmed, setIsConfirmed] = useState(false)

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const onPasswordConfirmChange = (e) => {
        setPasswordConfirm(e.target.value)
    }

    // function validation
    const validateForm = () => {
        let errors = {
            password: '',
            passwordConfirm: ''
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
        // Validate Password Confirm
        if (!PasswordConfirm) {
            errors.passwordConfirm = 'Please enter a confirm password';
        } else if (Password.length < 8) {
            errors.passwordConfirm = 'Confirm Password should be at least 8 characters long';
        } else if (!isStrongPassword(PasswordConfirm)) {
            errors.passwordConfirm = 'Confirm Password should contain symbols, numbers, and characters';
        } else if (Password !== PasswordConfirm) {
            errors.passwordConfirm = "Passwords do not match";
        } else {
            errors.passwordConfirm = null
        }

        return errors
    }

    const isStrongPassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        return passwordRegex.test(password);
    }



    // get info forget password
    const response = useSelector(state => state.AuthRed.ResetPassword)
    const Access = useSelector(state => state.AuthRed.Access)
    console.log('response :', response)
    console.log('Access :', Access)

    // handel submit
    const handelSubmit = async (e) => {
        setonPress(true)
        e.preventDefault()

        if (Access) {
            await setErrors(validateForm())

            if (PasswordConfirm && Password)
                setLoading(true)

            await dispatch(ResetPassword({
                'id': id,
                'password': Password,
                'passConfirm': PasswordConfirm
            }))

        } else {
            console.log("dont have access to this page")
            setTimeout(() => navigate(`/user/forget-password`), 1500)
        }



        setLoading(false)

    }


    useEffect(() => {
        if (!Loading) {
            if (response) {
                if (response.error) {
                    setErrors({ ...Errors, passwordConfirm: response.error })
                }
                if (response.message === 'Success') {
                    console.log('The password is changed')
                    setTimeout(() => navigate('/login'), 1500)
                }
            }
        }
    }, [Loading])



    return [Password, PasswordConfirm, Loading, Errors, onPasswordChange, onPasswordConfirmChange, handelSubmit]


}

export default ResetPasswordHook