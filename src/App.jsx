import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";

import './App.css'
import Home from './Screen/Home';
import Signin from './Screen/Signin';
import Signup from './Screen/Signup';
import Navbar from './Components/Navbar';
import Loged from './Screen/Loged';


function App() {
  

  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/loged" element={<Loged/>}/>

    </Routes>
  </BrowserRouter>
  )
}

export default App
