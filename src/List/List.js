import React, { useContext, useEffect } from 'react'
import "./List.css"
import Star from './Star.js'
import Footer from '../Footer/Footer.js'
import Create from '../Context/LoginContext.js'
import Loading from '../LoadingPage/Loading.js'
const List = () => {  
    const {load,setLoad}=useContext(Create);
    useEffect(() => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 500);
    }, []) 
  return (
    <div>{load?<Loading/>:
    <div>
    <br/>
    <br/>
    <br/>
                <div  id="music-playlist-titles">
                    <div    id="most-popular">
                        <h2>Top 10 Movies</h2>
                        <p>As rated by regular CineBite voters.</p>
                    </div>
                </div>


                <div    id="primary-second-section">

                    <div    id="most-popular-section">
                        <div    class="most-popular-items">
                            <div class="music-icon-section"  > 
                                <p>01</p>
                                <img src="../Images/Asuran.jpg" alt="starboy"></img>
                               </div>
                               <div className='form'>
                                <h3 id='run'>Asuran</h3>
                                <div className='form1'>
                                <Star  /></div>
                            </div>
                      
                            
                            
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                                <p>02</p>
                                <img src="../Images/Ms.jpg" alt="starboy"></img>
                                </div>
                                <div className='form'>
                                <h3 ><u>M.S.Dhoni</u></h3>
                                <div className='form1'>
                                <Star  /></div>
                            </div>
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                                <p>03</p>
                                <img src="../Images/Jailer.jpg" alt="starboy"></img>
                                </div>
                                <div className='form'>
                                <h3><u>Jailer</u></h3>
                                <div className='form1'>
                                <Star/></div>
                            </div>
                         
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                                <p>04</p>
                                <img src="../Images/Leo.jpg" alt="starboy"></img>
                                </div>
                                <div className='form'>
                                <h3><u>Leo</u></h3>
                                <div className='form1'>
                                <Star /></div>
                            </div>
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                                <p>05</p>
                                <img src="../Images/Thunivu.jpg" alt="starboy"></img>
                                </div>
                                <div className='form'>
                                <h3><u>Thunivu</u></h3>
                                <div className='form1'>
                                <Star  /></div>
                            </div>
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                                <p>06</p>
                                <img src="../Images/Bat.jpg" alt="starboy"></img>
                                </div>
                                <div className='form'>
                                <h3><u>BatMan</u></h3>
                                <div className='form1'>
                                <Star /></div>
                            </div>
                        </div>
                    </div>
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
