import React from 'react';
import './JobFilters.css';

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
    <div className="job-filters">
      <div className="filter-header">
        <h3>Filters</h3>
        <button 
          className="clear-filters" 
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

      <div className="filter-section">
        <h4>Location</h4>
        <select 
          value={filters.location} 
          onChange={(e) => onFilterChange('location', e.target.value)}
          className="filter-select"
        >
          {locations.map((location, index) => (
            <option key={index} value={location === 'All Locations' ? '' : location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <h4>Team</h4>
        <select 
          value={filters.team} 
          onChange={(e) => onFilterChange('team', e.target.value)}
          className="filter-select"
        >
          {teams.map((team, index) => (
            <option key={index} value={team === 'All Teams' ? '' : team}>
              {team}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <h4>Job Type</h4>
        <select 
          value={filters.jobType} 
          onChange={(e) => onFilterChange('jobType', e.target.value)}
          className="filter-select"
        >
          {jobTypes.map((type, index) => (
            <option key={index} value={type === 'All Job Types' ? '' : type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <h4>Experience Level</h4>
        <select 
          value={filters.experience} 
          onChange={(e) => onFilterChange('experience', e.target.value)}
          className="filter-select"
        >
          {experienceLevels.map((level, index) => (
            <option key={index} value={level === 'All Experience Levels' ? '' : level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <h4>Equal Employment Opportunity</h4>
        <p className="eeo-statement">
          Meta is proud to be an Equal Employment Opportunity and Affirmative Action employer. We do not discriminate based upon race, religion, color, national origin, sex, sexual orientation, gender identity, age, status as a protected veteran, status as an individual with a disability, or other applicable legally protected characteristics.
        </p>
      </div>
    </div>
  );
};

export default JobFilters;