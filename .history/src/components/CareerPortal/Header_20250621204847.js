import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // ✅ renamed to avoid conflict
import "./Header.css";
import ResumeUpload from "./ResumeUpload";

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
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    console.log("Resume data extracted:", resumeData);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="portal-header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img
              src="/Logo.ghar.jpg"
              alt="GharPadharo Logo"
              width="40"
              height="40"
            />
            <span>GharPadharo</span>
          </Link>
        </div>

        <nav className={`main-nav ${isMenuOpen ? "active" : ""} nav-items`}>
          <ul>
            <li className="nav-item">
              <span className="nav-link" onClick={() => toggleDropdown("jobs")}>
                Jobs
              </span>
            </li>

            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => toggleDropdown("locations")}
              >
                Location
              </span>
              <div className="dropdown locations-dropdown">
                <Link to="/locations/mumbai">Dehradun</Link>
                <Link to="/locations/delhi">Haridwar</Link>
                <Link to="/locations/bangalore">Nainital</Link>
                <Link to="/locations/hyderabad">Mussorie</Link>
                <Link to="/locations/chennai">Roorkee</Link>
              </div>
            </li>

            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => toggleDropdown("students")}
              >
                Students
              </span>
              <div className="dropdown students-menu">
                <HashLink smooth to="/students#internships">
                  Internship Opportunities
                </HashLink>

                <HashLink smooth to="/students#FreshersJob">
                  Fresher Job Roles
                </HashLink>
                <HashLink smooth to="/students#EarlyCareers">
                  Early Career Programs
                </HashLink>
                <HashLink smooth to="/students#Hackathons">
                  Hackathons & Challenges
                </HashLink>
                <HashLink smooth to="/students#Webinars">
                  Career Webinars
                </HashLink>
                <HashLink smooth to="/students#Scholarships">
                  Scholarships
                </HashLink>
                <HashLink smooth to="/students#Mentorship">
                  Mentorship Programs
                </HashLink>
                <HashLink smooth to="/students#Resources">
                  Learning Resources
                </HashLink>
                <HashLink smooth to="/students#faqs">
                  FAQs for Students
                </HashLink>
              </div>
            </li>

            <li className="nav-item">
              <span className="nav-link" onClick={() => toggleDropdown("life")}>
                Life at GharPadhaaro
              </span>
              <div className="dropdown life-at-pharpadharo-section">
                <Link to="/life-at-gharpadhaaro/our-culture">Our Culture</Link>
                <Link to="/life-at-gharpadhaaro/workplace-vibes">
                  Workplace Vibes
                </Link>
                <Link to="/life-at-gharpadhaaro/employee-stories">
                  Employee Stories
                </Link>
                <Link to="/life-at-gharpadhaaro/events-and-celebrations">
                  Events & Celebrations
                </Link>
                <Link to="/life-at-gharpadhaaro/diversity-inclusion">
                  Diversity & Inclusion
                </Link>
                <Link to="/life-at-gharpadhaaro/learning-growth">
                  Learning & Growth
                </Link>
                <Link to="/life-at-gharpadhaaro/perks-benefits">
                  Perks & Benefits
                </Link>
                <Link to="/life-at-gharpadhaaro/work-life-balance">
                  Work-Life Balance
                </Link>
                <Link to="/life-at-gharpadhaaro/gallery">Gallery</Link>
                <Link to="/life-at-gharpadhaaro/blogs">Team Blogs</Link>
              </div>
            </li>

            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => toggleDropdown("about")}
              >
                About
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
          <Link to="/login" className="btn btn-secondary">
            Sign In
          </Link>
          <button onClick={handleResumeUpload} className="btn btn-primary">
            Upload Resume
          </button>

          <i
            className="fa-solid fa-bars mobile-menu-toggle"
            onClick={toggleMenu}
          ></i>
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
