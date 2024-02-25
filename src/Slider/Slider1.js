import React from 'react';
import './Slider.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useNavigate } from 'react-router-dom';
const Slider = (props) => {
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
            <img src='./Images/Avatar.jpg' alt='1' /> 
          </div>
          </SplideSlide>
          <SplideSlide>

           <div className='card-img'>
            <img src='./Images/Avenger.jpg' alt='2' /> 
          </div>
          </SplideSlide>
          <SplideSlide>

           <div className='card-img'>
            <img src='./Images/jaibhim.jpg' alt='loreal_brand'/> 
          </div>
          </SplideSlide>
          <SplideSlide>

           <div className='card-img'>
            <img src='./Images/intersellar.jpg' alt='loreal_brand' /> 
          </div>
          </SplideSlide>
          <SplideSlide>

           <div className='card-img'>
            <img src='./Images/Tangled.jpg'alt='loreal_brand' /> 
          </div>
          </SplideSlide>
          <SplideSlide>

           <div className='card-img'>
            <img src='./Images/ToyStroy.jpg'alt='loreal_brand'/> 
            </div>
          </SplideSlide>
          <SplideSlide>

            <div className='card-img'>
            <img src='./Images/V.jpg'alt='loreal_brand' /> 
          </div>
          </SplideSlide>
          <SplideSlide>

          <div className='card-img'>
            <img src='./Images/Geostrom.jpg'alt='loreal_brand' /> 
              </div>
          </SplideSlide>
          
            </Splide>
        </div>
    </div>
  );
}

export default Slider;