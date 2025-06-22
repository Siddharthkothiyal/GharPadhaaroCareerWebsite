import React from "react";
import { FaRupeeSign, FaCalendarAlt, FaUserGraduate } from "react-icons/fa";

const Scholarships = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#525599] mb-16 transition-opacity duration-700 animate-fade-in">
          Scholarships for Students
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "🎓 GharPadharo Women in Tech Scholarship",
              desc: "Supporting young women pursuing degrees in computer science or related fields.",
              amount: "₹50,000",
              deadline: "August 15, 2025",
              eligibility: "Female students in 2nd or 3rd year B.Tech",
            },
            {
              title: "🌟 Need-Based Scholarship Program",
              desc: "For students from low-income backgrounds excelling in academics and innovation.",
              amount: "₹75,000",
              deadline: "September 1, 2025",
              eligibility: "All UG students in India",
            },
            {
              title: "🚀 First-Gen Scholar Grant",
              desc: "For students who are the first in their families to attend college.",
              amount: "₹60,000",
              deadline: "July 30, 2025",
              eligibility: "Special mentorship included",
            },
          ].map((scholarship, idx) => (
            <div
              key={idx}
              className="bg-[#f0f0ff] rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 animate-fade-in"
            >
              <h3 className="text-xl font-bold text-[#525599] mb-3 hover:text-[#3f418d] transition-colors duration-200">
                {scholarship.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {scholarship.desc}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600 hover:text-[#3f418d] transition duration-200">
                  <FaRupeeSign className="text-[#525599] group-hover:scale-110 transition-transform duration-200" />
                  Amount: {scholarship.amount}
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-[#3f418d] transition duration-200">
                  <FaCalendarAlt className="text-[#525599] group-hover:scale-110 transition-transform duration-200" />
                  Deadline: {scholarship.deadline}
                </div>
                <div className="flex items-center gap-2 text-gray-600 hover:text-[#3f418d] transition duration-200">
                  <FaUserGraduate className="text-[#525599] group-hover:scale-110 transition-transform duration-200" />
                  {scholarship.eligibility}
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
