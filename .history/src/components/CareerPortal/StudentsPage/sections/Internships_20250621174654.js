import React from "react";

const internships = [
  {
    title: "Frontend Developer Intern",
    company: "TechSpark Pvt. Ltd.",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹10,000/month",
    deadline: "30 June 2025",
    logo: "/logos/techspark.png",
  },
  {
    title: "Backend Developer Intern",
    company: "CodeCrafters Inc.",
    location: "Bangalore, India",
    duration: "6 Months",
    stipend: "₹15,000/month",
    deadline: "5 July 2025",
    logo: "/logos/codecrafters.png",
  },
  {
    title: "UI/UX Designer Intern",
    company: "PixelSense Studio",
    location: "Delhi (Hybrid)",
    duration: "4 Months",
    stipend: "₹12,000/month",
    deadline: "28 June 2025",
    logo: "/logos/pixelsense.png",
  },
];

const Internships = () => {
  return (
    <section id="internships" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Internship Opportunities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((intern, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={intern.logo}
                  alt={`${intern.company} logo`}
                  className="w-12 h-12 object-contain mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {intern.title}
                  </h3>
                  <p className="text-sm text-gray-500">{intern.company}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-2">
                📍 <span className="font-medium">{intern.location}</span>
              </p>

              <div className="flex flex-wrap gap-2 text-sm mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  ⏳ {intern.duration}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                  💰 {intern.stipend}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  🗓️ Apply by {intern.deadline}
                </span>
              </div>

              <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-md transition duration-200 w-full">
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
