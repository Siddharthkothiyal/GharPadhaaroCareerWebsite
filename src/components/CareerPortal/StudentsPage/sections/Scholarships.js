import React from "react";
import { FaRupeeSign, FaCalendarAlt, FaUserGraduate } from "react-icons/fa";

const Scholarships = () => {
  const scholarships = [
    {
      title: " GharPadharo Women in Tech Scholarship",
      desc: "Supporting young women pursuing degrees in computer science or related fields.",
      amount: "₹50,000",
      deadline: "August 15, 2025",
      eligibility: "Female students in 2nd or 3rd year B.Tech",
    },
    {
      title: " Need-Based Scholarship Program",
      desc: "For students from low-income backgrounds excelling in academics and innovation.",
      amount: "₹75,000",
      deadline: "September 1, 2025",
      eligibility: "All UG students in India",
    },
    {
      title: " First-Gen Scholar Grant",
      desc: "For students who are the first in their families to attend college.",
      amount: "₹60,000",
      deadline: "July 30, 2025",
      eligibility: "Special mentorship included",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-100 relative overflow-hidden">
      {/* Decorative Blur Lights */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#42447c] mb-16 animate-fade-in-down">
           Scholarships for Students
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {scholarships.map((scholar, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl hover:border-[#525599] transform transition duration-500 hover:scale-[1.03] hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <h3 className="text-xl font-semibold text-[#3f418d] mb-3 group-hover:text-[#2f315d] transition duration-300">
                {scholar.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {scholar.desc}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600 group-hover:text-[#3f418d] transition-all duration-200">
                  <FaRupeeSign className="text-[#525599] animate-pulse" />
                  <span>Amount: {scholar.amount}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 group-hover:text-[#3f418d] transition-all duration-200">
                  <FaCalendarAlt className="text-[#525599] animate-spin-slow" />
                  <span>Deadline: {scholar.deadline}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 group-hover:text-[#3f418d] transition-all duration-200">
                  <FaUserGraduate className="text-[#525599] animate-bounce-slow" />
                  <span>{scholar.eligibility}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scholarships;
