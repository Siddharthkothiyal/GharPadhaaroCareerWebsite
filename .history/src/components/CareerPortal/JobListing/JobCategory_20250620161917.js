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
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {category.charAt(0).toUpperCase() + category.slice(1)} Jobs
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar (Filters) */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-xl shadow p-4">
              <JobFilter filters={filters} onFilterChange={handleFilterChange} />
            </div>
          </div>

          {/* Main Content (Search + Listings) */}
          <div className="w-full lg:w-2/3 space-y-6">
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
      </div>
    </div>
  );
};

export default JobCategory;
