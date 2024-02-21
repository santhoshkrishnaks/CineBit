
import React, { useState } from 'react';
import './LoginForm.css';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  console.log("Email Id:------->>>>>>>",email);
  console.log("Password:------->>>>>>>",password);
  const handleClick=()=>{
    navigate("/Home");
  }
  return (
    <div className='body'>
      <div className='wrapper'>
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
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
          <input type="submit" className='button' onClick={handleClick} value='Login' />

          <div className="register-link">
            <p>Don't have an account? <Link to="/">Signup</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
