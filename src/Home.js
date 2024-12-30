import App from './App.css';
import Home from './Home';
import Navigation from './Navigation';
import group from './assets/group.png';

const HomeComponent = () => {
    return ( 
        <div className="homepage">
            <div className='welcome'>
                <div className='header'>
                    <p className="subTitle">WELCOME</p>
                    <p className="welcome-header">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <p className='welcome-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <div className='buttom'>Explore</div>
                </div>
                <img src={group} alt="grouppic" />
            </div>
            <div className='partners'>
                <p className='partner'>PARTNERS</p>
                <h4>Lorem Ipsum Dolor</h4>
                <p className='partner-description'>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.</p>
            </div>
            <div className='socials'>
                <img src='assets/google.jpg'></img>
                <img src='assets/microsoft.jpg'></img>
                <img src='assets/airbnb.jpg'></img>
                <img src='assets/facebook.jpg'></img>
                <img src='assets/spotify.jpg'></img>
            </div>
            <button>Learn More</button>
            <div className='group'>
                <img src='assets/Group 2.jpg'/>
            </div>
        </div>
    
    );
}

export default HomeComponent;

