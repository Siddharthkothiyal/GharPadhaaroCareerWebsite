import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobListings from './JobListings';
import JobFilter from './JobFilters';
import JobSearch from './JobSearch';

const JobLocation = () => {
  const { location } = useParams();

  const [filters, setFilters] = useState({
    location: location || '',
    team: '',
    jobType: '',
    experience: '',
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Capitalize location for display
  const capitalizedLocation =
    location.charAt(0).toUpperCase() + location.slice(1);

  // Update filters when URL param changes
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      location: location || '',
    }));
  }, [location]);

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Jobs in {capitalizedLocation}
          </h1>
          <p className="text-gray-600 mt-2">
            Explore exciting roles based in {capitalizedLocation}.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar (Filters) */}
          <aside
            className="w-full lg:w-72 bg-white rounded-lg shadow p-6 sticky top-6 self-start h-fit max-h-[80vh] overflow-y-auto"
            aria-label="Job filters"
          >
            <JobFilter filters={filters} onFilterChange={handleFilterChange} />
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-6">
            <section
              className="bg-white rounded-lg shadow p-6 max-w-full"
              aria-label="Job search"
            >
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

export default JobLocation;
