import React, { useRef, useContext,useState,useEffect } from "react";
import './Home.css';
import {Rating } from '@mui/material';
import Footer from "../Footer/Footer";
import Loading from "../LoadingPage/Loading";
import Create from "../Context/LoginContext";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { CiPlay1 } from "react-icons/ci";
import { sliderData } from '../Home/Slider-data'
import Button from '@mui/material/Button'
import Slider from "../Slider/Slider";
import Slider1 from "../Slider/Slider1";


const Home = () => {
  const {load,setLoad}=useContext(Create);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, [])
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }

    return () => {
      clearInterval(slideInterval);
    };
  }, [autoScroll, currentSlide]);


  
  return (
    <div>
    {load?<Loading/>:
    <div>
    <div className="slider">
    <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
    <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
    {sliderData.map((slide, index) => (
      <div
        className={index === currentSlide ? "slide current" : "slide"}
        key={index}
      >
        {index === currentSlide && (
          <div>
            <img src={slide.image} alt="slide" className="image" />
            <div className="content">
              <h2 style={{color: "#fff", fontSize:"50px", fontStyle:"bold"}}>{slide.heading}</h2>
              <p style={{fontSize:"18px",fontStyle:"revert-layer"}}>{slide.desc}</p>
              <p style={{fontSize:"18px",fontStyle:"revert-layer"}}>{slide.subDesc}</p>
              <p style={{fontSize:"18px",fontStyle:"revert-layer"}}>{slide.subDesc1}</p>
              <hr />
              <Button variant="contained" className="button1"><CiPlay1 />Watch Now</Button>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
  <br></br>
  <br></br>
  <Slider data="Latest Movies"/>
  <Slider1 data="Top Movies"/>
    <Footer/>
    </div>}
    </div>
  );
};

export default Home;