import React from 'react'
import { Typography, Box } from '@mui/material'

const Home = () => {
  return (
    <Box mt={4}>
        <Typography variant='h4' gutterBottom>
            Home Page
        </Typography>

        <Typography variant='body1' gutterBottom>
            Welcome to the Home Page
        </Typography>
    </Box>
  )
}

export default Home;