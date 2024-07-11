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
  const latest=[{id:"12 th fail",src:"./Images/12thfail.jpg"},{id:"Hi Nanna",src:'./Images/hinanna.jpg'},{id:"Good Night",src:'./Images/goodnight.jpg'},{id:"LEO",src:'./Images/leo.jpg'},{id:"Ponniyin Selvan",src:'./Images/ponninselvan.jpg'},{id:"Jailer",src:'./Images/Jailer.jpg'},{id:"Viduthalai",src:'./Images/viduthalai.jpg'},{id:"Cadver",src:'./Images/cadver.jpg'},{id:"Jersy",src:'./Images/jersy.jpg'},{id:"Mad Max",src:'./Images/madmax.jpg'}];
  const top=[{id:"Interstellar",src:"./Images/intersellar.jpg"},{id:"Ip Man",src:'./Images/ipman.jpg'},{id:"Jai Bhim",src:'./Images/jaibhim.jpg'},{id:"Premam",src:'./Images/premam.jpg'},{id:"96",src:'./Images/96.jpg'},{id:"Spider Man",src:'./Images/spiderman.jpg'},{id:"Batman Begins",src:'./Images/Bat.jpg'},{id:"Train to Busan",src:'./Images/trainto.jpg'},{id:"Pairets of the caribbean",src:'./Images/pairets.jpg'},{id:"Thunivu",src:'./Images/thunivu.jpg'},{id:"GeoStrom",src:'./Images/Geostrom.jpg'}];
  const popular=[{id:"Avatar",src:"./Images/Avatar.jpg"},{id:"The Avengers",src:'./Images/Avenger.jpg'},{id:"The Martian",src:'./Images/martian.jpg'},{id:"M.S.Dhoni the untold story",src:'./Images/Ms.jpg'},{id:"Asuran",src:'./Images/Asuran.jpg'},{id:"Transformers",src:'./Images/Transform.jpg'},{id:"Jai Bhim",src:'./Images/jaibhim.jpg'},{id:"Rudra",src:'./Images/rudra.jpg'},{id:"The GodFather",src:'./Images/thegodfather.jpg'},{id:"I",src:'./Images/i.jpg'},{id:"The Dark knight",src:'./Images/thedarkknight.jpg'},{id:"Drishyam",src:'./Images/drishyam.jpg'},{id:"Soorarai Pottru",src:'../Images/sooraripottru.jpg'},{id:"V",src:'./Images/V.jpg'}];
  const kids=[{id:"Boss Baby",src:"./Images/Boss.jpg"},{id:"Zootopia",src:'./Images/Zootopia.jpg'},{id:"The Jungle Book",src:'./Images/thejunglebook.jpg'},{id:"Transformers",src:'./Images/Transform.jpg'},{id:"Toy Story",src:'../Images/ToyStroy.jpg'},{id:"Avatar",src:'./Images/Avatar.jpg'},{id:"The Avengers",src:'./Images/Avenger.jpg'},{id:"Tangled",src:'./Images/Tangled.jpg'},{id:"The Lion King",src:'./Images/Lion.jpg'}];
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