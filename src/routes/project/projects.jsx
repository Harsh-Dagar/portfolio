import React from 'react'

import Footer from '../../components/footer/footer';
import ProjectCard from '../../components/projectCard/projectCard';

import Navbar from '../../components/navbar/navbar';
import HeroImg2 from '../../components/heroImg2/heroimg2';

const projects = () => {
  return (
    <>
      <Navbar/>
      <HeroImg2 headingText="Projects" paraText="Some of my most recent work"/>
      <ProjectCard/>
      <Footer/>
    </>
  )
}

export default projects