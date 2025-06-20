import React, { useState, useEffect } from 'react';

const JobListings = ({ searchQuery, filters, category }) => {
  // Mock job data with categories
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
  ];

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

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
    setCurrentPage(1); // Reset to page 1 on filters/search change
  }, [searchQuery, filters, category]);

  // Pagination calculations
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="job-listings space-y-6">
      <h3 className="text-lg font-semibold text-gray-700">{filteredJobs.length} job(s) found</h3>

      {currentJobs.length > 0 ? (
        currentJobs.map(job => (
          <div
            key={job.id}
            className="job-card border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h4 className="text-xl font-semibold text-blue-700">{job.title}</h4>
            <p className="text-sm text-gray-600">
              <strong>Team:</strong> {job.team} | <strong>Location:</strong> {job.location}
              <br />
              <strong>Type:</strong> {job.jobType} | <strong>Experience:</strong> {job.experience}
            </p>
            <p className="mt-2 text-gray-700">{job.description}</p>
            <small className="text-xs text-gray-500">Posted on {formatDate(job.datePosted)}</small>
            <hr className="mt-4" />
          </div>
        ))
      ) : (
        <p className="text-gray-600">No jobs match your filters.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination flex gap-2 justify-center mt-6">
          <button
            onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === i + 1 ? 'bg-blue-600 text-white' : 'border-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

// Format date helper
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

export default JobListings;
