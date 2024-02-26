import React,{useState} from 'react';
import "./Star.css"; 
import {Dialog,DialogActions,DialogContent,DialogTitle} from '@mui/material';
import Rating from '@mui/material/Rating';



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
      <h3 className='heading' onClick={handletitle}>Rating</h3>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star"></span>
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
