import React from 'react'
import { Container,Typography,CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <Container sx={{marginLeft:"45vw", marginTop:"40vh"}} >
    <CircularProgress color="primary" size={70}/>
    <Typography variant="h4" gutterBottom sx={{marginLeft:"-30px",marginTop:"2vw",color:"white",fontFamily:'"Quicksand", sans-serif'
  }}>
      Loading...
    </Typography>
  </Container>
  )
}
export default Loading;