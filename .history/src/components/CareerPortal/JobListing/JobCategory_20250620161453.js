import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import JobFilter from './JobFilters';
import JobListings from './JobListings';
import JobSearch from './JobSearch';

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
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Left Sidebar (Filters) */}
      <div className="w-full lg:w-1/4">
        <div className="bg-white rounded-xl shadow p-4">
          <JobFilter filters={filters} onFilterChange={handleFilterChange} />
        </div>
      </div>

      {/* Main Content (Search + Listings) */}
      <div className="w-full lg:w-3/4 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {category.charAt(0).toUpperCase() + category.slice(1)} Jobs
        </h2>

        <div className="bg-white rounded-xl shadow p-4">
          <JobSearch onSearch={(query) => setSearchQuery(query)} />
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <JobListings
            filters={filters}
            searchQuery={searchQuery}
            category={category}
          />
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
