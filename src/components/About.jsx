import React from 'react'
import { Typography, Box } from '@mui/material'

const About = () => {
    return (
        <Box mt={4}>
            <Typography variant='h4' gutterBottom>
                About Page
            </Typography>
    
            <Typography variant='body1' gutterBottom>
                This is the about page
            </Typography>
        </Box>
      )
}

export default About;