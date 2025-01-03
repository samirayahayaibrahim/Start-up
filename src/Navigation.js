import './App.css';
import './homestyle.css';
const NavigationComponent= () => {
    return ( 
        <div className="links">
            <ul>
            <li><a href="home">Home</a></li>
            <li><a href="portfolio">Portfolio</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default NavigationComponent;