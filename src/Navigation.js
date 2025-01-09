import './App.css';
import './homestyle.css';
import './portfoliostyle.css';
import Hamburger from './Hamburger';
import navicon from './assets/navicon.svg';
const NavigationComponent= () => {
    

    return (
        <div className='navlink'>
            <div className="nav">
            <img src={navicon} className="navicon" alt=''/>
            </div>
            
        <div className="links">
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="portfolio">Portfolio</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="contact">Contact</a></li>
            </ul>
        </div>
        <Hamburger />
        
        </div>
    );
}

export default NavigationComponent;