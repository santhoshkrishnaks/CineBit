import React, { useContext } from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Container, Grid, Typography, Button, Link, Box } from '@mui/material';
import './Footer.css';
import Create from '../Context/LoginContext';
const Footer = () => {
  const {login,setLogin}=useContext(Create);
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <div className="widget">
              <img src="../Images/LogoCB1.png" alt="logo" />
              <Typography variant="body2">
              We are a passionate community dedicated to providing insightful and unbiased reviews for movie enthusiasts worldwide.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="widget">
              <Typography variant="h5" className="widgetTitle">Quick Links</Typography>
              <ul className="thumbnailWidget">
                <li><Link href="/Login" color="inherit">Get Started</Link></li>
                <li><Link href="/Home" color="inherit">Home</Link></li>
                <li><Link href="Page" color="inherit">Latest Movies</Link></li>
                <li><Link href="/AboutUs" color="inherit">AboutUs</Link></li>
              </ul>
            </div>
          </Grid>
        {!login&&<Grid item xs={12} sm={6} md={3}>
          <div className="widget">
            <Typography variant="h5" className="widgetTitle">Get Started</Typography>
            <Typography variant="body2">
              Get access to your full Training and Marketing Suite.
            </Typography>
            <Button variant="contained" className="btn" href="/SignUp">
              Sign Up
            </Button>
          </div>
        </Grid>}
          <Grid item xs={12} sm={6} md={3}>
            <div className='widget'>
              <Typography variant="h5" className="widgetTitle">Contact Us</Typography>
              <Typography variant="body2">
                <Link href="mailto:info@domain.com" color="inherit">info@domain.com</Link>
              </Typography>
              <Box display="flex" classname="iconss">
                <Link href="https://bit.ly/3m9avif" target="_blank">
                  <FaYoutube size="30px"/>
                </Link>
                <Link href="https://www.facebook.com/" target="_blank">
                  <FaFacebook size="30px"/>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <FaTwitter size="30px"/>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                 <FaInstagram size="30px"/>
                </Link>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Box className='footerCopyright' textAlign="center">
        <Typography variant="body2">
          Copyright UI Team © {new Date().getFullYear()}. All rights reserved.
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer