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
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            {category.charAt(0).toUpperCase() + category.slice(1)} Jobs
          </h1>
          <p className="text-gray-600 mt-2">
            Explore exciting roles in {category.toLowerCase()}.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar (1 column out of 5) */}
          <aside className="col-span-1 bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Filters</h2>
            <JobFilter filters={filters} onFilterChange={handleFilterChange} />
          </aside>

          {/* Main Content (4 columns out of 5) */}
          <main className="col-span-1 lg:col-span-4 space-y-6">
            {/* Search */}
            <div className="bg-white rounded-lg shadow p-4">
              <JobSearch onSearch={(query) => setSearchQuery(query)} />
            </div>

            {/* Listings */}
            <div className="bg-white rounded-lg shadow p-4">
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
