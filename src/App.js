import './App.css';
import Home from './Home';
import Navigation from './Navigation';
import Portfolio from './Portfolio';
import Hamburger from "./Hamburger";
import Footer from "./Footer";
import Contact from "./contact";
import Service from "./Service";
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
