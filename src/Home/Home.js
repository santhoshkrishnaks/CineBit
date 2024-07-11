import React, {useContext,useState,useEffect } from "react";
import './Home.css';
import Footer from "../Footer/Footer";
import Loading from "../LoadingPage/Loading";
import Create from "../Context/LoginContext";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from '../Home/Slider-data'
import Slider1 from "../Slider/Slider1";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const latest=["./Images/12thfail.jpg",'./Images/hinanna.jpg','./Images/goodnight.jpg','./Images/leo.jpg','./Images/ponninselvan.jpg','./Images/Jailer.jpg','./Images/viduthalai.jpg','./Images/cadver.jpg','./Images/jersy.jpg','./Images/madmax.jpg'];
  const top=["./Images/intersellar.jpg",'./Images/ipman.jpg','./Images/jaibhim.jpg','./Images/premam.jpg','./Images/96.jpg','./Images/spiderman.jpg','./Images/Bat.jpg','./Images/trainto.jpg','./Images/pairets.jpg','./Images/thunivu.jpg','./Images/Geostrom.jpg'];
  const popular=["./Images/Avatar.jpg",'./Images/Avenger.jpg','./Images/martian.jpg','./Images/Ms.jpg','./Images/Asuran.jpg','./Images/Transform.jpg','./Images/jaibhim.jpg','./Images/rudra.jpg','./Images/thegodfather.jpg','./Images/i.jpg','./Images/thedarkknight.jpg','./Images/drishyam.jpg','../Images/sooraripottru.jpg','./Images/V.jpg'];
  const kids=["./Images/Boss.jpg",'./Images/Zootopia.jpg','./Images/thejunglebook.jpg','./Images/Transform.jpg','../Images/ToyStroy.jpg','./Images/Avatar.jpg','./Images/Avenger.jpg','./Images/Tangled.jpg','./Images/Lion.jpg'];
  const {load,setLoad}=useContext(Create);
  const navigate=useNavigate();
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
            <img src={slide.image} onClick={()=>{
              navigate("/Page",{state:slide.id});

            }} alt="slide" className="image" />
            <div className="content">
              <h2 style={{color: "#fff", fontSize:"50px", fontStyle:"bold"}}>{slide.heading}</h2>
              <p style={{fontSize:"18px",fontStyle:"revert-layer"}}>{slide.desc}</p>
              <p style={{fontSize:"18px",fontStyle:"revert-layer"}}>{slide.subDesc}</p>
              <p style={{fontSize:"18px",fontStyle:"revert-layer"}}>{slide.subDesc1}</p>
              <hr />
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
 <div className="con">
  <Slider1 data="Latest Movies" arr={latest}/>
  <Slider1 data="Top Movies" arr={top}/>
  <Slider1 data="Most Popular Movies" arr={popular}/>
  <Slider1 data="Kids Movies" arr={kids}/>
  </div>
    <Footer/>
    </div>}
    </div>
  );
};

export default Home;