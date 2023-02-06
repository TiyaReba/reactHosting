import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import App from '../App'

const Navbar = () => {
  return (
    <div>
        <Box sx ={{ flexGrow:1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                            NEWS
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>

    </div>
  )
}

export default Navbar