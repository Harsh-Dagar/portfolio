import React from 'react'
import Footer from '../../components/footer/footer';
import HeroImage from '../../components/heroImg/heroimg';
import AboutMe from '../../components/aboutMeContent/aboutMeContent';
import ProjectCard from '../../components/projectCard/projectCard';
import ContactForm from '../../components/contactForm/contactform';


import Navbar from '../../components/navbar/navbar';
const home = () => {
  return (
    <>
    <Navbar/>
    <HeroImage/>
    <AboutMe/>
    <ProjectCard/>
    <ContactForm/>
  
    <Footer/>
    </>
  )
}

export default home