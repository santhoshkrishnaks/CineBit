import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App=()=>{
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App/>}></Route>
  </Routes>
  </BrowserRouter>
}
export default App;