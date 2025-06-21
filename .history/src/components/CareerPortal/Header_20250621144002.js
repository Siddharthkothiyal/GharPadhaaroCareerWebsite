import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ResumeUpload from './ResumeUpload';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResumeUpload, setShowResumeUpload] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResumeUpload = () => {
    setShowResumeUpload(true);
  };

  const handleResumeProcessed = (resumeData) => {
    // Store the resume data in localStorage or state management solution
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    console.log('Resume data extracted:', resumeData);
    
    // You could also dispatch this data to your state management solution
    // or pass it to a context provider
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <header className="portal-header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src="/Logo.ghar.jpg" alt="GharPadharo Logo" width="40" height="40" />
            <span>GharPadharo</span>
          </Link>
        </div>

        <nav className={`main-nav ${isMenuOpen ? 'active' : ''} nav-items`}>
          <ul>
            <li className='nav-item'>
              <span className="nav-link" onClick={() => toggleDropdown('jobs')}>
                Jobs
              </span>
              <div className="dropdown jobs-dropdown">
                <Link to="/jobs/engineering">Engineering</Link>
                <Link to="/jobs/design">Design</Link>
                <Link to="/jobs/product">Product</Link>
                <Link to="/jobs/marketing">Marketing</Link>
                <Link to="/jobs/sales">Sales</Link>
                <Link to="/jobs/hr">Human Resources (HR)</Link>
                <Link to="/jobs/operations">Operations</Link>
                <Link to="/jobs/customer-support">Customer Support</Link>
                <Link to="/jobs/business-analyst">Business Analyst</Link>
                <Link to="/jobs/content-writing">Content Writing</Link>
                <Link to="/jobs/finance">Finance & Accounts</Link>
                <Link to="/jobs/internships">Internships</Link>
                <Link to="/jobs/fresher-jobs">Fresher Jobs</Link>
                <Link to="/jobs/remote-jobs">Remote Jobs</Link>
              </div>
            </li>

            <li className='nav-item'>
              <span className="nav-link" onClick={() => toggleDropdown('locations')}>
                Location  </span>
              <div className="dropdown locations-dropdown">
                <Link to="/locations/mumbai">Dehradun</Link>
                <Link to="/locations/delhi">Haridwar</Link>
                <Link to="/locations/bangalore">Nainital</Link>
                <Link to="/locations/hyderabad">Mussorie</Link>
                <Link to="/locations/chennai">Roorkee</Link>
              </div>
            </li>

            <li className='nav-item'>
              <span className="nav-link" onClick={() => toggleDropdown('students')}>
                Students   </span>
              <div className="dropdown students-menu">
                <Link to="/students/internships">Internship Opportunities</Link>
                <Link to="/students/fresher-jobs">Fresher Job Roles</Link>
                <Link to="/students/early-careers">Early Career Programs</Link>
                <Link to="/students/hackathons">Hackathons & Challenges</Link>
                <Link to="/students/webinars">Career Webinars</Link>
                <Link to="/students/scholarships">Scholarships</Link>
                <Link to="/students/mentorship">Mentorship Programs</Link>
                <Link to="/students/resources">Learning Resources</Link>
                <Link to="/students/faqs">FAQs for Students</Link>
              </div>
            </li>

            <li className='nav-item'>
              <span className="nav-link" onClick={() => toggleDropdown('life')}>
                Life at GharPadhaaro  </span>
              <div className="dropdown life-at-pharpadharo-section">
                <Link to="/life-at-gharpadhaaro/our-culture">Our Culture</Link>
                <Link to="/life-at-gharpadhaaro/workplace-vibes">Workplace Vibes</Link>
                <Link to="/life-at-gharpadhaaro/employee-stories">Employee Stories</Link>
                <Link to="/life-at-gharpadhaaro/events-and-celebrations">Events & Celebrations</Link>
                <Link to="/life-at-gharpadhaaro/diversity-inclusion">Diversity & Inclusion</Link>
                <Link to="/life-at-gharpadhaaro/learning-growth">Learning & Growth</Link>
                <Link to="/life-at-gharpadhaaro/perks-benefits">Perks & Benefits</Link>
                <Link to="/life-at-gharpadhaaro/work-life-balance">Work-Life Balance</Link>
                <Link to="/life-at-gharpadhaaro/gallery">Gallery</Link>
                <Link to="/life-at-gharpadhaaro/blogs">Team Blogs</Link>
              </div>
            </li>

            <li className='nav-item'>
              <span className="nav-link" onClick={() => toggleDropdown('about')}>
                About   </span>
              <div className="dropdown about-dropdown">
                <Link to="/about/our-story">Our Story</Link>
                <Link to="/about/core-values">Core Values</Link>
                <Link to="/about/leadership">Leadership Team</Link>
                <Link to="/about/awards">Awards & Recognition</Link>
                <Link to="/about/impact">Impact & Initiatives</Link>
                <Link to="/about/contact">Contact Us</Link>
                <Link to="/about/faqs">FAQs</Link>
              </div>
            </li>

          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/login" className="btn btn-secondary">Sign In</Link>
          <button onClick={handleResumeUpload} className="btn btn-primary">Upload Resume</button>

          <i className="fa-solid fa-bars mobile-menu-toggle" onClick={toggleMenu}></i>
        </div>
      </div>

      {showResumeUpload && (
        <ResumeUpload 
          onClose={() => setShowResumeUpload(false)} 
          onResumeProcessed={handleResumeProcessed}
        />
      )}
    </header>
  );
};

export default Header;