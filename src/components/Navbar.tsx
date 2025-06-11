/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../css/Theme.css';
import logo from '../assets/samphirelogo.png';
import { scrollToSection } from '../util/scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Salon Logo" className="logo" />
      <ul>
        <li><a onClick={() => scrollToSection('hero')} className="nav-link" role="button">Home</a></li>
        <li><a onClick={() => scrollToSection('services')} className="nav-link" role="button">Services</a></li>
        <li><a onClick={() => scrollToSection('about')} className="nav-link" role="button">About</a></li>
        <li><a onClick={() => scrollToSection('contact')} className="nav-link" role="button">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
