import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { Alert, CircularProgress } from '@mui/material';
import Loading from '../LoadingPage/Loading';
import { FaLock, FaMailBulk } from 'react-icons/fa';
import axios from 'axios';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [but, setBut] = useState(false);
    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [show,setShow]=useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://apigenerator.dronahq.com/api/y3qhsCe8/data");
                if (response.data && response.data.length > 0) {
                    setUserList(response.data);
                }
                console.log("============>", response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoad(false);
            }
        };
        
        setLoad(true);
        fetchData();
    }, []);

    const [userList, setUserList] = useState([]);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setBut(true);
        if (!emailRegex.test(email)) {
            setOpen(true);
            setEmailError("Invalid Email");
        } else if (!passwordRegex.test(password)) {
            setOpen(true);
            setPasswordError("Password must be Minimum eight characters, at least one letter, one number and one special character");
        } else if (confirmPassword !== password) {
            setOpen(true);
            setConfirmPasswordError("Password and ConfirmPassword must be Same");
        } else {
            try {
                const user = userList.find(task => task.username === email);
                console.log(user);
                if (user) {
                    await axios.patch(`https://apigenerator.dronahq.com/api/y3qhsCe8/data/${user.id}`, { password: password });
                    navigate("/Login");
                } else {
                    setOpen(true);
                    setEmailError("User not found");
                }
            } catch (error) {
                console.log(error);
            } finally {
                setBut(false);
            }
        }
    };
    
    useEffect(() => {
        setTimeout(() => {
            setOpen(false);
        }, 5000);
    }, [open]);
    useEffect(() => {
     setTimeout(() => {
            setBut(false);
        }, 3000);
    }, [but]);

    return (
        <div>
            {load ? <Loading /> :
                <div className='body'>
                    <div className="wrapper">
                        <form action="" onSubmit={handleResetPassword}>
                            <h1>Forgot Password</h1>
                            <div className="input-box">
                                <input type="text" placeholder="Email" name="email" onChange={(e) => { setEmail(e.target.value) }} />
                                <FaMailBulk className="icon" />
                            </div>
                            {open && emailError && <Alert severity="error" sx={{ marginTop: "-27px" }}>{emailError}</Alert>}
                            <div className="input-box">
                                <input type={show?"password":"text"} placeholder="New Password" value={password} name="password" onChange={(e) => { setPassword(e.target.value) }} />
                                <FaLock className='icon' style={{cursor:"pointer"}} onClick={()=>setShow(!show)}/>                
                                </div>
                            {open && passwordError && <Alert severity="error" sx={{ marginTop: "-27px" }}>{passwordError}</Alert>}
                            <div className="input-box">
                                <input
                                    type={show?"password":"text"} placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                    <FaLock className='icon' style={{cursor:"pointer"}} onClick={()=>setShow(!show)}/>                
                                    </div>
                            {open && confirmPasswordError && <Alert severity="error" sx={{ marginTop: "-27px" }}>{confirmPasswordError}</Alert>}
                            <hr className="horizontal-line" />
                            <div className="remember-forgot" style={{ marginTop: "10px" }}>
                                <a href="/login">Back to Login</a>
                            </div>
                            <br />
                            {but ? <center><CircularProgress color="primary" size={20} /></center> : <input type="submit" className='button' value='Reset Password' />}
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};

export default ForgotPassword;
