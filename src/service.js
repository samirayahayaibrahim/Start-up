import servicestyle from './servicestyle.css';
import App from './App.css';
import check from './assets/check-lg 1.png';
const ServiceComponent = () => {
    return ( 
        <div className="service">
                    <h3>Plans</h3>
            <p className='subheader'>Our Services</p>
            <p className='description'>Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.</p>
            <div className="cards">
                <div className="card">
                    <p className='head'>Basic</p>
                    <p className='dollar'>$100
                    <span className='month'>/month</span></p>
                    <p className="paragraphcard">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                    <div className="lists">
                        <ul>
                            <li><img src={check} className="mark" alt=''/>Lorem ipsum, dolor sit </li>
                            <li><img src={check} className="mark"/>Lorem ipsum, dolor sit</li> 
                            <li><img src={check} className="mark"/>Lorem ipsum, dolor sit </li>
                            <li ><img src={check} className="mark"/>Lorem ipsum, dolor sit</li> 
                            <li><img src={check} className="mark"/>Lorem ipsum, dolor sit </li>
                        </ul>
                    </div>
                    <button className='btm'>Learn More</button>
                </div>
                <div className="card">
                    <p className='head'>Plus</p>
                    <p className='dollar'>$250
                    <span className='month'>/month</span></p>
                    <p className="paragraphcard">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                    <div className="lists">
                        <ul>
                            <li><img src={check} className="mark"/>Lorem ipsum, dolor sit </li>
                            <li><img src={check} className="mark"/>Lorem ipsum, dolor sit </li>
                            <li><img src={check} className="mark"/>Lorem ipsum, dolor sit </li>
                            <li><img src={check} className="mark"/>Lorem ipsum, dolor sit </li>
                            <li><img src={check} className="mark"/>Lorem ipsum, dolor sit </li>
                        </ul>
                    </div>
                    <button className='btm'>Learn More</button>
                </div>
                <div className="card">
                    <p className='head'>Pro</p>
                    <p className='dollar'>$400
                    <span className='month'>/month</span></p>
                    <p className="paragraphcard">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                    <div className="lists">
                        <ul>
                            <li><img src={check} className="mark"/>Lorem ipsum, dolor sit </li>
                            <li><img src={check} className="mark"/>Lorem ipsum, dolor sit </li>
                            <li><img src={check} className="mark"/>Lorem ipsum, dolor sit </li>
                            <li><img src={check} className="mark"/>Lorem ipsum, dolor sit </li>
                            <li><img src={check} className="mark"/>Lorem ipsum, dolor sit </li>
                        </ul>
                    </div>
                    <button className='btm'>Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default ServiceComponent;



