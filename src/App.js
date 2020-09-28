import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Isolation from './components/Articles/Isolation';
import Italy from './components/Articles/Italy';
import SF from './components/Articles/SF';

function App() {
  return (
    <Router>
      <div className="Main">
        <Header/>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/isolation">
            <Isolation/>
          </Route>
          <Route path="/italy">
            <Italy/>
          </Route>
          <Route path="/sf">
            <SF/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
