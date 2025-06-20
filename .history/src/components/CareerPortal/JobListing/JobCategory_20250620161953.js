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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {category.charAt(0).toUpperCase() + category.slice(1)} Jobs
          </h1>
          <p className="mt-2 text-gray-500 text-lg">
            Explore opportunities in {category.toLowerCase()} with tailored roles that fit your passion.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 bg-white rounded-2xl shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Filters</h2>
            <JobFilter filters={filters} onFilterChange={handleFilterChange} />
          </aside>

          {/* Main Section */}
          <main className="lg:col-span-3 space-y-6">
            {/* Search Box */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <JobSearch onSearch={(query) => setSearchQuery(query)} />
            </div>

            {/* Job Listings */}
            <div className="bg-white rounded-2xl shadow-md p-6">
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
