import Home from './home';
import Navigation from './Navigation';
import portpic1 from './assets/port-pic 1.jpg';
import portpic2 from './assets/port-pic 2.jpg';
import portpic3 from './assets/port-pic 3.jpg';
import portpic4 from './assets/port-pic 4.jpg';
import portpic5 from './assets/port-pic 5.jpg';
import portpic6 from './assets/port-pic 6.jpg';
import portpic7 from './assets/port-pic 7.jpg';
import portpic8 from './assets/port-pic 8.png';
const portfolioComponent = () => {
    return ( 
        <div className='portifoliopage'>
        <div className='nav'>
            <Navigation />
        </div>
        <div className='header'>
            <h3>WORKS</h3>
            <p className='subheader'>Portfolio</p>
            <p className='portfolio-description'>Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.</p>
            </div>
            <div className='portfolio-pic'>
            <img src={portpic1} className="portpic1" />
            <img src={portpic2} className="portpic2" />
            <img src={portpic3} className="portpic3" />
            <img src={portpic4} className="portpic4" />
            <img src={portpic5} className="portpic5" />
            <img src={portpic6} className="portpic6" />
            <img src={portpic7} className="portpic7" />
            <img src={portpic8} className="portpic8" />
            </div>
        </div>
    );
}

export default portfolioComponent;