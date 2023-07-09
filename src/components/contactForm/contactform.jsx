import React from 'react'
import { useState } from "react";
import './contactform.css'


const contactform = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    function handleChange(evnt) {
        setFormData((currData) => {
            return { ...currData, [evnt.target.name]: evnt.target.value };
        })
    }
    function handleSubmit(evt){
        evt.preventDefault();
        setFormData({ name: "", email: "", subject: "", message: "" });
    }
    return (

        <form onSubmit={handleSubmit}>
            <label >Your Name</label>
            <input onChange={handleChange} type='text'></input>
            <label >Email</label>
            <input onChange={handleChange} type='email'></input>
            <label >Subject</label>
            <input onChange={handleChange} type='text'></input>
            <label >Message</label>
            <textarea onChange={handleChange} row='6' placeholder='Type your message here'></textarea>
            <button className='btn'>Submit</button>
        </form>

    );
}

export default contactform