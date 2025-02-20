import App from '../App.css';
import React, { useState } from "react";
import contactstyle from './contactstyle.css';
const useContact = () => {
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        Message: ""
    });

    const [showPopup, setShowPopup] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${formValues.username}, email: ${formValues.email}, message: ${formValues.message}`);
        setShowPopup(true);
    };

    return ( 
        <div className="contact">
            <h2>Contact Us</h2>
            <p className="contactdescription">Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.</p>

            <form className="form"  onSubmit={handleSubmit}>
                <div className='fill'>
                <p>Name</p>
                <input type="text" name="username" value={formValues.username} onChange={handleChange} placeholder="" className='text'/>
                <p>Email</p>
                <input type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="" className='text'/>
                <p>Message</p>
                <input type="text" name="message" value={formValues.message} onChange={handleChange} placeholder="" className='message'/><br/>
                <button type="submit" className='submit'>Submit</button>
                </div>
                <form style={{ width: "100%", height: "400px" }}>
                    <iframe
                    className="map"
                    title="Google Maps"
                    height="65%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126898.75007882051!2d8.469916872274857!3d12.002179442118998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae816f1a4507eb%3A0xf09b5f11f9b51ddf!2sKano%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1707290972301!5m2!1sen!2sng"></iframe>
                </form>
            
            </form>
            </div>
    );
}

export default useContact;