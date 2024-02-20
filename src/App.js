import React from'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './LoginForm/SignUp.jsx';
import NavBar from './NavBar/NavBar.js';
import Aboutus from './Aboutus/Aboutus.js';
import ContactUs from './ContactUs.js/ContactUs.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Login' element={<LoginForm/>}/>
      <Route path="/" element={<NavBar />}>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/AboutUs' element={<Aboutus/>}/>
      </Route>
      </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;