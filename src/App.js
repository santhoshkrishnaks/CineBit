import React, { useState } from'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './LoginForm/SignUp.jsx';
import Aboutus from './Aboutus/Aboutus.js';
import Footer from './Footer/Footer.js';
import Home from './Home/Home.js';
import Pages from './Pages/Pages.js';
import Create from './Context/LoginContext.js';
import NavBar from './NavBar/NavBar.js';
import List from './List/List.js';
import ForgotPassword from './LoginForm/ForgotPassword.js';

function App() {
  const [semail,setsemail]=useState();
  const [sname,setsname]=useState();
  const [slast,setslast]=useState();
  const [login,setLogin]=useState(false);
  const [load,setLoad]=useState(false);
  return (
    <div>
    <Create.Provider value={{semail,setsemail,sname,setsname,slast,setslast,login,setLogin,load,setLoad}}>
      <BrowserRouter>
      <Routes>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Login' element={<LoginForm/>}/>
      <Route path='/Forgot' element={<ForgotPassword/>}/>
      <Route element={<NavBar/>}>
      <Route path="/" element={<Home/>}/>
      <Route path='/AboutUs' element={<Aboutus/>}/>
      <Route path='/Footer' element={<Footer/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Page' element={<Pages/>}/>
      <Route path='/List' element={<List/>}/>
      </Route>
      </Routes>
        </BrowserRouter>
        </Create.Provider>
    </div>
  );
}
export default App;