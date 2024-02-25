import React from 'react'
import { Container,Typography,CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <Container sx={{marginLeft:"30vw", marginTop:"40vh"}} >
    <CircularProgress color="primary" size={70}/>
    <Typography variant="h4" gutterBottom sx={{marginTop:"2vw"}}>
      Loading...
    </Typography>
  </Container>
  )
}

export default Loading