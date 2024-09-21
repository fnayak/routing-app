import React from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Box } from '@mui/material'

const User = () => {
    const { id } = useParams();
  return (
   <Box mt={4}>
        <Typography variant='h4' gutterBottom>
            User Page
        </Typography>

        <Typography variant='body1' gutterBottom>
           Viewing user with ID {id}
        </Typography>
   </Box>
  )
}

export default User;