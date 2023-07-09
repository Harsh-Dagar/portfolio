import React from 'react'
import './heroimg2.css';

import { Link } from 'react-router-dom';
import introImg from "../../assets/intro-bg.jpg";



const heroimg2 = ({headingText,paraText}) => {
  return (
    <div className='hero-container2'>
        <div className='main-image2'>
        <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"></img>
        </div>
        <div className='content2'>
            <h1>{headingText}</h1>
            <p>{paraText}</p>
        </div>
    </div>
  )
}

export default heroimg2;