import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { FaFilm } from 'react-icons/fa';
import "./Aboutus.css";
const Aboutus = () => {
        return (
            <div>
            <NavBar/>
            <br/>
            <br/>
            <div className="container">
              <FaFilm className="icon" />
              <h1 className="heading"><u>About Us</u></h1>
              <p className="paragraph">Welcome to our movie review website! We are passionate about movies and love sharing our thoughts and opinions with fellow movie enthusiasts.</p>
              <p className="paragraph">Our mission is to provide insightful and honest reviews of the latest releases, classic films, and everything in between. Whether you're a casual moviegoer or a dedicated cinephile, we've got something for you.</p>
              <p className="paragraph">Feel free to explore our site, read our reviews, and join the conversation by leaving your own comments and ratings. We believe that discussing movies enriches the cinematic experience and fosters a sense of community among film lovers.</p>
              <p className="paragraph">Thank you for visiting us, and we hope you enjoy your time here!</p>
            </div>
            <Footer/>
            </div>
        );
      }

export default Aboutus