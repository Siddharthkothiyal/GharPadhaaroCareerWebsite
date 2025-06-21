import React from "react";

const internships = [
  {
    title: "Frontend Developer Intern",
    company: "TechSpark Pvt. Ltd.",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹10,000/month",
    deadline: "30 June 2025",
  },
  {
    title: "Backend Developer Intern",
    company: "CodeCrafters Inc.",
    location: "Bangalore",
    duration: "6 Months",
    stipend: "₹15,000/month",
    deadline: "5 July 2025",
  },
  {
    title: "UI/UX Designer Intern",
    company: "PixelSense Studio",
    location: "Delhi (Hybrid)",
    duration: "4 Months",
    stipend: "₹12,000/month",
    deadline: "28 June 2025",
  },
  {
    title: "Data Analyst Intern",
    company: "InsightIQ Analytics",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹18,000/month",
    deadline: "1 July 2025",
  },
  {
    title: "Digital Marketing Intern",
    company: "BrandWaves",
    location: "Mumbai",
    duration: "2 Months",
    stipend: "₹8,000/month",
    deadline: "25 June 2025",
  },
];

const Internships = () => {
  return (
    <section id="internships" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Internship Opportunities
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {internships.map((intern, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-6 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-1">{intern.title}</h3>
              <p className="text-gray-600 mb-2">{intern.company}</p>

              <div className="text-sm text-gray-700 space-y-1 mb-4">
                <p><strong>📍 Location:</strong> {intern.location}</p>
                <p><strong>⏳ Duration:</strong> {intern.duration}</p>
                <p><strong>💰 Stipend:</strong> {intern.stipend}</p>
                <p><strong>🗓️ Deadline:</strong> {intern.deadline}</p>
              </div>

              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
