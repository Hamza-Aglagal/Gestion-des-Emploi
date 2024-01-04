import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetGroupesActive } from '../../Redux/Actions/GroupeAction'


// import Swal from 'sweetalert2'


const GetAllGroupeshooks = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GetGroupesActive())
    }, [])

    // get data groupes
    const DataGroupes = useSelector(state => state.RedGroupe.GroupeActive)
    // console.log('DataGroupes :', DataGroupes)
    const GroupeEnligne = DataGroupes.groupes_en_ligne
    const GroupeHorsligne = DataGroupes.groupes_non_en_ligne




    const handelSubmit = async (e) => {
        e.preventDefault()

        // useEffect(() => {
        //     if (Loading === false) {
        //         setSelectedFile(null)
        //         setName('')
        //         setImg("https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg")
        //         setPrice('')
        //         setDesc('')
        //         setCategory('')
        //         setLoading(true)
        //         Swal.fire({
        //             position: 'buttom-end',
        //             icon: 'success',
        //             title: 'Product has been added',
        //             showConfirmButton: false,
        //             timer: 1500
        //         })
        //         // console.log('is finish....')
        //         setTimeout(() => setIspress(false), 1000)
        //     }
        // }, [Loading])



    }

    return [GroupeEnligne,GroupeHorsligne]


}

export default GetAllGroupeshooks