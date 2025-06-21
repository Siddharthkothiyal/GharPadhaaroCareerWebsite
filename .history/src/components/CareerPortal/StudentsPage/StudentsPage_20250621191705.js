// src/components/CareerPortal/StudentsPage/StudentsPage.js

import React, { useState } from "react";
import JobFilters from "../JobListing/JobFilters";

import JobListings from "../JobListing/JobListings";
import "./StudentsPage.css";

const StudentsPage = () => {
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="students-container">
      {/* Internship Opportunities Section */}
      <section className="job-search-section" id="internships">
        <div className="container">
          <div className="filters-and-results">
            <JobFilters onFilterChange={handleFilterChange} filters={filters} />
            <JobListings searchQuery={searchQuery} filters={filters} />
          </div>
        </div>
      </section>

      {/* Other student-related sections can go below */}
    </div>
  );
};

export default StudentsPage;
