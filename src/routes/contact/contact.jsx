import React from 'react'

import Footer from '../../components/footer/footer';

import Navbar from '../../components/navbar/navbar';

import HeroImg2 from '../../components/heroImg2/heroimg2';
import ContactForm from '../../components/contactForm/contactform';
const contact = () => {
  return (
    <>
      <Navbar />
      <HeroImg2 headingText="Contact" paraText="Let's have a chat"/>
      <ContactForm/>
      <Footer />
    </>
  )
}

export default contact