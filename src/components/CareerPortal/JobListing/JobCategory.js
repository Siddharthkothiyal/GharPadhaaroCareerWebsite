import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Filters Component
const JobFilter = ({ filters, onFilterChange }) => {
  const locations = ["", "Menlo Park, CA", "New York, NY", "Seattle, WA", "London, UK", "Dublin, Ireland", "Singapore", "Remote"];
  const teams = ["", "Artificial Intelligence", "Software Engineering", "Data Science", "Product Management", "Design", "Research", "Infrastructure", "Security", "Marketing", "Sales", "Legal"];
  const jobTypes = ["", "Full-time", "Internship", "Contract", "Part-time"];
  const experienceLevels = ["", "Internship", "New Grad", "Entry Level", "Mid Level", "Senior Level", "Director", "Executive"];

  return (
    <div className="space-y-6 sticky top-6">
      <h2 className="text-xl font-semibold text-gray-700">Filters</h2>

      <div>
        <label className="block font-medium mb-1">Location</label>
        <select
          value={filters.location}
          onChange={(e) => onFilterChange("location", e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">All Locations</option>
          {locations.filter(Boolean).map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Team</label>
        <select
          value={filters.team}
          onChange={(e) => onFilterChange("team", e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">All Teams</option>
          {teams.filter(Boolean).map((team) => (
            <option key={team} value={team}>{team}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Job Type</label>
        <select
          value={filters.jobType}
          onChange={(e) => onFilterChange("jobType", e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">All Job Types</option>
          {jobTypes.filter(Boolean).map((jt) => (
            <option key={jt} value={jt}>{jt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Experience Level</label>
        <select
          value={filters.experience}
          onChange={(e) => onFilterChange("experience", e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">All Experience Levels</option>
          {experienceLevels.filter(Boolean).map((el) => (
            <option key={el} value={el}>{el}</option>
          ))}
        </select>
      </div>

      <button
        onClick={() => {
          onFilterChange("location", "");
          onFilterChange("team", "");
          onFilterChange("jobType", "");
          onFilterChange("experience", "");
        }}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded mt-4"
      >
        Clear All Filters
      </button>
    </div>
  );
};

// Search Component
const JobSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search job titles, keywords..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow border border-gray-300 rounded-md p-2"
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-md font-semibold">
        Search
      </button>
    </form>
  );
};

// Listings Component
const JobListings = ({ filters, searchQuery, category }) => {
  const jobs = [
    { id: 1, title: "AI Research Scientist", team: "Artificial Intelligence", location: "Menlo Park, CA", jobType: "Full-time", experience: "Senior Level", description: "Advance ML techniques in Meta research.", datePosted: "2023-05-15", category: "engineering" },
    { id: 2, title: "Software Engineer Intern", team: "Software Engineering", location: "Seattle, WA", jobType: "Internship", experience: "Internship", description: "Work on real projects as a software intern.", datePosted: "2023-06-01", category: "engineering" },
    { id: 3, title: "Data Scientist", team: "Data Science", location: "London, UK", jobType: "Full-time", experience: "Entry Level", description: "Analyze data for strategic decisions.", datePosted: "2023-05-28", category: "engineering" },
    { id: 4, title: "UX Designer", team: "Design", location: "New York, NY", jobType: "Full-time", experience: "Mid Level", description: "Create UI/UX experiences.", datePosted: "2023-05-20", category: "design" },
    { id: 5, title: "Product Manager", team: "Product Management", location: "Remote", jobType: "Full-time", experience: "Senior Level", description: "Drive product development.", datePosted: "2023-05-25", category: "product" },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory = !category || job.category?.toLowerCase() === category.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      matchesCategory &&
      matchesSearch &&
      (filters.location === "" || job.location === filters.location) &&
      (filters.team === "" || job.team === filters.team) &&
      (filters.jobType === "" || job.jobType === filters.jobType) &&
      (filters.experience === "" || job.experience === filters.experience)
    );
  });

  if (filteredJobs.length === 0)
    return <p className="text-center text-gray-600 mt-10">No jobs found.</p>;

  return (
    <div className="space-y-6">
      {filteredJobs.map((job) => (
        <article key={job.id} className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
          <p className="text-sm text-gray-600">
            Team: {job.team} | Location: {job.location}
          </p>
          <p className="text-sm text-gray-600">
            Type: {job.jobType} | Experience: {job.experience}
          </p>
          <p className="mt-2 text-gray-700">{job.description}</p>
          <p className="mt-1 text-xs text-gray-500">Posted on {new Date(job.datePosted).toLocaleDateString()}</p>
          <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded font-semibold">
            Apply Now
          </button>
        </article>
      ))}
    </div>
  );
};

// Main Component
const JobCategory = () => {
  const { category } = useParams();

  const [filters, setFilters] = useState({
    location: "",
    team: "",
    jobType: "",
    experience: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-[1200px] mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            {category.charAt(0).toUpperCase() + category.slice(1)} Jobs
          </h1>
          <p className="text-gray-600 mt-2">Explore exciting roles in {category.toLowerCase()}.</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-72 bg-white rounded-lg shadow p-6 sticky top-6 self-start h-fit max-h-[80vh] overflow-y-auto">
            <JobFilter filters={filters} onFilterChange={handleFilterChange} />
          </aside>

          <main className="flex-1 space-y-6">
            <section className="bg-white rounded-lg shadow p-6 max-w-full">
              <JobSearch onSearch={setSearchQuery} />
            </section>

            <section className="bg-white rounded-lg shadow p-6">
              <JobListings filters={filters} searchQuery={searchQuery} category={category} />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
