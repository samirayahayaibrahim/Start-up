import App from './App.css';
import home from './home.css';
import home from './home';
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
import navicon from './assets/navicon.svg';
import hamburger from './assets/hamburger.png';

const homeComponent = () => {
    const welcomeHeader = "Lorem ipsum, dolor sit amet consectetur";
    const welcomeDescription = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?";
    const partnerDescription = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
    const group2Header = "Lorem ipsum dolor sit amet consectetur";
    const group2Description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?";

    return ( 
        <div className="homepage">
            <div className='welcome'>
                <div className="nav">
                    <img src={navicon} className="navicon" />
                    <img src={hamburger} className="hamburger" />
                </div>
                <div className='banner'>
                    <img src={group} className="group1" />
                    <div className='header'>
                        <p className="subTitle">WELCOME</p>
                        <p className="welcome-header">{ welcomeHeader }</p>
                        <p className='welcome-description'>{ welcomeDescription }</p>
                        <button className='explore'>Explore</button>
                    </div>
                </div>
            </div>
            <div className='partners'>
                <p className='partner'>PARTNERS</p>
                <h4>Lorem Ipsum Dolor</h4>
                <p className='partner-description'>{partnerDescription}</p>
            </div>
            <div className='media'>
                <img src={google} className='media-pic'/>
                <img src={microsoft} className='media-pic'/>
                <img src={airbnb} className='media-pic'/>
                <img src={facebook} className='media-pic'/>
                <img src={spotify} className='media-pic'/><br/>
                <button className='learn'>Learn More</button>
            </div>
            <div className='group'>
                <div>
                <img src={Group2} className="group2-pic"/>
                <p className='group2-header'> {group2Header}</p>
                <p className='group2-description'>{group2Description}</p>
                <button className='more'>Learn More</button>
                </div>
                <div>
                <img src={working} className="working-pic" />
                <p className='group2-header'> {group2Header}</p>
                <p className='group-description'>{group2Description}</p>
                <button className='more'>Learn More</button>
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
                    <img src={person1} className="work" />
                    <p className='nametag'>Peg LeggeL<br/><span className='title'>CEO</span></p>
                    </div>
                    <div className='person'>
                    <img src={person2} className="work" />
                    <p className='nametag'>Richard Guerra<br/><span className='title'>CTO</span></p>
                    </div>
                    <div className='person'>
                    <img src={person3} className="work" />
                    <p className='nametag'>Alexandra Stolz<br/><span className='title'>DESIGNER</span></p>
                    </div>
                    <div className='person'>
                    <img src={person4} className="work" />
                    <p className='nametag'>Janet Bray<br/><span className='title'>DEVELOPER</span></p>
                    </div>
                    <button className='learn'>Learn More</button>
                </div>
                </div>
                <div className='footer'>
                <div className='socials'>
                    <img src={fblite} className="social-icon" />
                    <img src={insta} className="social-icon" />
                    <img src={twitter} className="social-icon" />
                    <img src={P} className="social-icon" />
                    <img src={tictok} className="social-icon" />
                    <img src={whatsapp} className="social-icon" />
                    <img src={youtube} className="social-icon" />
                </div>
                <div className='copyright'>
                © Start, 2022. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default homeComponent;

