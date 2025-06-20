import React from 'react';

const JobFilters = ({ onFilterChange, filters }) => {
  const locations = [
    'All Locations',
    'Menlo Park, CA',
    'New York, NY',
    'Seattle, WA',
    'London, UK',
    'Dublin, Ireland',
    'Singapore',
    'Remote'
  ];

  const teams = [
    'All Teams',
    'Artificial Intelligence',
    'Software Engineering',
    'Data Science',
    'Product Management',
    'Design',
    'Research',
    'Infrastructure',
    'Security',
    'Marketing',
    'Sales',
    'Legal'
  ];

  const jobTypes = [
    'All Job Types',
    'Full-time',
    'Internship',
    'Contract',
    'Part-time'
  ];

  const experienceLevels = [
    'All Experience Levels',
    'Internship',
    'New Grad',
    'Entry Level',
    'Mid Level',
    'Senior Level',
    'Director',
    'Executive'
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <h3 className="text-xl font-semibold text-gray-800">Filters</h3>
        <button
          className="text-sm text-blue-600 hover:underline"
          onClick={() => {
            onFilterChange('location', '');
            onFilterChange('team', '');
            onFilterChange('jobType', '');
            onFilterChange('experience', '');
          }}
        >
          Clear All
        </button>
      </div>

      {/* Filter Sections */}
      <div className="space-y-4">
        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <select
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            {locations.map((location, index) => (
              <option key={index} value={location === 'All Locations' ? '' : location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Team */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Team</label>
          <select
            value={filters.team}
            onChange={(e) => onFilterChange('team', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            {teams.map((team, index) => (
              <option key={index} value={team === 'All Teams' ? '' : team}>
                {team}
              </option>
            ))}
          </select>
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
          <select
            value={filters.jobType}
            onChange={(e) => onFilterChange('jobType', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            {jobTypes.map((type, index) => (
              <option key={index} value={type === 'All Job Types' ? '' : type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
          <select
            value={filters.experience}
            onChange={(e) => onFilterChange('experience', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            {experienceLevels.map((level, index) => (
              <option key={index} value={level === 'All Experience Levels' ? '' : level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* EEO Statement */}
      <div className="text-xs text-gray-500 mt-4 border-t pt-4">
        <strong>Note:</strong> GharPadhaaro is an Equal Opportunity Employer. We welcome applicants from all backgrounds and experiences.
      </div>
    </div>
  );
};

export default JobFilters;
