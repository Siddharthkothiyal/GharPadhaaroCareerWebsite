import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// JobFilter Component
const JobFilter = ({ filters, onFilterChange }) => {
  const locations = [
    '', 'Menlo Park, CA', 'New York, NY', 'Seattle, WA',
    'London, UK', 'Dublin, Ireland', 'Singapore', 'Remote'
  ];
  const teams = [
    '', 'Artificial Intelligence', 'Software Engineering', 'Data Science',
    'Product Management', 'Design', 'Research', 'Infrastructure',
    'Security', 'Marketing', 'Sales', 'Legal'
  ];
  const jobTypes = ['', 'Full-time', 'Internship', 'Contract', 'Part-time'];
  const experienceLevels = [
    '', 'Internship', 'New Grad', 'Entry Level', 'Mid Level',
    'Senior Level', 'Director', 'Executive'
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700">Filters</h2>

      {/* Location */}
      <div>
        <label className="block font-medium mb-1">Location</label>
        <select
          value={filters.location}
          onChange={e => onFilterChange('location', e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">All Locations</option>
          {locations.filter(Boolean).map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Team */}
      <div>
        <label className="block font-medium mb-1">Team</label>
        <select
          value={filters.team}
          onChange={e => onFilterChange('team', e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">All Teams</option>
          {teams.filter(Boolean).map(team => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>
      </div>

      {/* Job Type */}
      <div>
        <label className="block font-medium mb-1">Job Type</label>
        <select
          value={filters.jobType}
          onChange={e => onFilterChange('jobType', e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">All Job Types</option>
          {jobTypes.filter(Boolean).map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Experience Level */}
      <div>
        <label className="block font-medium mb-1">Experience Level</label>
        <select
          value={filters.experience}
          onChange={e => onFilterChange('experience', e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">All Experience Levels</option>
          {experienceLevels.filter(Boolean).map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </div>

      <button
        onClick={() => {
          onFilterChange('location', '');
          onFilterChange('team', '');
          onFilterChange('jobType', '');
          onFilterChange('experience', '');
        }}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded"
        aria-label="Clear all filters"
      >
        Clear All Filters
      </button>
    </div>
  );
};

// JobSearch Component
const JobSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        placeholder="Search job titles, keywords..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Search jobs"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-md font-semibold"
        aria-label="Submit job search"
      >
        Search
      </button>
    </form>
  );
};

// JobListings Component
const JobListings = ({ filters, searchQuery }) => {
  const jobs = [
    {
      id: 1,
      title: 'AI Research Scientist',
      team: 'Artificial Intelligence',
      location: 'Menlo Park, CA',
      jobType: 'Full-time',
      experience: 'Senior Level',
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
      description: 'Work on real projects as a software intern.',
      datePosted: '2023-06-01',
    },
    {
      id: 3,
      title: 'Data Scientist',
      team: 'Data Science',
      location: 'London, UK',
      jobType: 'Full-time',
      experience: 'Entry Level',
      description: 'Analyze data for strategic decisions.',
      datePosted: '2023-05-28',
    },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch =
      searchQuery === '' ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLocation = filters.location === '' || job.location === filters.location;
    const matchesTeam = filters.team === '' || job.team === filters.team;
    const matchesJobType = filters.jobType === '' || job.jobType === filters.jobType;
    const matchesExperience = filters.experience === '' || job.experience === filters.experience;

    return matchesSearch && matchesLocation && matchesTeam && matchesJobType && matchesExperience;
  });

  if (filteredJobs.length === 0) {
    return <p className="text-gray-600">No jobs found matching your criteria.</p>;
  }

  return (
    <div className="space-y-6">
      {filteredJobs.map(job => (
        <div
          key={job.id}
          className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition"
          role="article"
          aria-labelledby={`job-title-${job.id}`}
        >
          <h3
            id={`job-title-${job.id}`}
            className="text-xl font-semibold text-blue-700"
          >
            {job.title}
          </h3>
          <p className="text-sm text-gray-600">
            Team: {job.team} | Location: {job.location}
          </p>
          <p className="text-sm text-gray-600">
            Type: {job.jobType} | Experience: {job.experience}
          </p>
          <p className="mt-2 text-gray-700">{job.description}</p>
          <p className="mt-1 text-xs text-gray-500">
            Posted on {new Date(job.datePosted).toLocaleDateString()}
          </p>
          <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded font-semibold">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
};

// Main JobCategory Component
const JobCategory = () => {
  const { category } = useParams();

  const [filters, setFilters] = useState({
    location: '',
    team: '',
    jobType: '',
    experience: '',
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            {category.charAt(0).toUpperCase() + category.slice(1)} Jobs
          </h1>
          <p className="text-gray-600 mt-2">
            Explore exciting roles in {category.toLowerCase()}.
          </p>
        </header>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Filters Sidebar */}
          <aside
            className="col-span-1 bg-white rounded-lg shadow p-6 max-h-[80vh] overflow-y-auto"
            aria-label="Job filters"
          >
            <JobFilter filters={filters} onFilterChange={handleFilterChange} />
          </aside>

          {/* Main Content */}
          <main className="col-span-1 lg:col-span-4 space-y-6">
            <section className="bg-white rounded-lg shadow p-6" aria-label="Job search">
              <JobSearch onSearch={setSearchQuery} />
            </section>

            <section
              className="bg-white rounded-lg shadow p-6"
              aria-live="polite"
              aria-atomic="true"
            >
              <JobListings filters={filters} searchQuery={searchQuery} />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
