import React, { useState, useEffect } from 'react';
import './JobListings.css';

const JobListings = ({ searchQuery, filters, onApplyNow }) => {
  // Mock data for job listings
  const mockJobs = [
    {
      id: 1,
      title: 'AI Research Scientist',
      team: 'Artificial Intelligence',
      location: 'Menlo Park, CA',
      jobType: 'Full-time',
      experience: 'Senior Level',
      description: 'Join our AI research team to advance the state-of-the-art in machine learning and develop new AI technologies that will power GharPadhaaro\'s products and services.',
      datePosted: '2023-05-15'
    },
    {
      id: 2,
      title: 'Software Engineer, Infrastructure',
      team: 'Infrastructure',
      location: 'Seattle, WA',
      jobType: 'Full-time',
      experience: 'Mid Level',
      description: 'Build and maintain the infrastructure that powers Meta\'s global services, ensuring reliability, scalability, and performance.',
      datePosted: '2023-05-18'
    },
    {
      id: 3,
      title: 'Product Designer',
      team: 'Design',
      location: 'New York, NY',
      jobType: 'Full-time',
      experience: 'Mid Level',
      description: 'Design beautiful, intuitive interfaces for Meta\'s products that are used by billions of people around the world.',
      datePosted: '2023-05-20'
    },
    {
      id: 4,
      title: 'Data Scientist',
      team: 'Data Science',
      location: 'London, UK',
      jobType: 'Full-time',
      experience: 'Entry Level',
      description: 'Analyze large datasets to extract insights and inform product decisions across Meta\'s family of apps and services.',
      datePosted: '2023-05-22'
    },
    {
      id: 5,
      title: 'Security Engineer',
      team: 'Security',
      location: 'Dublin, Ireland',
      jobType: 'Full-time',
      experience: 'Senior Level',
      description: 'Protect Meta\'s infrastructure, products, and users from security threats and vulnerabilities.',
      datePosted: '2023-05-25'
    },
    {
      id: 6,
      title: 'Product Manager, AR/VR',
      team: 'Product Management',
      location: 'Menlo Park, CA',
      jobType: 'Full-time',
      experience: 'Senior Level',
      description: 'Lead the development of new AR/VR products and features that will shape the future of the metaverse.',
      datePosted: '2023-05-28'
    },
    {
      id: 7,
      title: 'Machine Learning Engineer',
      team: 'Artificial Intelligence',
      location: 'Singapore',
      jobType: 'Full-time',
      experience: 'Mid Level',
      description: 'Develop and deploy machine learning models that power Meta\'s products and services.',
      datePosted: '2023-05-30'
    },
    {
      id: 8,
      title: 'Software Engineering Intern',
      team: 'Software Engineering',
      location: 'Menlo Park, CA',
      jobType: 'Internship',
      experience: 'Internship',
      description: 'Join our engineering team for a summer internship and work on real-world projects that impact billions of users.',
      datePosted: '2023-06-01'
    },
    {
      id: 9,
      title: 'Technical Program Manager',
      team: 'Product Management',
      location: 'Remote',
      jobType: 'Full-time',
      experience: 'Senior Level',
      description: 'Coordinate cross-functional teams to deliver complex technical projects on time and with high quality.',
      datePosted: '2023-06-03'
    },
    {
      id: 10,
      title: 'Research Scientist, NLP',
      team: 'Research',
      location: 'New York, NY',
      jobType: 'Full-time',
      experience: 'Senior Level',
      description: 'Advance the state-of-the-art in natural language processing and develop new technologies for Meta\'s products.',
      datePosted: '2023-06-05'
    }
  ];

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  useEffect(() => {
    // Filter jobs based on search query and filters
    let filtered = [...mockJobs];
    
    if (searchQuery) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (filters.location) {
      filtered = filtered.filter(job => job.location === filters.location);
    }
    
    if (filters.team) {
      filtered = filtered.filter(job => job.team === filters.team);
    }
    
    if (filters.jobType) {
      filtered = filtered.filter(job => job.jobType === filters.jobType);
    }
    
    if (filters.experience) {
      filtered = filtered.filter(job => job.experience === filters.experience);
    }
    
    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, filters]);

  // Get current jobs for pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="job-listings">
      <div className="listings-header">
        <h2>Open Positions</h2>
        <p>{filteredJobs.length} jobs found</p>
      </div>

      {currentJobs.length > 0 ? (
        <>
          <div className="job-list">
            {currentJobs.map(job => (
              <div className="job-card" key={job.id}>
                <div className="job-card-header">
                  <h3 className="job-title">{job.title}</h3>
                  <span className="job-type">{job.jobType}</span>
                </div>
                <div className="job-details">
                  <div className="job-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{job.location}</span>
                  </div>
                  <div className="job-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span>{job.team}</span>
                  </div>
                  <div className="job-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Posted {formatDate(job.datePosted)}</span>
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
                <div className="job-card-footer">
                  <button 
                    className="btn btn-primary"
                    onClick={() => onApplyNow(job)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="pagination-btn" 
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
                >
                  {number}
                </button>
              ))}
              
              <button 
                className="pagination-btn" 
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="no-jobs-found">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <h3>No jobs found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

export default JobListings;