import App from './App.css';
import map from './assets/map.png';
import React, { useState } from "react";
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
            <h3>Contact Us</h3>
            <p>Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.</p>
            <div className="form">
                <p>Name</p>
                <input type="text" name="username" value={formValues.username} onChange={handleChange} placeholder="Username"/>
                <p>Email</p>
                <input type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Email"/>
                <p>Message</p>
                <input type="text" name="message" value={formValues.Message} onChange={handleChange} placeholder="message"/>
                <button type="submit">Submit</button>
            </div>
            <img src={map} className='map'/>
            </div>
    );
}

export default useContact;
