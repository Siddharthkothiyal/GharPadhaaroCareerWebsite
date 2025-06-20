import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import JobFilter from './JobFilters';
import JobListings from './JobListings';
import JobSearch from './JobSearch';

const JobCategory = () => {
  const { category } = useParams(); // get 'engineering', 'design', etc.

  const [filters, setFilters] = useState({
    location: '',
    team: '',
    jobType: '',
    experience: '',
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className="job-category-page"
      style={{
        display: 'flex',
        gap: '30px',
        padding: '20px',
        alignItems: 'flex-start',
      }}
    >
      {/* Left Sidebar: Filters */}
      <div style={{ flex: '1', maxWidth: '300px' }}>
        <JobFilter filters={filters} onFilterChange={handleFilterChange} />
      </div>

      {/* Main Content: Heading + Search + Listings */}
      <div style={{ flex: '3' }}>
        <h2 style={{ marginBottom: '10px' }}>
          {category.charAt(0).toUpperCase() + category.slice(1)} Jobs
        </h2>

        <JobSearch onSearch={(query) => setSearchQuery(query)} />

        <JobListings
          filters={filters}
          searchQuery={searchQuery}
          category={category}
        />
      </div>
    </div>
  );
};

export default JobCategory;
