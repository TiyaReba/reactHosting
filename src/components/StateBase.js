import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBase = () => {
    // useStae
    var[pName,setpName]= useState("Meera");
    const changeName =()=>{
        setpName("Tiya")

    }
  return (
    <div>
        <Typography variant='h4'>Welcome {pName}</Typography>
        <Button color='secondary' variant='contained' onClick={changeName}>Change Name</Button>
    </div>
  )
}

export default StateBase