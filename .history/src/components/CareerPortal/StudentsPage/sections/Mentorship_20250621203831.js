import React from "react";

const Mentorship = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Mentorship Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Mentorship 1 */}
          <div className="bg-purple-50 rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Tech Mentorship Bootcamp
            </h3>
            <p className="text-gray-700 mb-4">
              Get one-on-one guidance from industry professionals in software engineering and data science.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Duration: 8 weeks</li>
              <li>Mode: Virtual</li>
              <li>Start Date: August 5, 2025</li>
            </ul>
          </div>

          {/* Mentorship 2 */}
          <div className="bg-purple-50 rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Career Readiness Mentorship
            </h3>
            <p className="text-gray-700 mb-4">
              Prepare for interviews, build a career plan, and gain professional confidence.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Mentors from Google, TCS, and Accenture</li>
              <li>Free for selected students</li>
              <li>Applications open till July 28, 2025</li>
            </ul>
          </div>

          {/* Mentorship 3 */}
          <div className="bg-purple-50 rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Women in Leadership Mentorship
            </h3>
            <p className="text-gray-700 mb-4">
              Empowering women to take charge and lead in tech, business, and innovation.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Focus: Soft skills + Career progression</li>
              <li>Duration: 6 weeks</li>
              <li>Exclusive for female students</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
