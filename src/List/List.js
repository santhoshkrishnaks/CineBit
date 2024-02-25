import React from 'react'
import "./List.css"
import Star from './Star.js'
import Footer from '../Footer/Footer.js'
const List = () => {  
  return (
    <div>
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
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_e4QlKWZJo1ws92ubgCVCFHuNWPzWQX8zjVU3NXaT-cVurJB7Rkmci912tO536qN-n0&usqp=CAU" alt="starboy"></img>
                               </div>
                               <div className='form'>
                                <h3 id='run'>MovieName</h3>
                                <div className='form1'>
                                <Star  /></div>
                            </div>
                      
                            
                            
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                                <p>02</p>
                                <img src="https://png.pngtree.com/background/20230618/original/pngtree-visualizing-melodies-3d-rendered-musical-notes-picture-image_3754945.jpg" alt="starboy"></img>
                                </div>
                                <div className='form'>
                                <h3><u>MovieName</u></h3>
                                <div className='form1'>
                                <Star  /></div>
                            </div>
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                                <p>03</p>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4sg23LB7t3KokSnJeIhYcTnJUoeHet4NAs-Tl8ZfvkWJK9j56Q6wEiAmQwVj9IJx_P3E&usqp=CAU" alt="starboy"></img>
                                </div>
                                <div className='form'>
                                <h3><u>MovieName</u></h3>
                                <div className='form1'>
                                <Star/></div>
                            </div>
                         
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                                <p>04</p>
                                <img src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/271803824/original/b258fd131f08100455ca6c22bcb9a3e0ddaa0194.jpg" alt="starboy"></img>
                                </div>
                                <div className='form'>
                                <h3><u>MovieName</u></h3>
                                <div className='form1'>
                                <Star /></div>
                            </div>
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                                <p>05</p>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PNzMHgMZ7CAJtiRj8Ep_sq77zKB_rDZgsuX5GdzfY1S94CMHMT2xPjgMVXGQm1lllnk&usqp=CAU" alt="starboy"></img>
                                </div>
                                <div className='form'>
                                <h3><u>MovieName</u></h3>
                                <div className='form1'>
                                <Star  /></div>
                            </div>
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                                <p>06</p>
                                <img src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg" alt="starboy"></img>
                                </div>
                                <div className='form'>
                                <h3><u>MovieName</u></h3>
                                <div className='form1'>
                                <Star /></div>
                            </div>
                        </div>
                    </div>
    </div>
    <Footer/>
    </div>
  )
}
export default List;