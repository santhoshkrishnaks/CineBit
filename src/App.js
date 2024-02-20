<<<<<<< HEAD
import React from'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './LoginForm/SignUp.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
=======
import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App=()=>{
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App/>}></Route>
  </Routes>
  </BrowserRouter>
>>>>>>> 767c05e759119cee40880889caa75045310d4633
}
export default App;