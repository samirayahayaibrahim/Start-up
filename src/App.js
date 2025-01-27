import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Portfolio from './Components/Portfolio';
import Hamburger from "./Components/Hamburger";
import Footer from "./Components/Footer";
import Contact from "./Components/contact";
import Service from "./Components/Service";
import { BrowserRouter as Router, Route, Routes, Switch, BrowserRouter, NavLink, Link  } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        <div className='content'>
        <Routes>
        <Route index element={<Home />}/>
        <Route exact path="/Portfolio" element={<Portfolio />}/>
        <Route exact path="/Services" element={<Service />}/>
        <Route exact path="/Contact" element={<Contact />}/>
        </Routes>
        
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

