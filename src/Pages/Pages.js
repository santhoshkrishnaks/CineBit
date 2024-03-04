import React, { useState ,useContext,useEffect} from 'react';
import './Pages.css';
import Footer from '../Footer/Footer';
import {Dialog,DialogActions,DialogContent,DialogTitle} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Avatar, Grid, Rating } from '@mui/material';
import Loading from '../LoadingPage/Loading';
import Create from '../Context/LoginContext';
import Slider1 from '../Slider/Slider1';
import StarIcon from '@mui/icons-material/Star';
import UserReview from '../UserReview/UserReview';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Pages = () => {
  const location=useLocation();
  const popular=[{id:9,src:"./Images/Avatar.jpg"},{id:10,src:'./Images/Avenger.jpg'},{id:2,src:'./Images/martian.jpg'},{id:1,src:'./Images/Ms.jpg'},{id:3,src:'./Images/Asuran.jpg'},{id:8,src:'./Images/Transform.jpg'},{id:11,src:'./Images/jaibhim.jpg'},{id:23,src:'./Images/rudra.jpg'},{id:33,src:'./Images/thegodfather.jpg'},{id:39,src:'./Images/i.jpg'},{id:31,src:'./Images/thedarkknight.jpg'},{id:21,src:'./Images/drishyam.jpg'},{id:26,src:'../Images/sooraripottru.jpg'},{id:15,src:'./Images/V.jpg'}];

  const id=location.state;
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://apigenerator.dronahq.com/api/AgmE4vf7/data/${id}`);
        const data = response.data;
        setMovieData(data);
        console.log("================",data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [id]);
  const {load,setLoad}=useContext(Create);
  useEffect(() => {
    setLoad(true); // Simulate successful login
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, [])
  const [open,setOpen]=useState(false);
  const [rating,setRating]=useState(3);
  const [ratingp,setRatingp]=useState(0);
  const handlesubmit=()=>{
    if(ratingp>0){
      setRating(ratingp);
      setRatingp(0);
      setOpen(false);
    }
  }
  if (!movieData || load) {
    return <Loading />;
  }
  console.log("ertyuioijhgfdxcvbhnjk",movieData);
  return (
    <div>
    <div className="dynamic-page-header">
    <div className="dynamic-header-overlay">
    <div className="container w-container">
    <div className="header-content-block">
    <div className="header-thumbnail-image" style={{backgroundImage:`url(${movieData.poster})`}}>
    </div>
    <h1 className="header-title">{movieData.name}</h1>
    <div className="info-wrapper on-review-page">
    <div className="info-block mobile-full">
    <Rating name="read-only" precision={0.5}   emptyIcon={<StarIcon style={{opacity:"0.72",color:"grey" }} fontSize="inherit" />} value={rating}  readOnly />
    </div>
    <button className="info-block butt" onClick={()=>setOpen(true)}><center><StarOutlineIcon/></center>Rate</button>
    <div className="info-block">
    <img src="https://assets.website-files.com/59f5ab35fccfea0001f70443/5a0973aee1339f0001a7cebe_tag.svg" alt="" className="info-block-icon"/>
    <a href="/category/science-fiction" className="info-title-link">{movieData.genre}</a>
    </div>
    <div className="info-block">
    <img src="https://assets.website-files.com/59f5ab35fccfea0001f70443/5a0973abd092d00001df9c0e_clock.svg" alt="" className="info-block-icon"/>
    <div className="info-title">August 18, 2019</div>
    </div>
    <div >
    <Dialog open={open} fullWidth
     onClose={()=>setOpen(false)}>
    <DialogTitle sx={{justifyContent:'center',display:"flex",fontSize:"20px"}}>Rate This Movie</DialogTitle>
    <DialogContent sx={{justifyContent:'center',display:"flex"}}>
    <Rating
    size='large'
    name="simple-controlled"
    precision={0.5}
    value={ratingp}
    onChange={(event,value)=>{setRatingp(value)}}
    />
    </DialogContent>
    <DialogActions sx={{justifyContent:'center',display:"flex"}}>
    <button style={{color:'black', backgroundColor:'#FFA200 ',cursor:"pointer",border:"none",width:"60px",height:"40px",borderRadius: "7px"}} onClick={handlesubmit}>Rate</button>
    </DialogActions>
    </Dialog>
    </div>
    </div>
    <p className="header-short-description" style={{color:'white'}}>{movieData.description}
    </p>
    <div className="header-info-block" style={{color:'white'}}>
    <div className="header-info-item">
    <div className="header-info-title bold">Duration:</div>
    <div className="header-info-title">{movieData.duration}
    </div>
    </div>
    <div className="header-info-item">
    <div className="header-info-title bold">Director:</div>
    <div className="header-info-title">{movieData.director}
    </div>
    </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div >
      <h2 className='titlep'>Official Trailer</h2>
      <center><iframe width="55%" height="450" src={movieData.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>

      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <h2 className='titlep'>TOP CAST</h2>
    <div style={{width:"80vw",marginLeft:"auto"}} className='grid'>
    <Grid container spacing={10}  columns={{sm:12 ,xs:12 ,md:12}}>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"60px",width:"60px"}}></Avatar>
    <h3 className="cast">{movieData.c1}
    </h3>
    </Grid>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"60px",width:"60px"}}></Avatar>
    <h3 className="cast">{movieData.c2}
    </h3>
    </Grid>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"60px",width:"60px"}}></Avatar>
    <h3 className="cast">{movieData.c3}
    </h3>
    </Grid>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"60px",width:"60px"}}></Avatar>
    <h3 className="cast">{movieData.c4}
    </h3>
    </Grid>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"60px",width:"60px"}}></Avatar>
    <h3 className="cast">{movieData.c5}
    </h3>
    </Grid>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"60px",width:"60px"}}></Avatar>
    <h3 className="cast">{movieData.c6}
    </h3>
    </Grid>
    </Grid>
    </div>
    <UserReview r1={movieData.r1} r2={movieData.r2} r3={movieData.r3} r4={movieData.r4}/> 
    <div className='slid'>
    <Slider1 data="More Like This" arr={popular}/>
    </div>
    <Footer/>
    </div>
  )
}

export default Pages;