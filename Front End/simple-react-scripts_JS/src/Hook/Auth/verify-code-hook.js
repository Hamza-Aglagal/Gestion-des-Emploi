import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { VerifyCode } from '../../Redux/Actions/AuthAction'

const VerifyCodeHook = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [Code, setCode] = useState()
    const [Errors, setErrors] = useState('')
    const [Loading, setLoading] = useState(false)
    const [onPress, setonPress] = useState(false)

    const onCodeChange = (e) => {
        setCode(e.target.value)
    }

    // function validation
    const validateForm = () => {
        const regex = /^[0-9]{6}$/;
        // Validate code
        if (!Code) {
            setErrors('Please enter the code')
        } else if (!regex.test(Code)) {
            setErrors('Please enter a 6-digit number.');
        }else{
            setErrors(null)
        }   
    }

    // get info forget password
    const res = useSelector(state => state.AuthRed.VerifyCode)
    console.log('res :', res)

    // on submit 
    const handelSubmit = async (e) => {
        e.preventDefault()
        setonPress(true)
        await validateForm()

        setLoading(true)
        await dispatch(VerifyCode({
            'code': Code
        }))
        setLoading(false)
    }

    useEffect(() => {
        if (!Loading && onPress) {
            if (res) {
                if (res.error) {
                    setErrors(res.error)
                }
                if (res.message === 'Success') {
                    console.log('The code valid')
                    setTimeout(() => navigate(`/user/reset-password/${res.id}`), 1500)
                }
            }
        }
    }, [Loading])




    return [Code, onCodeChange, Errors, handelSubmit, Loading]

}

export default VerifyCodeHook