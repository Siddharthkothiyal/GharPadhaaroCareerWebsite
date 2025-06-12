import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="portal-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src="/Logo.ghar.jpg" alt="GharPadharo Logo" width="40" height="40" />
              <span>GharPadharo</span>
            </Link>
          </div>
          
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/teams">Teams</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              <li><Link to="/students">Students</Link></li>
              <li><Link to="/life-at-gharpadhaaro">Life at GharPadhaaro</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <Link to="/login" className="btn btn-secondary">Sign In</Link>
            <Link to="" className="btn btn-primary">Upload Resume</Link>
            
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;