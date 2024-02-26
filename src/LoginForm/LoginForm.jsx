
import React, { useState,useEffect, useContext } from 'react';
import './LoginForm.css';
import { FaFacebook, FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import Create from '../Context/LoginContext';
import axios from 'axios';
import Loading from '../LoadingPage/Loading';
import { CircularProgress } from '@mui/material';

const LoginForm = () => {
  const navigate=useNavigate();
  const {login,setLogin}=useContext(Create);
  const [user,setUser]=useState(false);
  const [email,setEmail]=useState();
  const [emailError,setEmailError]=useState('');
  const [password,setPassword]=useState('');
  const [passwordError,setPasswordError]=useState();
  const [but,setBut]=useState(false);
  const handleClick = async (e) => {
    e.preventDefault();
    setBut(true);
    try {
      const response = await axios.get("https://mocki.io/v1/29e166fd-d1fb-4a71-92e0-fa7a5ffdb53d");
      let userFound = false;
      for (let i = 0; i < response.data.length; i++) {
        const e = response.data[i].username;
        const p = response.data[i].password;
        if (email === e) {
          if(password === p){
          userFound = true;
          break;
          }
          else{
            setPasswordError('Password Incorrect');
          }
        }
        else{
          setEmailError('Email Incorrect');
          setPasswordError('Password Incorrect');
        }
      }
      setBut(false);
      setUser(userFound);
    } catch (error) {
      console.log(error);
    }
    if(user){
      navigate("/Home");
      setLogin(true);
    }
    else{
      setBut(false);
    }
  };
  const {load,setLoad}=useContext(Create);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []) 
  return (
    <div>
    {load?<Loading/>:
    <div className='body'>
      <div className='wrapper'>
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Email" value={email}required onChange={(e)=>{setEmail(e.target.value)}}/>
            <FaUser className='icon' />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <FaLock className='icon'/>
            {passwordError && <p className="error-message">{passwordError}</p>}
            </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <hr className="horizontal-line" />
          <div className="social-login">
            <p>or login using</p>
            <FcGoogle className='social-icon1' />
            <FaFacebook className='social-icon2' />
          </div>
          {but?<CircularProgress color="primary" size={20}/>:<input type="submit" className='button' onClick={handleClick} value='Login' />}

          <div className="register-link">
            <p>Don't have an account? <Link to="/">Signup</Link></p>
          </div>
        </form>
      </div>
     
    </div>
  }
    </div>
  );
};

export default LoginForm;
