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
  const latest=[{id:35,src:"./Images/12thfail.jpg"},{id:25,src:'./Images/hinanna.jpg'},{id:28,src:'./Images/goodnight.jpg'},{id:5,src:'./Images/leo.jpg'},{id:42,src:'./Images/ponninselvan.jpg'},{id:4,src:'./Images/Jailer.jpg'},{id:24,src:'./Images/viduthalai.jpg'},{id:22,src:'./Images/cadver.jpg'},{id:34,src:'./Images/jersy.jpg'},{id:36,src:'./Images/madmax.jpg'}];
  const top=[{id:12,src:"./Images/intersellar.jpg"},{id:27,src:'./Images/ipman.jpg'},{id:11,src:'./Images/jaibhim.jpg'},{id:32,src:'./Images/premam.jpg'},{id:30,src:'./Images/96.jpg'},{id:37,src:'./Images/spiderman.jpg'},{id:19,src:'./Images/Bat.jpg'},{id:18,src:'./Images/trainto.jpg'},{id:29,src:'./Images/pairets.jpg'},{id:6,src:'./Images/thunivu.jpg'},{id:16,src:'./Images/Geostrom.jpg'}];
  const popular=[{id:9,src:"./Images/Avatar.jpg"},{id:10,src:'./Images/Avenger.jpg'},{id:2,src:'./Images/martian.jpg'},{id:1,src:'./Images/Ms.jpg'},{id:3,src:'./Images/Asuran.jpg'},{id:8,src:'./Images/Transform.jpg'},{id:11,src:'./Images/jaibhim.jpg'},{id:23,src:'./Images/rudra.jpg'},{id:33,src:'./Images/thegodfather.jpg'},{id:39,src:'./Images/i.jpg'},{id:31,src:'./Images/thedarkknight.jpg'},{id:21,src:'./Images/drishyam.jpg'},{id:26,src:'../Images/sooraripottru.jpg'},{id:15,src:'./Images/V.jpg'}];
  const kids=[{id:20,src:"./Images/Boss.jpg"},{id:7,src:'./Images/Zootopia.jpg'},{id:38,src:'./Images/thejunglebook.jpg'},{id:8,src:'./Images/Transform.jpg'},{id:14,src:'../Images/ToyStroy.jpg'},{id:9,src:'./Images/Avatar.jpg'},{id:10,src:'./Images/Avenger.jpg'},{id:13,src:'./Images/Tangled.jpg'},{id:17,src:'./Images/Lion.jpg'}];
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