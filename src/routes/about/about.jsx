import React from 'react'

import Footer from '../../components/footer/footer';

import Navbar from '../../components/navbar/navbar';

import HeroImg2 from '../../components/heroImg2/heroimg2';
import AboutMe from '../../components/aboutMeContent/aboutMeContent';


const about = () => {

  return (
    <>
      <Navbar/>
      
      <HeroImg2 headingText="About Me" paraText="Coding mastermind, crafting digital realms."/>
      <AboutMe/>
      <Footer/>
    </>
  )
}

export default about