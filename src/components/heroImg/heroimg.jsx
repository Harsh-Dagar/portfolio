import React from 'react'
import './heroimg.css';
import introImg from "../../assets/intro-bg.jpg"
import { Link } from 'react-router-dom';


const heroimg = () => {
  return (
    <div className='hero-container'>
        <div className='main-image'>
        <img src={introImg}></img>
        </div>
        <div className='content'>
            <p>Hi, I am Harsh Dagar</p>
            <h1>I'm React Developer</h1>
            <div className='content-btn'>
            <Link to='/projects' className='btn'>Projects</Link>
            <Link to='/contact' className='btn btn-light'>contact</Link>
            </div>
        </div>
    </div>
  )
}

export default heroimg;