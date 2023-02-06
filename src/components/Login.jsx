import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
{/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    <TextField label="Username" variant='outlined'/>
    <br/>
    <br />
    <TextField label="Password" type="password" variant='outlined'/> 
     <br />
     <br />
    <Button variant='contained'>LogIn</Button>
   </div>
  )
}

export default Login