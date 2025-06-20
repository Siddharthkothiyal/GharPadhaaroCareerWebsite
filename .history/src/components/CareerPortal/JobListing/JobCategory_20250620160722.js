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
    <div className="job-category-page">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Jobs</h2>

      {/* Search bar */}
      <JobSearch onSearch={(query) => setSearchQuery(query)} />

      {/* Filters */}
      <JobFilter filters={filters} onFilterChange={handleFilterChange} />

      {/* Listings */}
      <JobListings
        filters={filters}
        searchQuery={searchQuery}
        category={category}
      />
    </div>
  );
};

export default JobCategory;
