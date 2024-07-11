import React, { useState,useEffect, useContext } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import './LoginForm.css';
import { Alert, CircularProgress } from '@mui/material';
import Create from '../Context/LoginContext';
import Loading from '../LoadingPage/Loading';
import { FaLock, FaMailBulk, FaUser} from 'react-icons/fa';
import axios from 'axios';
const SignUp = () => {
    const Navigate = useNavigate();
    const {load,setLoad}=useContext(Create);
    const [but,setBut]=useState(false);
    useEffect(() => {
        setLoad(true);
        setTimeout(() => {
          setLoad(false);
        }, 500);
    }, [])    
    const [open,setOpen]=useState(false);
    const [form,setform]=useState({
        fname:"",
        lname:"",email:"",password:"",confirmpassword:""
    });
    const [formerror,setformerror]=useState({
        fnameerror:"",
        lnameerror:"",
        emailerror:"",
        passworderror:"",
        confirmpassworderror:""
    });
    const [show,setShow]=useState(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const handleSubmit=(e)=>{
        e.preventDefault();
        const error={};
        setBut(true);
        
        if(form.fname.length<3){
            setOpen(true);
            error.fnameerror="fdadsg";
        }
        else if(form.lname.length<3){
            setOpen(true);
            error.lnameerror="fdadsg";
        }
        else if(!emailRegex.test(form.email)){
            setOpen(true);
            error.emailerror="fdadsg";
        }
        else if(!passwordRegex.test(form.password)){
            setOpen(true);
             error.passworderror="fdadsg";
        }
        else if(form.confirmpassword!==form.password){
            setOpen(true);
            error.confirmpassworderror="fdadsg";
        }
        else{
            try{
                    axios.post('https://movie-db-api-mauve.vercel.app/user',{user:form.email,password:form.password});
                    Navigate("/Login");
                }
                catch(error){
                    console.log(error);
                }
                finally{
                }

        }
        setformerror(error);
    };
    useEffect(()=>{
        setTimeout(()=>{
            setBut(false);
        },2000)
    },[but]);
    useEffect(() => {
        setTimeout(()=>{
            setOpen(false)
        },5000)
    }, [open]);
    const handlechange=(e)=>{
        setform({...form,[e.target.name]:e.target.value});
        console.log(form);
    }
 
    return (
        <div>
        { load?<Loading/>:
        <div className='body'>
            <div className="wrapper">
            <form action="" onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <div className="input-box">
                    <input type="text" placeholder="Firstname" name="fname" value={form.fname} onChange={handlechange}/>
                    <FaUser className='icon'/>
                    </div>
                   {open&&formerror.fnameerror&&<Alert severity="error" sx={{marginTop:"-27px"}}>First name must be at least 3 characters long</Alert>}
                <div className="input-box">
                    <input type="text" placeholder="Lastname" name="lname" value={form.lname} onChange={handlechange} />
                    <FaUser className='icon'/>
                </div>
                {open&&formerror.lnameerror&&<Alert severity="error" sx={{marginTop:"-27px"}}>Last name must be at least 3 characters long</Alert>}
                <div className="input-box">
                    <input type="text" placeholder="Email" name="email" onChange={handlechange} />
                    <FaMailBulk className="icon" />
                </div>
                {open&&formerror.emailerror&&<Alert severity="error" sx={{marginTop:"-27px"}}>Invalid Email</Alert>}
                <div className="input-box">
                    <input type={show?"password":"text"} placeholder="Password" value={form.password} name="password" onChange={handlechange}/>
                    <FaLock className='icon' style={{cursor:"pointer"}} onClick={()=>setShow(!show)}/>                
                    </div>
                    {open&&formerror.passworderror&&<Alert severity="error" sx={{marginTop:"-27px"}}>Password must be Minimum eight characters, at least one letter, one number and one special character</Alert>}
                <div className="input-box">
                    <input
                        type={show?"password":"text"} placeholder="Confirm Password" name="confirmpassword" value={form.confirmpassword} onChange={handlechange} />
                        <FaLock className='icon' style={{cursor:"pointer"}} onClick={()=>setShow(!show)}/>                
                        </div>
                        {open&&formerror.confirmpassworderror&&<Alert severity="error" sx={{marginTop:"-27px"}}>Password and ConfirmPassword must be Same</Alert>}
                        {but?<center><CircularProgress color="primary" size={20}/></center>:<input type = "submit" className='button' value= 'SignUp'></input>}
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