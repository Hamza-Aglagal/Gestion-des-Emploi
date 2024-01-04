import React, { useEffect, useState } from 'react'


const ProtectedRouteHook = () => {


    const [isAdmin, setisAdmin] = useState(false)
    const [isProf, setisProf] = useState(true)
    const [isStudent, setisStudent] = useState(false)


    const [userType, setuserType] = useState(JSON.parse(localStorage.getItem("userType")))

    console.log('userType : ', userType)

    useEffect(() => {
        if (userType !== '') {

            if (userType === "admin") {
                setisAdmin(true)
                setisProf(false)
                setisStudent(false)
            } 
             if (userType === "professeur") {
                setisAdmin(false)
                setisProf(true)
                setisStudent(false)
            }else{
                setisAdmin(false)
                setisProf(false)
                setisStudent(true)
            }


        } else {
            setisAdmin(false)
            setisProf(false)
            setisStudent(false)
        }
    }, [userType])



    return [isAdmin, isProf, isStudent]
}

export default ProtectedRouteHook