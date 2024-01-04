import React, { useEffect, useState } from 'react'

// import CSS
import '../../assets/css/Cards/CardSallePopUp.css'
import { Box } from '@mui/material'


const CardSallesPopUp = ({item,setIdSalle,setNomSalle}) => {

    const [bg, setbg] = useState('')
    const [Shadow, setShadow] = useState(false)
    useEffect(() => {
      if (item.adresse === 'Gueliz') {
        setbg( '#3ecd5e');
      } else {
        setbg('#cd3e94')
      }
    }, [item])



    const handlClick = (item)=>{
        setIdSalle(item.id)
        setNomSalle(item.nom)
        setShadow(!Shadow)
    }
    


    return (

                <Box  onClick={()=> (handlClick(item)) } className={`ag-courses_item ${Shadow ? 'ag-courses-item_clicked' : ''} `} >
                    <div className="ag-courses-item_link">
                        <div className="ag-courses-item_bg" style={{backgroundColor: bg }}>.</div>
                        <div className="ag-courses-item_title">
                            {item.nom}
                        </div>

                        <div className="ag-courses-item_date-box">
                            <span className="ag-courses-item_date">
                            {item.adresse}
                            </span>
                        </div>
                    </div>
                </Box>

    )
}

export default CardSallesPopUp