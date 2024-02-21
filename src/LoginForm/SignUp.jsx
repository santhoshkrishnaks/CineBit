import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import './LoginForm.css';
import { Email } from '@mui/icons-material';
const SignUp = () => {
    const Navigate = useNavigate();
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword,setConfirmPassword]=useState("");
    console.log("Firstname--------->>>>",fname);
    console.log("Lastname--------->>>>",lname);
    console.log("Emailname--------->>>>",email);
    console.log("Password--------->>>>",password);
    console.log("ConfirmPassword--------->>>>",confirmpassword);
    const handleSubmit=()=>{
        Navigate('/Login'); 
    };

    return (
        <div className='body'>
            <div className="wrapper">
            <form action="" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <div className="input-box">
                    <input type="text" placeholder="Firstname" name="fName" required onChange={(e)=>{setFname(e.target.value)}} />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Lastname" name="lName" required onChange={(e)=>{setLname(e.target.value)}} />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email" name="email" required onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" name="password" required onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div className="input-box">
                    <input
                        type="password" placeholder="Confirm Password" name="confirmPassword" required onChange={(e)=>{setConfirmPassword(e.target.value)}} />
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
    );
};

export default SignUp;