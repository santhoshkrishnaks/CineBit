import React, { useContext, useEffect } from 'react'
import "./List.css"
import Star from './Star.js'
import Footer from '../Footer/Footer.js'
import Create from '../Context/LoginContext.js'
import Loading from '../LoadingPage/Loading.js'
import { useLocation, useNavigate } from 'react-router-dom'
const List = () => {  
    const {load,setLoad}=useContext(Create);
    const location=useLocation();
    const data=location.state.arr;
    useEffect(() => {
        
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 500);
    }, []) 
    const navigate=useNavigate();
  return (
    <div>{
        load?<Loading/>:
    <div>
    <br/>
    <br/>
    <br/>
                <div  id="music-playlist-titles">
                    <div    id="most-popular">
                        <h2 className='titlel'>{location.state.s1}</h2>
                        <p className='par'>As rated by regular CineBit voters</p>
                    </div>
                </div>
                <div    id="primary-second-section">
                {data.map((value,index)=>(
                    <div    id="most-popular-section">
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                                <img src={value.src}  onClick={()=>{navigate("/Page",{state:value.id})}} alt="starboy"></img>
                               </div>
                               <div className='form'>
                                <h3 id='run' onClick={()=>{navigate("/Page",{state:value.id})}}>{value.id}</h3>
                                <div className='form1'>
                                <Star/></div>
                            </div>
                        </div>
                        </div>))
                }
    </div>
    <br/>
    <br/>
    <br/>
    <Footer/>
</div>}
    </div>
  )
}
export default List;
