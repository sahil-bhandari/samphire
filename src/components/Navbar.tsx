/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import '../css/Theme.css';
import logo from '../assets/samphirelogo.png';
import { scrollToSection } from '../util/scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
  { name: 'Home', section: 'hero' },
  { name: 'Services', section: 'services' },
  { name: 'About', section: 'about' },
  { name: 'Contact', section: 'contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Salon Logo" className="logo" />

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        {menuItems.map(({ name, section }) => (
          <li key={section}>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, section)}
              className="nav-link"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

