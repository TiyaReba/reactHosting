import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const CouterApp = () => {
    var [incBtn,setincBtn] = useState(0);
    const incButton =()=>{
        setincBtn(++incBtn)
    }
    const decButton = ()=>{
        setincBtn(incBtn-1)

    }
  return (
    <div>
        <Typography variant='h4'>{incBtn}</Typography>
        <Button color='success' variant='contained'onClick={incButton}>+</Button>
        <Button color='error' variant='contained' onClick={decButton}>-</Button>
    </div>
  )
}

export default CouterApp