import '../App.css';
import './homestyle.css';
import './portfoliostyle.css';
import Hamburger from './Hamburger';
import navicon from './assets/navicon.svg';
import { BrowserRouter as Router, Route, Routes, Switch, BrowserRouter, NavLink, Link  } from 'react-router-dom';
const NavigationComponent= () => {


    return (
        <div className='navlink'>
            <div className="nav">
            <img src={navicon} className="navicon" alt=''/>
            </div>

        <div className="links">
            <ul className='burgers'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="portfolio">Portfolio</NavLink></li>
            <li><NavLink to="services">Services</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
            </ul>
        </div>
        <Hamburger />

        </div>
    );
}

export default NavigationComponent;
