import React from 'react';
import './Slider.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useNavigate } from 'react-router-dom';
const Slider = (props) => {
  const navigate=useNavigate();
  return (
    <div >
          <div className='p-headText'>
            <h2 className='titles'>{props.data}</h2>
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
        {props.arr.map((values,index)=>(
          <SplideSlide key={index}>
           <div className='card-img'>
            <img src={values.src} alt='1' onClick={()=>{
              navigate("/Page",{state:values.id})
              window.location.reload(false);
            }} /> 
          </div>
          </SplideSlide>))
        }
            </Splide>
        </div>
    </div>
  );
}

export default Slider;