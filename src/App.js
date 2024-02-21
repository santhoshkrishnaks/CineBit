import React from'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './LoginForm/SignUp.jsx';
import Aboutus from './Aboutus/Aboutus.js';
import Footer from './Footer/Footer.js';
import Home from './Home/Home.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/Login' element={<LoginForm/>}/>
      <Route path='/AboutUs' element={<Aboutus/>}/>
      <Route path='/Footer' element={<Footer/>} />
      <Route path='/Home' element={<Home data="UI Team"/>} />
      </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;