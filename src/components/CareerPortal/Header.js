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
      {/* <div className="container"> */}
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
              <span className="nav-link">
                Jobs <i className="fa-solid fa-angle-down"></i>
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
              <span className="nav-link">
                Location <i className="fa-solid fa-angle-down"></i>
              </span>
              <div className="dropdown locations-dropdown">
                <Link to="/locations/mumbai">Mumbai</Link>
                <Link to="/locations/delhi">Delhi</Link>
                <Link to="/locations/bangalore">Bangalore</Link>
                <Link to="/locations/hyderabad">Hyderabad</Link>
                <Link to="/locations/chennai">Chennai</Link>
                <Link to="/locations/kolkata">Kolkata</Link>
                <Link to="/locations/pune">Pune</Link>
                <Link to="/locations/ahmedabad">Ahmedabad</Link>
                <Link to="/locations/jaipur">Jaipur</Link>
                <Link to="/locations/lucknow">Lucknow</Link>
                <Link to="/locations/chandigarh">Chandigarh</Link>
                <Link to="/locations/bhopal">Bhopal</Link>
                <Link to="/locations/indore">Indore</Link>
                <Link to="/locations/nagpur">Nagpur</Link>
                <Link to="/locations/kochi">Kochi</Link>
                <Link to="/locations/thiruvananthapuram">Thiruvananthapuram</Link>
                <Link to="/locations/guwahati">Guwahati</Link>
                <Link to="/locations/visakhapatnam">Visakhapatnam</Link>
                <Link to="/locations/surat">Surat</Link>
                <Link to="/locations/patna">Patna</Link>
                <Link to="/locations/ranchi">Ranchi</Link>
                <Link to="/locations/bhubaneswar">Bhubaneswar</Link>
                <Link to="/locations/meerut">Meerut</Link>
                <Link to="/locations/dehradun">Dehradun</Link>
              </div>
            </li>

            <li className='nav-item'>
              <span className="nav-link">
                Students <i className="fa-solid fa-angle-down"></i>
              </span>
              <div className="dropdown students-menu">
                <Link to="/students/internships">Internship Opportunities</Link>
                <Link to="/students/fresher-jobs">Fresher Job Roles</Link>
                <Link to="/students/early-careers">Early Career Programs</Link>
                <Link to="/students/hackathons">Hackathons & Challenges</Link>
                <Link to="/students/webinars">Career Webinars</Link>
                <Link to="/students/scholarships">Scholarships</Link>
                <Link to="/students/mentorship">Mentorship Programs</Link>
                <Link to="/students/resources">Learning Resources</Link>
                <Link to="/students/campus-recruitment">Campus Recruitment</Link>
                <Link to="/students/faqs">FAQs for Students</Link>
              </div>
            </li>

            <li className='nav-item'>
              <span className="nav-link">
                Life at GharPadhaaro <i className="fa-solid fa-angle-down"></i>
              </span>
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
              <span className="nav-link">
                About <i className="fa-solid fa-angle-down"></i>
              </span>
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
          <Link to="" className="btn btn-primary">Upload Resume</Link>

          {/* <button className="mobile-menu-toggle" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button> */}
          <i className="fa-solid fa-bars mobile-menu-toggle" onClick={toggleMenu}></i>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;