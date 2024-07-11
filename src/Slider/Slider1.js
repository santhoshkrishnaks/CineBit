import React, { useEffect, useState } from 'react';
import './Slider.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useNavigate } from 'react-router-dom';
const Slider = (props) => {
  const len= window.innerWidth;
  const [page,setPage]=useState(5);
  useEffect(() => {
    if(len<=800){
      setPage(3);
    }
    else if(len<=1000){
      setPage(4);
    }
  }, [len]);
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
            perPage:page
            ,
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