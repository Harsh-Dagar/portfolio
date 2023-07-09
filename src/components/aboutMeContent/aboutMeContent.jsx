import React from 'react'
import { FaCss3, FaHtml5, FaJava, FaJs, FaPython, FaReact } from 'react-icons/fa';
import './about.css';
import html5 from "../../assets/html5.png";
import css3 from "../../assets/css.png";
import jsPng from "../../assets/javascript.png";
import reactPng from "../../assets/react.png";
import cplusplus from "../../assets/cplusplus.png";
import java from "../../assets/java.png";
import python from "../../assets/python.png";
import mongoPng from "../../assets/mongo.png";
import expressPng from "../../assets/express.png";
import nodejsPng from "../../assets/nodejs.png";
import btstrpPng from "../../assets/bootstrap.png";
import githubPng from "../../assets/github.png";
import gitPng from "../../assets/git.png";


const aboutMeContent = () => {
    return (
        <div className='abt-me-skill-container'>
            <div className='about-me-container'>
                <div className='about-me-heading'><h1>Who Am I?</h1></div>
                <div className='about-me'><p>Passionate and highly skilled web developer proficient in a wide range of technologies, including HTML, CSS, JavaScript, MongoDB, Express, React, and Node.js. Equipped with expertise in Data Structures and Algorithms (DSA) and a proven track record of successfully solving over 1000 questions on LeetCode, with an impressive rating of 1976. Additionally, achieved a notable rating of 1768 on CodeChef. Actively seeking new opportunities to apply my skills and contribute to challenging projects.</p></div>
            </div>


            <div className='my-skill-container'>
                <div className='about-me-heading'><h1>My Skills</h1></div>
                <div className='my-skills-content'>
                    <div className='skill-feild'>
                        <h4>Programming</h4>
                        <div className='skill-logo'>
                        <img src={java} style={{margin:"10px",height:"80px",width:"80px"}}></img>
                        <img src={cplusplus} style={{margin:"10px",height:"80px",width:"80px"}}></img>
                        <img src={python} style={{margin:"10px",height:"80px",width:"80px"}}></img>
         
                        </div>
                    </div>
                    <div className='skill-feild'>
                        <h4>Frontend Development</h4>
                        <div className='skill-logo'>
                        <img src={html5} style={{margin:"10px",height:"80px",width:"80px"}}></img>
                        <img src={css3} style={{margin:"10px",height:"80px",width:"80px"}}></img>
                        <img src={jsPng} style={{margin:"10px",height:"80px",width:"80px"}}></img>
                        <img src={reactPng} style={{margin:"10px",height:"80px",width:"80px"}}></img>
                        </div>

                    </div>
                    <div className='skill-feild'>
                        <h4>Backend Development</h4>
                        <div className='skill-logo'>
                        <img src={mongoPng} style={{margin:"10px",height:"80px",width:"80px"}}></img>
                        <img src={expressPng} style={{margin:"10px",height:"80px",width:"80px"}}></img>
                        <img src={reactPng} style={{margin:"10px",height:"80px",width:"80px"}}></img>
                        <img src={nodejsPng} style={{margin:"10px",height:"80px",width:"80px"}}></img>
                        </div>

                    </div>
                    <div className='skill-feild'>
                        <h4>Tools and Frameworks</h4>
                        <div className='skill-logo'>
                        <img src={githubPng} style={{margin:"10px",height:"80px",width:"80px"}}></img>
                        <img src={gitPng} style={{margin:"10px",height:"80px",width:"80px"}}></img>
                        <img src={btstrpPng} style={{margin:"10px",height:"80px",width:"80px"}}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutMeContent