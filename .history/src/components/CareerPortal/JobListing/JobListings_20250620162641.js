import React, { useState, useEffect } from 'react';
import './JobListings.css';

const JobListings = ({ searchQuery, filters, category }) => {
  // 🔹 Mock job data with category
  const mockJobs = [
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
    // add more if needed...
  ];

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  // 🔎 Filter logic
  useEffect(() => {
    let filtered = [...mockJobs];

    if (category) {
      filtered = filtered.filter(
        job => job.category && job.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        job =>
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
    setCurrentPage(1); // Reset to page 1 when filters change
  }, [searchQuery, filters, category]);

  // 🔢 Pagination logic
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
            <h4>{job.title}</h4>
            <p>
              <strong>Team:</strong> {job.team} | <strong>Location:</strong> {job.location}
              <br />
              <strong>Type:</strong> {job.jobType} | <strong>Experience:</strong> {job.experience}
            </p>
            <p>{job.description}</p>
            <small>Posted on {formatDate(job.datePosted)}</small>
            <hr />
          </div>
        ))
      ) : (
        <p>No jobs match your filters.</p>
      )}

      {/* Pagination buttons */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
          <button
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

// 🗓️ Format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

export default JobListings;
