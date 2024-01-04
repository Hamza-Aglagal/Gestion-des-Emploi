import React, { useEffect, useState } from 'react'
import { ForgetPassword } from '../../Redux/Actions/AuthAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ForgetPasswordHook = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [Email, setEmail] = useState()
    const [Errors, setErrors] = useState({
        email: ''
    })
    const [Loading, setLoading] = useState(false)
    const [onPress, setonPress] = useState(false)

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    // function validation
    const validateForm = () => {
        // Validate Email
        if (!Email) {
            Errors.email = 'Please enter your email';
        } else if (!isValidEmail(Email)) {
            Errors.email = 'Please enter a valid email address';
        } else {
            Errors.email = null
        }

    }

    const isValidEmail = (email) => {
        // Basic email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

     // get info forget password
    const res = useSelector(state => state.AuthRed.ForgetPassword)
    console.log('res :', res)

    // on submit 
    const handelSubmit = async (e) => {
        e.preventDefault()
        setonPress(true)
        await validateForm()

        setLoading(true)
        await dispatch(ForgetPassword({
            'email': Email
        }))
        setLoading(false)
    }

    useEffect(() => {
        if(!Loading && onPress){
            if(res){
                if(res.error){
                    setErrors({ ...Errors, email: res.error })
                }
                if(res.message === 'Success'){
                    console.log('The code has been sent')
                    setTimeout(()=> navigate('/user/verify-code'),1500 )
                }
            }
        }
    }, [Loading])
    



    return [Email, onEmailChange, Errors, handelSubmit,Loading]
}

export default ForgetPasswordHook