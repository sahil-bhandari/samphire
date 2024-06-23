import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../assets/samphirelogo.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = (location.pathname === '/' || location.pathname === '/samphire');
  return (
    <nav className={`navbar ${isHome ? 'navbar-home' : ''}`}>
      <img src={logo} alt="Salon Logo" className="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
