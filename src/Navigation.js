import './App.css';
import Navigation from './Navigation';
import home from './Home';
import navicon from './assets/navicon.svg';
import hamburger from './assets/hamburger.png';
const NavigationComponent = () => {
    return ( 
        <div className="nav">
            <img src={navicon} className="navicon" />
            <img src={hamburger} className="hamburger" />
        </div>
    );
}

export default NavigationComponent;