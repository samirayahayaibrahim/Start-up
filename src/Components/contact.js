import App from '../App.css';
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
        alert(`Username: ${formValues.username}, email: ${formValues.email}, message: ${formValues.message}`);
    };

    return ( 
        <div className="contact">
            <h2>Contact Us</h2>
            <p className="contactdescription">Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.</p>
            
            <div className="form">
                <div className='fill'>
                <p>Name</p>
                <input type="text" name="username" value={formValues.username} onChange={handleChange} placeholder="" className='text'/>
                <p>Email</p>
                <input type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="" className='text'/>
                <p>Message</p>
                <input type="text" name="message" value={formValues.message} onChange={handleChange} placeholder="" className='message'/><br/>
                <button type="submit" className='submit'>Submit</button>
                </div>
                <img src="" className={map}></img>
                <iframe src="https://www.google.fr/maps/place/Kano/@11.9246195,8.5038187,11z/data=!4m6!3m5!1s0x11ae80eff0fff3f1:0x85ff8700a3da54eb!8m2!3d12.0021794!4d8.5919561!16zL20vMDJqdHRm?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D" >https://maps.app.goo.gl/wZvjXMdXVHqRVmEU6</iframe>
                
                
            </div>
            </div>
    );
}

export default useContact;
