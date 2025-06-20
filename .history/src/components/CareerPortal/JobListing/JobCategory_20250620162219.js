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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            {category.charAt(0).toUpperCase() + category.slice(1)} Jobs
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            Discover tailored opportunities in {category.toLowerCase()}.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters - 1/5 width on large screens */}
          <aside className="lg:w-1/5 w-full bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Filters</h2>
            <JobFilter filters={filters} onFilterChange={handleFilterChange} />
          </aside>

          {/* Main content - 4/5 width on large screens */}
          <main className="lg:w-4/5 w-full flex flex-col gap-6">
            {/* Search */}
            <div className="bg-white rounded-xl shadow p-4">
              <JobSearch onSearch={(query) => setSearchQuery(query)} />
            </div>

            {/* Listings */}
            <div className="bg-white rounded-xl shadow p-4">
              <JobListings
                filters={filters}
                searchQuery={searchQuery}
                category={category}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
