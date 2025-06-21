import React from "react";
import { FaChalkboardTeacher, FaBriefcase, FaUserTie } from "react-icons/fa";

const Mentorship = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#525599] mb-12">
          🚀 Mentorship Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mentorship 1 */}
          <div className="border-l-4 border-[#525599] bg-[#f0f0ff] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <FaChalkboardTeacher className="text-[#525599] text-2xl" />
              <h3 className="text-xl font-bold text-[#525599]">
                Tech Mentorship Bootcamp
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              One-on-one guidance from industry pros in software and data science.
            </p>
            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex gap-2">
                <span className="font-semibold">Duration:</span> 8 weeks
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Mode:</span> Virtual
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Start:</span> Aug 5, 2025
              </div>
            </div>
          </div>

          {/* Mentorship 2 */}
          <div className="border-l-4 border-[#525599] bg-[#f0f0ff] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <FaBriefcase className="text-[#525599] text-2xl" />
              <h3 className="text-xl font-bold text-[#525599]">
                Career Readiness Mentorship
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Prepare for interviews, build a career plan, and gain confidence.
            </p>
            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex gap-2">
                <span className="font-semibold">Mentors:</span> Google, TCS, Accenture
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Cost:</span> Free for selected
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Apply By:</span> July 28, 2025
              </div>
            </div>
          </div>

          {/* Mentorship 3 */}
          <div className="border-l-4 border-[#525599] bg-[#f0f0ff] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <FaUserTie className="text-[#525599] text-2xl" />
              <h3 className="text-xl font-bold text-[#525599]">
                Women in Leadership Mentorship
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Empowering women to lead in tech, business, and innovation.
            </p>
            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex gap-2">
                <span className="font-semibold">Focus:</span> Soft skills & leadership
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Duration:</span> 6 weeks
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Eligibility:</span> Female students only
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
