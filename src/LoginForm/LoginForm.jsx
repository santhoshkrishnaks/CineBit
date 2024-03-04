
import React, { useState,useEffect, useContext } from 'react';
import './LoginForm.css';
import { FaFacebook, FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import Create from '../Context/LoginContext';
import axios from 'axios';
import Loading from '../LoadingPage/Loading';
import { Alert, CircularProgress } from '@mui/material';

const LoginForm = () => {
  const navigate=useNavigate();
  const {login,setLogin}=useContext(Create);
  const [show,setShow]=useState(true);
  const [user,setUser]=useState(false);
  const [email,setEmail]=useState();
  const [emailError,setEmailError]=useState('');
  const [password,setPassword]=useState('');
  const [passwordError,setPasswordError]=useState();
  const [but,setBut]=useState(false);
  const [open,setOpen]=useState(false);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setBut(true);
      const response = await axios.get("https://retoolapi.dev/Nxb05R/data");
      let userFound = false;
      for (let i = 1; i < response.data.length; i++) {
        const e = response.data[i].username;
        const p = response.data[i].password;
        if (email === e) {
          if(password === p){
          userFound = true;
          break;
          }
          else{
            setOpen(true);
            setPasswordError('Password Incorrect');
          }
        }
        else{
          setOpen(true);
          setEmailError('Email Incorrect');
        }
      }
      setUser(userFound);
    } 
    catch (error) {
      console.log(error);
    }
    finally{
      if(user){
        navigate("/Home");
        setLogin(true);
        setBut(false);
        localStorage.setItem("Email",email);
      }
    }
  };
  const {load,setLoad}=useContext(Create);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []) 
  useEffect(() => {
    setTimeout(() => {
      setBut(false);
    }, 2000);
  }, [but]);
  useEffect(()=>{
    setTimeout(()=>{
      setOpen(false);
    },2000)
  },[open]);
  return (
    <div>
    {load?<Loading/>:
    <div className='body'>
      <div className='wrapper'>
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <FaUser className='icon' />
            </div>
            {open&&emailError && <Alert severity="error" sx={{marginTop:"-27px"}}>User Doesnot Exist</Alert>}
          <div className="input-box">
            <input type={show?"password":"text"} placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <FaLock className='icon' style={{cursor:"pointer"}} onClick={()=>setShow(!show)}/>                
            </div>
            {open&&passwordError && <Alert severity="error" sx={{marginTop:"-27px"}}>Invalid Password</Alert>}
<br/>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="/Forgot">Forgot password?</a>
          </div>
          <hr className="horizontal-line" />
          <div className="social-login">
            <p>or login using</p>
            <FcGoogle className='social-icon1' />
            <FaFacebook className='social-icon2' />
          </div>
          {but?<center><CircularProgress color="primary" size={20}/></center>:<input type="submit" className='button' onClick={handleClick} value='Login' />}

          <div className="register-link">
            <p style={{fontFamily:'font-family: "Quicksand", sans-serif'}}>Don't have an account? <Link to="/">Signup</Link></p>
          </div>
        </form>
      </div>
     
    </div>
  }
    </div>
  );
};

export default LoginForm;
