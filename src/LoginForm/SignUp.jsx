import React, { useState,useEffect, useContext } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import './LoginForm.css';
import { CircularProgress } from '@mui/material';
import Create from '../Context/LoginContext';
import Loading from '../LoadingPage/Loading';
import { FaLock, FaMailBulk, FaUser} from 'react-icons/fa';
const SignUp = () => {
    const Navigate = useNavigate();
   
    const {semail,setsemail,sname,setsname,slast,setslast,load,setLoad}=useContext(Create);
    useEffect(() => {
        setLoad(true);
        setTimeout(() => {
          setLoad(false);
        }, 500);
      }, [])    
    const [password,setPassword]=useState("");
    const [confirmpassword,setConfirmPassword]=useState("");
    const handleSubmit=()=>{
        if(confirmpassword===password){
            Navigate('/Login'); 
        }
        else{
            alert("Password and Confirm Password are not same");
        }
    };

    return (
        <div>
        { load?<Loading/>:
        <div className='body'>
            <div className="wrapper">
            <form action="" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <div className="input-box">
                    <input type="text" placeholder="Firstname" name="fName" required onChange={(e)=>{setsname(e.target.value)}} />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Lastname" name="lName" required onChange={(e)=>{setslast(e.target.value)}} />
                    <FaLock className='icon'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email" name="email" required onChange={(e)=>{setsemail(e.target.value)}} />
                    <FaMailBulk className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" name="password" required onChange={(e)=>{setPassword(e.target.value)}} />
                    <FaLock className='icon'/>
                    </div>
                <div className="input-box">
                    <input
                        type="password" placeholder="Confirm Password" name="confirmPassword" required onChange={(e)=>{setConfirmPassword(e.target.value)}} />
                        <FaLock className='icon'/>                
                        </div>

                <input type = "submit" className='button' value= 'SignUp'></input>
                <div className="register-link">
                    <p>
                        Already have an account? <Link to="/Login">Login</Link>
                    </p>
                </div>
            </form>
        </div>
        </div>
    }
        </div>
    );
};

export default SignUp;