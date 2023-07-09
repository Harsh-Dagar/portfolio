import { useState } from 'react'
import './App.css'
import Home from "./routes/home/home";
import About from "./routes/about/about";
import Projects from "./routes/project/projects";
import Contact from "./routes/contact/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
  ) 
}

export default App
