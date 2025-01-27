import App from '../App.css';
import homestyle from './homestyle.css';
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
import { motion } from 'framer-motion';

const HomeComponent = () => {
    const welcomeHeader = "Lorem ipsum, dolor sit amet consectetur";
    const welcomeDescription = "Lorem ipsum, dolor sit  amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?";
    const partnerDescription = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
    const group2Header = "Lorem ipsum dolor sit amet consectetur";
    const group2Description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?";

    return ( 
        <div className="homepage">
            <motion.div className='welcome'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
            >
                <div className='banner'>
                    <img src={group} className="group1" alt=''/>
                    <div className='header'>
                        <p className="subTitle">WELCOME</p>
                        <p className="welcome-header">{ welcomeHeader }</p>
                        <p className='welcome-description'>{ welcomeDescription }</p>
                        <button className='explore'>Explore</button>
                    </div>
                </div>
            </motion.div>
            <div className='partners'>
                <p className='partner'>PARTNERS</p>
                <h4>Lorem Ipsum Dolor</h4>
                <p className='partner-description'>{partnerDescription}</p>
            </div>
            <div className='media'>
                <img src={google} className='media-pic' alt=''/>
                <img src={microsoft} className='media-pic' alt=''/>
                <img src={airbnb} className='media-pic' alt=''/>
                <img src={facebook} className='media-pic' alt=''/>
                <img src={spotify} className='media-pic' alt=''/>
                <div className='mybtn'><button className='learn'>Learn More</button></div>
                
            </div>
            <div className='group'>
                <div className='group2'>
                    <img src={Group2} className="group2-pic"/>
                    <div className='paragraph'>
                        <p className='group2-header'> {group2Header}</p>
                        <p className='group2-description'>{group2Description}</p>
                        <button className='more'>Learn More</button>
                    </div>
                </div>
                <div className='group3'>
                    <img src={working} className="working-pic" alt=''/>
                    <div className='paragraph'>
                        <p className='group2-header'> {group2Header}</p>
                        <p className='group2-description'>{group2Description}</p>
                        <button className='more'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='Team'>
                <h4 className='teamheader'>TEAM</h4>
                <h3 className='teamdescription'>Our Talents</h3>
                <p className='team-subheader'>
                Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.
                </p>
                <div className='cards'>
                    <motion.div className='person'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3 }}>
                        <img src={person1} className="work" alt=''/>
                        <p className='nametag'>Peg LeggeL<br/><span className='title'>CEO</span></p>
                    </motion.div>
                    <motion.div className='person'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3 }}>
                        <img src={person2} className="work" alt=''/>
                        <p className='nametag'>Richard Guerra<br/><span className='title'>CTO</span></p>
                    </motion.div>
                    <motion.div className='person'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3 }}>
                        <img src={person3} className="work" alt=''/>
                        <p className='nametag'>Alexandra Stolz<br/><span className='title'>DESIGNER</span></p>
                    </motion.div>
                    <motion.div className='person'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3 }}>
                        <img src={person4} className="work" alt=''/>
                        <p className='nametag'>Janet Bray<br/><span className='title'>DEVELOPER</span></p>
                    </motion.div>
                </div>
                <button className='learnmore'>View Team</button>
                </div>
                
        </div>
    );
}

export default HomeComponent;

