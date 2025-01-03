import './App.css';
import './homestyle.css';
import navicon from './assets/navicon.svg';
import hamburger from './assets/hamburger.png';
const NavigationComponent= () => {
    return (
        <div className='navlink'>
            <div className="nav">
            <img src={navicon} className="navicon" />
            <img src={hamburger} className="hamburger" />
            </div>
            
        <div className="links">
            <ul>
            <li><a href="home">Home</a></li>
            <li><a href="portfolio">Portfolio</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="contact">Contact</a></li>
            </ul>
        </div>
        </div>
            
    );
}

export default NavigationComponent;