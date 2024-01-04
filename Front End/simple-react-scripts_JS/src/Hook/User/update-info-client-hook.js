import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../../Redux/Actions/ProductAction'
import { getAllCategory } from '../../Redux/Actions/categoryAction'
import { updateUser } from '../../Redux/Actions/AuthAction'
import Swal from 'sweetalert2'



const UpdateClientInfo = () => {

    const dispatch = useDispatch()

    // get dat user in localStorage 
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")))
    // console.log('userData', userData)






    const [firstname, setfirstname] = useState(userData.firstname)
    const [lastname, setlastname] = useState(userData.lastname)
    const [phone, setphone] = useState(userData.phone)
    const [street, setstreet] = useState(userData.street)
    const [BuildingNum, setBuildingNum] = useState(userData.BuildingNum)
    const [city, setcity] = useState(userData.city)
    const [zipcode, setzipcode] = useState(userData.zipcode)
    const [email, setemail] = useState(userData.email)
    const [img, setImg] = useState(userData.img ? (`http://127.0.0.1:8000/client/${userData.img}`) : "https://bootdey.com/img/Content/avatar/avatar7.png")
    const [SelectedFile, setSelectedFile] = useState('')

    const [UserUpdate, setUserUpdate] = useState({})

    const [Loading, setLoading] = useState(true)
    const [ButtonSubmit, setButtonSubmit] = useState('Update')
    const [OnDisable, setOnDisable] = useState(true)
    const [Ispress, setIspress] = useState(false)


    const onImgChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }
    }
    const onFirstNameChange = (e) => {
        e.persist()
        setfirstname(e.target.value)
    }
    const onLastNameChange = (e) => {
        e.persist()
        setlastname(e.target.value)
    }
    const onPhoneChange = (e) => {
        e.persist()
        setphone(e.target.value)
    }
    const onStreetChange = (e) => {
        e.persist()
        setstreet(e.target.value)
    }
    const onBuildingNumChange = (e) => {
        e.persist()
        setBuildingNum(e.target.value)
    }
    const onCityChange = (e) => {
        e.persist()
        setcity(e.target.value)
    }
    const onZipCodeChange = (e) => {
        e.persist()
        setzipcode(e.target.value)
    }
    const onEmailChange = (e) => {
        e.persist()
        setemail(e.target.value)
    }

    const Validation = () => {
        let Info = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            street: "",
            BuildingNum: "",
            city: "",
            zipcode: "",
            img: "",
        }
        if (firstname) {
            Info.firstname = firstname
        }
        if (lastname) {
            Info.lastname = lastname
        }
        if (phone) {
            Info.phone = phone
        }
        if (street) {
            Info.street = street
        }
        if (BuildingNum) {
            Info.BuildingNum = BuildingNum
        }
        if (city) {
            Info.city = city
        }
        if (zipcode) {
            Info.zipcode = zipcode
        }
        if (email) {
            Info.email = email
        }
        if (SelectedFile) {
            Info.img = SelectedFile
        }

        return Info
    }

    const isValidEmail = (email) => {
        // Basic email validation using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    const handelSubmit = async (e) => {
        e.preventDefault()
        // console.log('btn :', ButtonSubmit)
        setButtonSubmit(prev => prev === 'Update' ? 'Save' : 'Update')
        setOnDisable(prev => !prev)

        if (ButtonSubmit === 'Save') {
            // console.log('is saved ..')
            const USER_INFO = await Validation()
            setLoading(true)
            await dispatch(updateUser(USER_INFO, userData.id))
            setLoading(false)
        }

    }


    // get Info User Updated 
    const UserInfoUpdated = useSelector(state => state.AuthRed.UpdateClient)
    console.log('UserInfoUpdated', UserInfoUpdated)


    useEffect(() => {
        if (Loading === false) {
            if (UserInfoUpdated) {
                if (UserInfoUpdated.message === "successfully updated") {
                    // console.log('is Updated....')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'is Updated....',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    localStorage.setItem('user', JSON.stringify(UserInfoUpdated.data))
                    // if (UserInfoUpdated.data.zipcode && UserInfoUpdated.data.city && UserInfoUpdated.data.street && UserInfoUpdated.data.BuildingNum)
                    // localStorage.setItem('Adresse', [(UserInfoUpdated.data.zipcode + ' / ' + UserInfoUpdated.data.city + ' / ' + UserInfoUpdated.data.street + ' / ' + UserInfoUpdated.data.BuildingNum)])
                }
            }

            // setTimeout(() => setIspress(false), 1000)
        }
    }, [Loading])



    return [firstname, lastname, phone, street, BuildingNum, city, zipcode, email, img, Loading, userData, OnDisable, ButtonSubmit,
        onImgChange, onFirstNameChange, onLastNameChange, onPhoneChange, onStreetChange, onBuildingNumChange, onCityChange, onZipCodeChange, onEmailChange,
        handelSubmit]



}

export default UpdateClientInfo