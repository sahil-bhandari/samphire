import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/samphirelogo.png'; // Ensure logo.png is in the src directory

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
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
