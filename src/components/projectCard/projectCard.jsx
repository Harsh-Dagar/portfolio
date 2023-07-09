import React from 'react'
import './projectCard.css'
import ProjImg1 from '../../assets/proj1.png';
import ProjImg2 from '../../assets/proj2.png';
import ProjImg3 from '../../assets/proj3.png';
import ProjImg4 from '../../assets/proj4.png';
import { FaGithub } from 'react-icons/fa';

const projectCard = () => {
    return (
        <div className='project-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-card-container'>


                <div className='project-card'>
                    <div className='card-image'>
                        <img src={ProjImg1}></img>
                    </div>
                    <div className='card-content'>
                        <div className='card-heading'><h2>CampVentures</h2></div>
                        <div className='about-project'><p>Welcome to CampVentures!!<br/>Jump right in and explore our many campgrouds.<br/>Feel free to share some of your own comments on others </p></div>
                        <div className='tech-stack'><p><bold>Tech Stack: </bold>MongoDB, Expressjs, Nodejs, Bootstrap, html, css</p></div>
                        <div className='card-links'>
                            <div><a href='https://github.com/Harsh-Dagar/CampVentures'><FaGithub size={40} style={{color:"#fff"}}  /></a></div>
                            <div ><a className='btn' href='https://campventuresbackend1234.onrender.com/'>Site Link</a></div>
                        </div>
                    </div>
                </div>


                <div className='project-card'>
                    <div className='card-image'>
                        <img src={ProjImg2}></img>
                    </div>
                    <div className='card-content'>
                        <div className='card-heading'><h2>RestCountries</h2></div>
                        <div className='about-project'><p>Feel free to search for different countries and gather information about each one</p></div>
                        <div className='tech-stack'><p><bold>Tech Stack: </bold>React, React-router-dom, CountriesApi</p></div>
                        <div className='card-links'>
                            <div><a href='https://github.com/Harsh-Dagar/RestCountries'><FaGithub size={40} style={{color:"#fff"}}  /></a></div>
                            <div ><a className='btn' href='https://hd1882restcountries.netlify.app/'>Site Link</a></div>
                        </div>
                    </div>
                </div>


                <div className='project-card'>
                    <div className='card-image'>
                        <img src={ProjImg3}></img>
                    </div>
                    <div className='card-content'>
                        <div className='card-heading'><h2>Github Finder</h2></div>
                        <div className='about-project'><p>Search for GitHub profiles of various users</p></div>
                        <div className='tech-stack'><p><bold>Tech Stack: </bold>HTML, CSS, JavaScript, GithubAPI</p></div>
                        <div className='card-links'>
                            <div><a href='https://github.com/Harsh-Dagar/GithubFinder'><FaGithub size={40} style={{color:"#fff"}}  /></a></div>
                            <div ><a className='btn' href='https://hd1882githubfinder.netlify.app/'>Site Link</a></div>
                        </div>
                    </div>
                </div>


                <div className='project-card'>
                    <div className='card-image'>
                        <img src={ProjImg4}></img>
                    </div>
                    <div className='card-content'>
                        <div className='card-heading'><h2>Priceing Panel</h2></div>
                        <div className='about-project'><p>Simple and responsive pricing panel. </p></div>
                        <div className='tech-stack'><p><bold>Tech Stack: </bold>HTML, CSS</p></div>
                        <div className='card-links'>
                            <div><a href='https://github.com/Harsh-Dagar/pricingPanel'><FaGithub size={40} style={{color:"#fff"}}  /></a></div>
                            <div ><a className='btn' href='https://hd1882pricepanel.netlify.app/'>Site Link</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projectCard