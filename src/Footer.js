import './homestyle.css';
import whatsapp from './assets/whatsapp.svg';
import fblite from './assets/fblite.svg';
import insta from './assets/insta.svg';
import twitter from './assets/twitter.png';
import P from './assets/P.png';
import tictok from './assets/tictok.png';
import youtube from './assets/youtube.png';

const Footer = () => {
    return ( 
        <div className='footer'>
                
                <div className='socials'>
                    <div className='social'>
                        <img src={fblite} className="social-icon" alt=''/>
                        <img src={insta} className="social-icon" alt=''/>
                        <img src={twitter} className="social-icon" alt=''/>
                        <img src={P} className="social-icon" alt=''/>
                        <img src={tictok} className="social-icon" alt=''/>
                        <img src={whatsapp} className="social-icon" alt=''/>
                        <img src={youtube} className="social-icon" alt=''/>
                    </div>
                <div className='copyright'>© Start, 2022. All rights reserved.</div>
                </div>
            </div>
    );
}


export default Footer;