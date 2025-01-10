import React, { useState } from "react";
import "./hamburgerstyle.css";

const HamburgerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isClose, setIsClose] = useState(false);

  const closeMenu = () => {
    setIsClose(!isClose);
  };

    return (
    <div className="hamburger-menu">
      {/* Hamburger Icon */}
    <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </div>

      {/* Navigation Menu */}
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="portfolio">Portfolio</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>
        </nav>
    
<div className={`hamburger ${isClose ? "close" : ""}`} onClick={closeMenu}>
</div>
</div>


);
};

export default HamburgerComponent;
