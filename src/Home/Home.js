import React, { useRef } from "react";
import './Home.css';
import { Rating } from '@mui/material';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Home = (props) => {
  const containerRef = useRef(null);
  return (
    <div>
    <NavBar/>
    <section className="T-container" id="about">
    <h1 className="W-title">Welcome {props.data}</h1>
    <br/>
    <br/>
      <h2 className="T-title" >Top Movies</h2>
      <br></br><br></br>
      <div className="T-content" ref={containerRef}>
        <div className="T-aboutItems">
          <li className="T-aboutItem">
            <div className="T-aboutItemText">
              <h3>The Avengers</h3>
              <br></br>
              <Rating name="half-rating-read" defaultValue={5} precision={.5} readOnly style={{ fontSize: '35px' }}/>
            </div>
          <div className="T-aboutPic">
            <br></br>
                <img src='https://i.pinimg.com/736x/ea/b7/bc/eab7bc257d227a0c2d0b145d9096d17b.jpg' alt="p1" width='250px' height='210px'/>
            </div>
          </li>
          <li className="T-aboutItem">
            <div className="T-aboutItemText">
              <h3>Brahmastra</h3>
              <br></br>
              <Rating name="half-rating-read" defaultValue={5} precision={1.5} readOnly style={{ fontSize: '35px' }}/>
            </div>
            <div className="T-aboutPic">
                <br></br>
                <img src='https://i.ytimg.com/vi/Nj7BouW-a7U/maxresdefault.jpg' alt="p1" width='250px' height='210px'/>
            </div>
          </li>
          <li className="T-aboutItem">
             <div className="T-aboutItemText">
               <h3>LEO</h3>
               <br></br>
               <Rating name="half-rating-read" defaultValue={5} precision={.5} readOnly style={{ fontSize: '35px' }}/>
             </div>
             <div className="T-aboutPic">
                <br></br>
                <img src='https://static.toiimg.com/thumb/imgsize-23456,msid-104576943,width-600,resizemode-4/104576943.jpg' alt="p1" width='260px' height='210px'/>
            </div>
           </li>
           <li className="T-aboutItem">
             <div className="T-aboutItemText">
               <h3>Baahubali-02</h3>
               <br></br>
               <Rating name="half-rating-read" defaultValue={5} precision={1.5} readOnly style={{ fontSize: '35px' }}/>
               
             </div>
             <div className="T-aboutPic">
                <br></br>
                <img src='https://data1.ibtimes.co.in/en/full/577002/baahubali.jpg?w=600' alt="p1" width='240px' height='210px'/>
            </div>
           </li>
           <li className="T-aboutItem">
            
            <div className="T-aboutItemText">
              <h3>Premam</h3>
              <br></br>
              <Rating name="half-rating-read" defaultValue={5} precision={1.2} readOnly style={{ fontSize: '35px' }}/>
        
            </div>
            <div className="T-aboutPic">
                <br></br>
                <img src='https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7206/1317206-h-17091d101e61' alt="p1" width='250px' height='210px'/>
            </div>
          </li>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Home;