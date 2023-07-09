import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./navbar.css";

const navbar = () => {
    const [click, setClick] = useState('false');
    function handleClick() {
        setClick(!click);
    }
    return (
        <div className='navbar'>
            <div className='navbar-heading-hamburger'>
                <Link className='navbar-heading' to='/'>
                    <h1 >Portfolio</h1>
                </Link>
                <div className='hamburger-icon' onClick={handleClick}>
                    {(click) ? <FaBars size={20} style={{ color: "#fff" }} /> : <FaTimes size={20} style={{ color: "#fff" }} />}
                </div>
            </div>
            <ul className={(click)?'navbar-list':'navbar-list navbar-list-active'}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>

        </div>
    );
}

export default navbar