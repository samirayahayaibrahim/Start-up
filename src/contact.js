import App from './App.css';
import map from './assets/map.png';
import React, { useState } from "react";
import contactstyle from './contactstyle.css';
const useContact = () => {
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        Message: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${formValues.username}, email: ${formValues.email}, message: ${formValues.Message}`);
    };
    return ( 
        <div className="contact">
            <h2>Contact Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.</p>
            
            <div className="form">
                <div className='fill'>
                <p>Name</p>
                <input type="text" name="username" value={formValues.username} onChange={handleChange} placeholder="Username" className='text'/>
                <p>Email</p>
                <input type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Email" className='text'/>
                <p>Message</p>
                <input type="text" name="message" value={formValues.Message} onChange={handleChange} placeholder="message" className='message'/><br/>
                <button type="submit" className='submit'>Submit</button>
                </div>
                <img src={map} className='map'/>
            </div>
            </div>
    );
}

export default useContact;
