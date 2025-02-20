import React, { useState } from 'react';
import './hamburgerstyle.css';
import { BrowserRouter as Router, Route, Routes, Switch, BrowserRouter, NavLink, Link  } from 'react-router-dom';

const useHamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isClose, setIsClose] = useState(false);

  const closeMenu = () => {
    setIsClose(!isClose);
  };

  

  return (
    <nav className="hamburger-nav">
      <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}  onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className='burger'>
          <li><a href="/">Home</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        
      </div>
      <div className={`hamburger ${isClose ? "close" : ""}`} onClick={closeMenu}></div>
    </nav>
  );
};

export default useHamburger;
