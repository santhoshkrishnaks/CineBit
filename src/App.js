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
}

export default App;
