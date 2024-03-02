import React,{useState} from 'react';
import "./Star.css"; 
import {Dialog,DialogActions,DialogContent,DialogTitle} from '@mui/material';
import Rating from '@mui/material/Rating';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';



const Star = () => {
  const [open, setOpen]=useState(false);
  const[ratingp, setRatingp]=useState();
  const handletitle =()=>{
      setOpen(true)
  }
  const handlesubmit=()=>{
    setOpen(false)
  }
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <button style={{display:"inline-flex",marginTop:"20px",backgroundColor:"transparent", border:"none", cursor:'pointer',alignItems:'center'}} onClick={()=>setOpen(true)}><StarOutlineIcon/><span>Rate</span></button>
      <br/>
      <Rating name="read-only" precision={0.5}   emptyIcon={<StarIcon style={{opacity:"0.72",color:"grey" }} fontSize="inherit" />} value={3.5}  readOnly />

      <Dialog open={open} fullWidth
     onClose={()=>setOpen(false)}>
    <DialogTitle sx={{justifyContent:'center',display:"flex",fontSize:"20px"}}>Rate This Movie</DialogTitle>
    <DialogContent sx={{justifyContent:'center',display:"flex"}}>
    <Rating
    size='large'
    name="simple-controlled"
    value={ratingp}
    onChange={(event,value)=>{setRatingp(value)}}
    />
    </DialogContent>
    <DialogActions sx={{justifyContent:'center',display:"flex"}}>
    <button style={{color:'black', backgroundColor:'#FFA200 ',cursor:"pointer",border:"none",width:"60px",height:"40px",borderRadius: "7px"}} onClick={handlesubmit}>Rate</button>
    </DialogActions>
    </Dialog>
    </div>
  );
};

export default Star;
