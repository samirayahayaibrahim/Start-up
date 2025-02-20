import './App.css';
import Home from './home';
import Navigation from './Navigation';
import Portfolio from './Portfolio';
import Hamburger from "./Hamburger";
import Footer from "./Footer";
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
              <Hamburger />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
