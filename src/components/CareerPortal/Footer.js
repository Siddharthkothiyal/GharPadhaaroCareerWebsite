import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="portal-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>GharPadharo Careers</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/teams">Teams</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              <li><Link to="/life-at-gharpadhaaro">Life at GharPadhaaro</Link></li>
              <li><Link to="/students">Students</Link></li>
              <li><Link to="/login">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/resources/interview-preparation">Interview Preparation</Link></li>
              <li><Link to="/resources/resume-tips">Resume Tips</Link></li>
              <li><Link to="/resources/career-events">Career Events</Link></li>
              <li><Link to="/resources/faq">FAQ</Link></li>
              <li><Link to="/resources/blog">Blog</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest job openings and career tips.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" className="newsletter-input" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <Link to="/accessibility">Accessibility</Link>
          </div>
          <p className="copyright">© 2024 GharPadharo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;