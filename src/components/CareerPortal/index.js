import React, { useState } from 'react';
import './CareerPortal.css';
import Header from './Header';
import JobSearch from './JobSearch';
import JobFilters from './JobFilters';
import JobListings from './JobListings';
import FeaturedTeams from './FeaturedTeams';
import Footer from './Footer';
import JobApplicationForm from './JobApplicationForm';

const CareerPortal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    team: '',
    jobType: '',
    experience: ''
  });
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  
  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };
  
  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };
  
  const handleCloseApplicationForm = () => {
    setShowApplicationForm(false);
  };
  
  return (
    <div className="career-portal">
      <Header />
      <main className="career-portal-main">
        {showApplicationForm && selectedJob ? (
          <section className="application-form-section">
            <div className="container">
              <button 
                className="close-form-btn" 
                onClick={handleCloseApplicationForm}
              >
                &times; Close
              </button>
              <JobApplicationForm 
                jobId={selectedJob.id} 
                jobTitle={selectedJob.title} 
              />
            </div>
          </section>
        ) : (
          <>
            <section className="hero-section">
              <div className="hero-content">
                <h1>We're not hiring employees we're assembling inventors.</h1>
                <p className='hero-section-para'>At GharPadhaaro, we want you to build a career where you're challenged, valued, and learning from the best. Step in. Feel welcome. Leave a mark..</p>
                <JobSearch onSearch={handleSearch} />
              </div>
            </section>
            
            <section className="job-search-section">
              <div className="container">
                <div className="filters-and-results">
                  <JobFilters onFilterChange={handleFilterChange} filters={filters} />
                  <JobListings 
                    searchQuery={searchQuery} 
                    filters={filters} 
                    onApplyNow={handleApplyNow}
                  />
                </div>
              </div>
            </section>
            
            <section className="featured-teams-section">
              <div className="container">
                <h2>Featured Teams</h2>
                <p>Our best ideas happen together. Teamwork drives innovation, cultivates human connection and supports constant learning.</p>
                <FeaturedTeams />
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CareerPortal;