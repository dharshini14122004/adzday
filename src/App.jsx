import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import "./custom-style/custom.css";
import Brand from './pages/Brand';
import Project from './pages/Project';
import CreateBrand from './pages/CreateBrand';


import Mainlayout from "./components/Mainlayout";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Mainlayout />}> 
        <Route path='/brand' element={<Brand />} />
        <Route path='/brand/create' element={<CreateBrand />} />
        <Route path='/project' element={<Project />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
