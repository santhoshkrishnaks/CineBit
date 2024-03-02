import React, { useContext } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Container, Grid, Typography, Button, Link, Box } from '@mui/material';
import './Footer.css';
import Create from '../Context/LoginContext';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const { login, setLogin } = useContext(Create);
  const navigate=useNavigate();

  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <div className="widgetf">
              <img src="../Images/LogoCB1.png" style={{cursor:'pointer'}} onClick={()=>{navigate("/Home");window.location.reload(false);}} alt="logo" />
              <Typography variant="body2" sx={{marginTop:"10px",color:"white"}}>
                We are a passionate community dedicated to providing insightful and unbiased reviews for movie enthusiasts worldwide.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="widgetf">
              <Typography variant="h5" className="widgetTitlef">Quick Links</Typography>
              <ul className="thumbnailWidgetf">
                <li><Link href="/Login" color="inherit">Get Started</Link></li>
                <li><Link href="/Home" color="inherit">Home</Link></li>
                <li><Link href="/AboutUs" color="inherit">AboutUs</Link></li>
              </ul>
            </div>
          </Grid>
          {!login && (
            <Grid item xs={12} sm={6} md={3}>
              <div className="widgetf">
                <Typography variant="h5" className="widgetTitlef">Get Started</Typography>
                <Typography variant="body2" sx={{marginTop:"10px", color:"white"}}>
                  Get access to your full Training and Marketing Suite.
                </Typography>
                <Button variant="contained" className="btnf" sx={{marginTop:"10px"}}href="/SignUp">
                  Sign Up
                </Button>
              </div>
            </Grid>
          )}
          <Grid item xs={12} sm={6} md={3}>
            <div className='widgetf'>
              <Typography variant="h5" className="widgetTitlef">Contact Us</Typography>
              <Typography variant="body2" sx={{marginTop:"10px",color:"white"}}>
                <Link href="https://mail.google.com/mail/u/0/#inbox" color="inherit">uiteam@gmail.com</Link>
              </Typography>
              <Box display="flex" className="iconssf">
                <Link href="https://www.youtube.com/c/CineBitesLtd" target="_blank">
                  <FaYoutube size="30px"/>
                </Link>
                <Link href="https://www.facebook.com/Cinemachabao/" target="_blank">
                  <FaFacebook size="30px"/>
                </Link>
                <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2FCineBites" target="_blank">
                  <FaTwitter size="30px"/>
                </Link>
                <Link href="https://www.instagram.com/cine_biteexplanations/" target="_blank">
                 <FaInstagram size="30px"/>
                </Link>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Box className='footerCopyrightf' textAlign="center">
        <Typography variant="body2" sx={{color:'white'}}>
          Copyright UI Team © {new Date().getFullYear()}. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;
