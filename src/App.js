import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Portfolio from './Components/Portfolio';
import Hamburger from "./Components/Hamburger";
import Footer from "./Components/Footer";
import Contact from "./Components/contact";
import Service from "./Components/Service";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/Services">
              <Service />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
              <Hamburger />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
