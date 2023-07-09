import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaMapMarker, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./footer.css";

const footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className='contact'>
                    <div className='heading'><h2>Contact</h2></div>
                    <div className='mail'>
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                            harshdagar@gmail.com</h4>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                            +91 1234567890</h4>
                    </div>
                    <div className='home-location'>
                        <h4><FaMapMarker size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                            Delhi, India</h4>
                    </div>
                </div>
                <div className='connect'>
                    <div className='heading'><h2>Connect</h2></div>
                    <div className='logo-grp'>
                        <div className='connect-logo'><a href='https://github.com/Harsh-Dagar'><FaGithub size={30} style={{ color: "#fff" }} /></a></div>
                        <div className='connect-logo'><a href='https://www.linkedin.com/in/harsh-dagar-118247229/'><FaLinkedin size={30} style={{ color: "#fff" }} /></a></div>
                        <div className='connect-logo'><a href='https://www.instagram.com/harshdagar8181/?hl=en'><FaInstagram size={30} style={{ color: "#fff" }} /></a></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default footer