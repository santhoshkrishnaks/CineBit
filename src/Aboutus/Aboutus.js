import React, { useContext, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { FaFilm } from 'react-icons/fa';
import "./Aboutus.css";
import Loading from '../LoadingPage/Loading';
import Create from '../Context/LoginContext';
const Aboutus = () => {
  const {load,setLoad}=useContext(Create);
  useEffect(() => {
    setLoad(true); // Simulate successful login
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, [])
  
 
        return (
          <div>
          {load?<Loading/>:
            <div>
            <br/>
            <br/>
            <div className="container1">
              <FaFilm className="icon" />
              <h1 className="heading">About Us</h1>
              <p className="paragraph">Welcome to CineBite

              At CineBite, we're passionate about movies and dedicated to providing you with the best resources for discovering, enjoying, and discussing films of all genres. Whether you're a seasoned cinephile or a casual movie buff, our platform is designed to enhance your movie-watching experience and connect you with a community of fellow film enthusiasts.</p>
              
              <h1 className='heading'>Our Mission</h1>
              
              <p className='paragraph'>Our mission at CineBite is simple: to be your ultimate destination for everything related to movies. We strive to offer comprehensive and insightful reviews, curated recommendations, and engaging content that celebrates the art of cinema in all its diversity and richness. We're committed to fostering a welcoming and inclusive community where everyone can share their love for movies and engage in meaningful discussions.</p>
              
              <h1 className='heading'>Meet the Team</h1>
              
              <p className='paragraph'>Behind CineBite is a team of passionate movie lovers who are dedicated to bringing you the best content possible. From seasoned film critics to avid moviegoers, each member of our team brings a unique perspective and expertise to our platform. Get to know the faces behind the reviews and learn more about what drives our love for movies.</p>
              
              <h1 className='heading'>Join Our Community</h1>
              
              <p className='paragraph'>We invite you to join our community of movie enthusiasts! Whether you're looking for recommendations, want to share your own reviews, or simply want to connect with fellow movie lovers, there's a place for you here at CineBite. Follow us on social media, subscribe to our newsletter, and join the conversation on our forums to stay up-to-date with the latest news, reviews, and discussions.
              
              Thank you for being a part of the CineBite community. Happy movie watching!</p>
            </div>
            <Footer/>
            </div>
          }
            </div>
        );
      }

export default Aboutus