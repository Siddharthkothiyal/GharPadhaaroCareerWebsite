import React from "react";
import { FaRupeeSign, FaCalendarAlt, FaUserGraduate } from "react-icons/fa";

const Scholarships = () => {
  return (
    <section className="py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-[#525599] mb-16">
      Scholarships for Students
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Scholarship 1 */}
      <div className="bg-[#f0f0ff] rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-xl font-bold text-[#525599] mb-3">
          🎓 GharPadharo Women in Tech Scholarship
        </h3>
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          Supporting young women pursuing degrees in computer science or related fields.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <FaRupeeSign className="text-[#525599]" />
            Amount: ₹50,000
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaCalendarAlt className="text-[#525599]" />
            Deadline: August 15, 2025
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaUserGraduate className="text-[#525599]" />
            Eligibility: Female students in 2nd or 3rd year B.Tech
          </div>
        </div>
      </div>

      {/* Scholarship 2 */}
      <div className="bg-[#f0f0ff] rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-xl font-bold text-[#525599] mb-3">
          🌟 Need-Based Scholarship Program
        </h3>
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          For students from low-income backgrounds excelling in academics and innovation.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <FaRupeeSign className="text-[#525599]" />
            Amount: ₹75,000
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaCalendarAlt className="text-[#525599]" />
            Deadline: September 1, 2025
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaUserGraduate className="text-[#525599]" />
            Open to: All UG students in India
          </div>
        </div>
      </div>

      {/* Scholarship 3 */}
      <div className="bg-[#f0f0ff] rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-xl font-bold text-[#525599] mb-3">
          🚀 First-Gen Scholar Grant
        </h3>
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          For students who are the first in their families to attend college.
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <FaRupeeSign className="text-[#525599]" />
            Amount: ₹60,000
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaCalendarAlt className="text-[#525599]" />
            Deadline: July 30, 2025
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaUserGraduate className="text-[#525599]" />
            Special mentorship included
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Scholarships;
