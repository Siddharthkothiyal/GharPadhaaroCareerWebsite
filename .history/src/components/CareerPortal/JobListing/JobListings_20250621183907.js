import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './JobListings.css';

export const mockJobs = [
  {
    id: 1,
    title: 'AI Research Scientist',
    team: 'Artificial Intelligence',
    location: 'Menlo Park, CA',
    jobType: 'Full-time',
    experience: 'Senior Level',
    category: 'engineering',
    description: 'Advance ML techniques in Meta research.',
    datePosted: '2023-05-15',
  },
  {
    id: 2,
    title: 'Software Engineer Intern',
    team: 'Software Engineering',
    location: 'Seattle, WA',
    jobType: 'Internship',
    experience: 'Internship',
    category: 'engineering',
    description: 'Work on real projects as a software intern.',
    datePosted: '2023-06-01',
  },
  {
    id: 3,
    title: 'UX Designer',
    team: 'Design',
    location: 'New York, NY',
    jobType: 'Full-time',
    experience: 'Mid Level',
    category: 'design',
    description: 'Create beautiful UI/UX experiences.',
    datePosted: '2023-05-20',
  },
  {
    id: 4,
    title: 'Product Manager',
    team: 'Product Management',
    location: 'Remote',
    jobType: 'Full-time',
    experience: 'Senior Level',
    category: 'product',
    description: 'Manage features and drive product success.',
    datePosted: '2023-05-25',
  },
  {
    id: 5,
    title: 'Data Scientist',
    team: 'Data Science',
    location: 'London, UK',
    jobType: 'Full-time',
    experience: 'Entry Level',
    category: 'engineering',
    description: 'Analyze data for strategic decisions.',
    datePosted: '2023-05-28',
  },
  {
    id: 6,
    title: 'HR Manager',
    team: 'Human Resources',
    location: 'Dublin, Ireland',
    jobType: 'Full-time',
    experience: 'Mid Level',
    category: 'hr',
    description: 'Manage hiring and people operations.',
    datePosted: '2023-06-05',
  },
];

const JobListings = () => {
  const location = useLocation();
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  const searchParams = new URLSearchParams(location.search);
  const jobTypeParam = searchParams.get('type'); // e.g., "Internship"

  useEffect(() => {
    let filtered = [...mockJobs];

    if (jobTypeParam) {
      filtered = filtered.filter(
        job => job.jobType.toLowerCase() === jobTypeParam.toLowerCase()
      );
    }

    setFilteredJobs(filtered);
    setCurrentPage(1);
  }, [jobTypeParam]);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="job-listings">
      <h3>{filteredJobs.length} job(s) found</h3>

      {currentJobs.length > 0 ? (
        currentJobs.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-card-header">
              <h4 className="job-title">{job.title}</h4>
              <div className="job-type">{job.jobType}</div>
            </div>
            <div className="job-details">
              <div className="job-detail"><strong>Team:</strong> {job.team}</div>
              <div className="job-detail"><strong>Location:</strong> {job.location}</div>
              <div className="job-detail"><strong>Experience:</strong> {job.experience}</div>
            </div>
            <p className="job-description">{job.description}</p>
            <div className="job-card-footer">
              <small>Posted on {formatDate(job.datePosted)}</small>
            </div>
          </div>
        ))
      ) : (
        <div className="no-jobs-found">
          <h3>No jobs match your filters.</h3>
          <p>Please try changing your search or filter options.</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export default JobListings;
