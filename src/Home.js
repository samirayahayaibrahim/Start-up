import App from './App.css';
import Home from './Home';
import Navigation from './Navigation';
import group from './assets/group.png';
import google from './assets/google.jpg';
import microsoft from './assets/microsoft.jpg';
import airbnb from './assets/airbnb.jpg';
import facebook from './assets/facebook.jpg';
import spotify from './assets/spotify.jpg';
import Group2 from './assets/Group 2.jpg';
import working from './assets/working.jpg';
import person1 from './assets/person 1.jpg';
import person2 from './assets/person 2.jpg';
import person3 from './assets/person 3.jpg';
import person4 from './assets/person 4.jpg';
import whatsapp from './assets/whatsapp.svg';
import fblite from './assets/fblite.svg';
import insta from './assets/insta.svg';
import twitter from './assets/twitter.png';
import P from './assets/P.png';
import tictok from './assets/tictok.png';
import youtube from './assets/youtube.png';

const HomeComponent = () => {
    return ( 
        <div className="homepage">
            <div className='welcome'>
                <img src={group} alt="grouppic" />
                <div className='header'>
                    <p className="subTitle">WELCOME</p>
                    <p className="welcome-header">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <p className='welcome-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <div className='buttom'>Explore</div>
                </div>
                
            </div>
            <div className='partners'>
                <p className='partner'>PARTNERS</p>
                <h4>Lorem Ipsum Dolor</h4>
                <p className='partner-description'>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.</p>
            </div>
            <div className='media'>
                <img src={google}/>
                <img src={microsoft}/>
                <img src={airbnb}/>
                <img src={facebook}/>
                <img src={spotify}/>
            </div>
            <button>Learn More</button>
            <div className='group'>
                <div>
                <img src={Group2}/>
                <p className='group2-header'>Lorem ipsum dolor sit amet consectetur </p>
                <p className='group-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                <button>Learn More</button>
                </div>
                <div>
                <img src={working} alt="working-pic" />
                <p className='group2-header'>Lorem ipsum dolor sit amet consectetur </p>
                <p className='group-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                <button>Learn More</button>
                </div>
            </div>
            <div className='Team'>
                <h4>TEAM</h4>
                <h3>Our Talents</h3>
                <p className='team-subheader'>
                Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.
                </p>
                <div className='cards'>
                    <div className='person'>
                    <img src={person1} alt="working" />
                    <p className='title'>Peg Legge<span>CEO</span></p>
                    </div>
                    <div className='person'>
                    <img src={person2} alt="working" />
                    <p className='title'>Richard Guerra<span>CTO</span></p>
                    </div>
                    <div className='person'>
                    <img src={person3} alt="working" />
                    <p className='title'>Alexandra Stolz<span>DESIGNER</span></p>
                    </div>
                    <div className='person'>
                    <img src={person4} alt="working" />
                    <p className='title'>Janet Bray<span>DEVELOPER</span></p>
                    </div>
                    <button>Learn More</button>
                </div>
                <div className='footer'>
                <div className='socials'>
                    <img src={fblite} alt="working" />
                    <img src={insta} alt="working" />
                    <img src={twitter} alt="working" />
                    <img src={P} alt="working" />
                    <img src={tictok} alt="working" />
                    <img src={whatsapp} alt="working" />
                    <img src={youtube} alt="working" />
                </div>
                <div className='copyright'>
                © Start, 2022. All rights reserved.
                </div>
                </div>
            </div>
        </div>
    
    );
}

export default HomeComponent;

