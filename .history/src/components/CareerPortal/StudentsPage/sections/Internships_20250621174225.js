import React from "react";

const internshipData = [
  {
    title: "Frontend Developer Intern",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹10,000/month",
  },
  {
    title: "Backend Developer Intern",
    location: "Bangalore",
    duration: "6 Months",
    stipend: "₹15,000/month",
  },
  {
    title: "Digital Marketing Intern",
    location: "Mumbai",
    duration: "2 Months",
    stipend: "₹8,000/month",
  },
  {
    title: "UI/UX Design Intern",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹12,000/month",
  },
  {
    title: "Data Science Intern",
    location: "Delhi",
    duration: "6 Months",
    stipend: "₹18,000/month",
  },
];

const Internships = () => {
  return (
    <section id="internships" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Internship Opportunities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {internshipData.map((internship, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                {internship.title}
              </h3>
              <p className="text-gray-700">
                <span className="font-medium">📍 Location:</span> {internship.location}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">⏳ Duration:</span> {internship.duration}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">💸 Stipend:</span> {internship.stipend}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
