import App from '../App.css';
import portfoliostyle from './portfoliostyle.css';
import Navigation from './Navigation';
import portpic1 from './assets/port-pic 1.jpg';
import portpic2 from './assets/port-pic 2.jpg';
import portpic3 from './assets/port-pic 3.jpg';
import portpic4 from './assets/port-pic 4.jpg';
import portpic5 from './assets/port-pic 5.jpg';
import portpic6 from './assets/port-pic 6.jpg';
import portpic7 from './assets/port-pic 7.jpg';
import portpic8 from './assets/port-pic 8.png';
const PortfolioComponent = () => {
    return ( 
        <div className='portifoliopage'>
        <div className='nav'>
        </div>
        <div className='port'>
        <div className='header-portfolio'>
            <h3>WORKS</h3>
            <p className='subheader'>Portfolio</p>
            <p className='portfolio-description'>Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.</p>
        </div>
            <div className='portfolio-pic'>
                <div className='portcard'>
                    <img src={portpic1} className="portpic" alt=''/>
                    <img src={portpic2} className="portpic" alt=''/>
                </div>
                <div className='portcard'>
                    <img src={portpic3} className="portpic" alt=''/>
                    <img src={portpic4} className="portpic" />
                </div>
                <div className='portcard'>
                    <img src={portpic5} className="portpic" alt=''/>
                    <img src={portpic6} className="portpic" alt=''/>
                </div>
                <div className='portcard'>
                    <img src={portpic7} className="portpic" alt=''/>
                    <img src={portpic8} className="portpic " alt=''/>
                </div>
            </div>
            <div className='view'>
                <button className='learnmore'>Learn more</button>
            </div>
            </div>
        </div>
    );
}

export default PortfolioComponent;