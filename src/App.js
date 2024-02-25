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
import Slider from './Slider/Slider.js';
import Asuran from './Pages/Asuran.js';
import BatManBegin from './Pages/BatManBegin.js';
import Dhoni from './Pages/Dhoni.js';
import Jailer from './Pages/Jailer.js';
import Leo from './Pages/Leo.js';
import Zootopia from './Pages/Zootopia.js';
import List from './List/List.js';
import Thunivu from './Pages/Thunivu.js';
import Transformer from './Pages/Transformer.js';

function App() {
  const [semail,setsemail]=useState();
  const [sname,setsname]=useState();
  const [slast,setslast]=useState();
  const [login,setLogin]=useState(false);
  const [load,setLoad]=useState(false);
  return (
    <div className="App">
    <Create.Provider value={{semail,setsemail,sname,setsname,slast,setslast,login,setLogin,load,setLoad}}>
      <BrowserRouter>
      <Routes>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Login' element={<LoginForm/>}/>
      <Route path='/Slider' element={<Slider/>}/>
      <Route element={<NavBar/>}>
      <Route path="/" element={<Home/>}/>
      <Route path='/AboutUs' element={<Aboutus/>}/>
      <Route path='/Footer' element={<Footer/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Page' element={<Pages/>}/>
      <Route path='/Asuran' element={<Asuran/>}/>
      <Route path='/BatManBegin' element={<BatManBegin/>}/>
      <Route path='/Dhoni' element={<Dhoni/>}/>
      <Route path='/Jailer' element={<Jailer/>}/>
      <Route path='/Leo' element={<Leo/>}/>
      <Route path='/Transformer' element={<Transformer/>}/>
      <Route path='/Zootopia' element={<Zootopia/>}/>
      <Route path='/List' element={<List/>}/>
      <Route path='/Thunivu' element={<Thunivu/>}/>
      <Route path='/BatMan' element={<BatManBegin/>}/>
      </Route>
      </Routes>
        </BrowserRouter>
        </Create.Provider>
    </div>
  );
}
export default App;