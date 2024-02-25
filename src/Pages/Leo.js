import React, { useState ,useContext,useEffect} from 'react';
import './Pages.css';
import Footer from '../Footer/Footer';
import {Dialog,DialogActions,DialogContent,DialogTitle} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Avatar, Grid, Rating } from '@mui/material';
import Loading from '../LoadingPage/Loading';
import Create from '../Context/LoginContext';
import Slider from '../Slider/Slider';
import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';
import { useLocation } from 'react-router-dom';
const Leo = () => {
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
  const [but,setBut]=useState(false);
  const handlesubmit=()=>{
    if(ratingp>0){
      setRating(ratingp);
      setRatingp(0);
      setOpen(false);
    }
  }
  return (
    <div>
    {load?<Loading/>:
    <div>
    <div className="dynamic-page-header">
    <div className="dynamic-header-overlay">
    <div className="container w-container">
    <div className="header-content-block">
    <div className="header-thumbnail-image" style={{backgroundImage:`url('../Images/Leo.jpg')`}}>
    </div>
    <h1 className="header-title">LEO
    </h1>
    <div className="info-wrapper on-review-page">
    <div className="info-block mobile-full">
    <Rating name="read-only" precision={0.5}   emptyIcon={<StarIcon style={{opacity:"0.72",color:"grey" }} fontSize="inherit" />} value={rating}  readOnly />
    </div>
    <button className="info-block butt" onClick={()=>setOpen(true)}><center><StarOutlineIcon/></center>Rate</button>
    <div className="info-block">
    <img src="https://assets.website-files.com/59f5ab35fccfea0001f70443/5a0973aee1339f0001a7cebe_tag.svg" alt="" className="info-block-icon"/>
    <a href="/category/science-fiction" className="info-title-link">Action thriller</a>
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
    <p className="header-short-description" style={{color:'white'}}>It is the third instalment in the Lokesh Cinematic Universe and is inspired by A History of Violence. The film follows Parthi, a café owner and animal rescuer in Theog, who is pursued by gangsters Antony and Harold Das who suspect him to be Antony's estranged son, Leo.
    </p>
    <div className="header-info-block" style={{color:'white'}}>
    <div className="header-info-item">
    <div className="header-info-title bold">Duration:</div>
    <div className="header-info-title">2h 44m
    </div>
    </div>
    <div className="header-info-item">
    <div className="header-info-title bold">Director:</div>
    <div className="header-info-title">Lokesh Kanagaraj 
    </div>
    </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div >
      <h2><u>Official Trailer</u></h2>
      <iframe width="800" height="450" src="https://www.youtube.com/embed/Po3jStA673E?si=2psBeQQIuQrikTCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     </div>
    <h2><u>TOP CAST</u></h2>
    <div style={{maxWidth:"80vw",marginLeft:"auto"}}>
    <Grid container spacing={10}  columns={{sm:12 ,xs:12 ,md:12}}>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"80px",width:"80px"}}></Avatar>
    <h3>Vijay
    </h3>
    </Grid>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"80px",width:"80px"}}></Avatar>
    <h3>Trisha Krishna</h3>
    </Grid>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"80px",width:"80px"}}></Avatar>
    <h3>Kamal Hasan
    </h3>
    </Grid>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"80px",width:"80px"}}></Avatar>
    <h3>Gautham vasudev Menon
    </h3>
    </Grid>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"80px",width:"80px"}}></Avatar>
    <h3>Madonna
    </h3>
    </Grid>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"80px",width:"80px"}}></Avatar>
    <h3>Sanjay dutt
    </h3>
    </Grid>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"80px",width:"80px"}}></Avatar>
    <h3>Mathew Thomas
    </h3>
    </Grid>
    <Grid item sm={4} md={6} xs={6} style={{alignItems:'center',display:'flex',gap:'40px'}}>
    <Avatar sx={{height:"80px",width:"80px"}}></Avatar>
    <h3>Mysskin
    </h3>
    </Grid>
    </Grid>
    </div>
    <br/>
    <br/>
    <br/>
    <Slider data="More Like This"/>
    <Footer/>
    </div>
  }
    </div>
  )
}

export default Leo;