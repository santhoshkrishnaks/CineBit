import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGooglePlus, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import './Footer.css';
const Footer = () => {
  return (
    <footer>
    <div className='footerC'>
    <div className='Icon'>
    <a href=''><FaGooglePlus className='i'></FaGooglePlus></a>
    <a href=''><FaFacebook className='i'></FaFacebook></a>
    <a href=''><FaInstagram className='i'></FaInstagram></a>
    <a href=''><FaYoutube className='i'></FaYoutube></a>
    <a href=''><FaTwitter className='i'></FaTwitter></a>
    </div>
    <div className='footerN'>
    <ul>
    <li><Link to="/Home">Home</Link></li>
    <li><Link to="/AboutUs">AboutUs</Link></li>
    </ul>
    </div>
    <div className='footerB'>
    <p>Copyright &copy;2024; Designed by <span class="designer">UI-Team</span></p>
    </div>
    </div>
    </footer>
  )
}

export default Footer