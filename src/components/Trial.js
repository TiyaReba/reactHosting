
import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
const Trial = () => {
    var [pageName,setpageName]= useState("Home Page");
    const changeHomeName =()=>{
        setpageName("Home Page")
    }
    const changeName =()=>{
        setpageName("Gallary Page")
    }
    const changeContName =()=>{
        setpageName("Contact Page")
    }
    useEffect(()=>{
        changeContName();
        console.log("page reloding")
    },[])
  return (
    <div>
        <Button variant='contained' color='primary'onClick={changeHomeName}>Home Page</Button>
        <Button variant='contained' color='secondary' onClick={changeName}>Gallery Page</Button>
        <Button variant='contained' color='success'onClick={changeContName}>Contact Page</Button>
        <Typography variant='h5'>Welcome to {pageName}</Typography>
    </div>
  )
}

export default Trial