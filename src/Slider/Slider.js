import React from 'react';
import './Slider.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useNavigate } from 'react-router-dom';
const Slider = (props) => {
    const navigate=useNavigate();
    const dhoni=()=>{
        navigate("/Dhoni");
    }
    const page=()=>{
        navigate("/Page");
    }
    const asuran=()=>{
        navigate("/Asuran")
    }
    const jailer=()=>{
        navigate("/Jailer");
    }
    const leo=()=>{
        navigate("/Leo")
    }
    const transform=()=>{
        navigate("/Transformer")
    }
    const thunivu=()=>{
        navigate("/Thunivu")
    }
    const zootopia=()=>{
        navigate("/Zootopia")
    }
  return (
    <div >
          <div className='p-headText'>
            <h2>{props.data}</h2>
          </div>
        <div className='p-container'> 
        <Splide
          options={{
            type: 'slide',
            perPage: 5,
            perMove: 1,
            pagination: false,
            arrows: true,
          }}
        >
          <SplideSlide>

           <div className='card-img'>
            <img src='./Images/Ms.jpg'alt='1' onClick={dhoni}/> 
          </div>
          </SplideSlide>
          <SplideSlide>

           <div className='card-img'>
            <img src='./Images/martian.jpg'alt='2' onClick={page}/> 
          </div>
          </SplideSlide>
          <SplideSlide>

           <div className='card-img'>
            <img src='./Images/Asuran.jpg'alt='loreal_brand' onClick={asuran}/> 
          </div>
          </SplideSlide>
          <SplideSlide>

           <div className='card-img'>
            <img src='./Images/Jailer.jpg'alt='loreal_brand' onClick={jailer}/> 
          </div>
          </SplideSlide>
          <SplideSlide>

           <div className='card-img'>
            <img src='./Images/Leo.jpg'alt='loreal_brand' onClick={leo}/> 
          </div>
          </SplideSlide>
          <SplideSlide>

           <div className='card-img'>
            <img src='./Images/Thunivu.jpg'alt='loreal_brand' onClick={thunivu}/> 
            </div>
          </SplideSlide>
          <SplideSlide>

            <div className='card-img'>
            <img src='./Images/Zootopia.jpg'alt='loreal_brand' onClick={zootopia}/> 
          </div>
          </SplideSlide>
          <SplideSlide>

          <div className='card-img'>
            <img src='./Images/Transform.jpg'alt='loreal_brand' onClick={transform}/> 
              </div>
          </SplideSlide>
          <SplideSlide>

              <div className='card-img'>
              <img src='./Images/Lion.jpg'alt='loreal_brand'/> 
            </div>          
          </SplideSlide>
          
            </Splide>
        </div>
    </div>
  );
}

export default Slider;