import React from "react";
import { FaLaptopCode, FaRocket, FaUsers } from "react-icons/fa";

const Mentorship = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-[#f7f7ff] to-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-[#525599] mb-16">
       Mentorship Programs
    </h2>

    <div className="grid md:grid-cols-3 gap-12">
      {/* Mentorship Card 1 */}
      <div className="flex flex-col items-center relative">
        <div className="w-40 h-40 rounded-full bg-[#e0e0ff] flex items-center justify-center text-5xl text-[#525599] shadow-md">
          <FaLaptopCode />
        </div>
        <div className="mt-6 bg-white p-6 rounded-2xl shadow-md w-full max-w-sm -translate-y-8 z-10">
          <h3 className="text-xl font-semibold text-[#525599] mb-2">
            Tech Mentorship Bootcamp
          </h3>
          <p className="text-gray-700 text-sm mb-3 leading-relaxed">
            One-on-one guidance from industry experts in dev & data science.
          </p>
          <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
            <li>Duration: 8 weeks</li>
            <li>Mode: Virtual</li>
            <li>Start: August 5, 2025</li>
          </ul>
        </div>
      </div>

      {/* Mentorship Card 2 */}
      <div className="flex flex-col items-center relative">
        <div className="w-40 h-40 rounded-full bg-[#e0e0ff] flex items-center justify-center text-5xl text-[#525599] shadow-md">
          <FaRocket />
        </div>
        <div className="mt-6 bg-white p-6 rounded-2xl shadow-md w-full max-w-sm -translate-y-8 z-10">
          <h3 className="text-xl font-semibold text-[#525599] mb-2">
            Career Readiness Mentorship
          </h3>
          <p className="text-gray-700 text-sm mb-3 leading-relaxed">
            Career prep with real mock interviews and mentor insights.
          </p>
          <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
            <li>Mentors: Google, TCS, Accenture</li>
            <li>Free for selected</li>
            <li>Apply by: July 28, 2025</li>
          </ul>
        </div>
      </div>

      {/* Mentorship Card 3 */}
      <div className="flex flex-col items-center relative">
        <div className="w-40 h-40 rounded-full bg-[#e0e0ff] flex items-center justify-center text-5xl text-[#525599] shadow-md">
          <FaUsers />
        </div>
        <div className="mt-6 bg-white p-6 rounded-2xl shadow-md w-full max-w-sm -translate-y-8 z-10">
          <h3 className="text-xl font-semibold text-[#525599] mb-2">
            Women in Leadership
          </h3>
          <p className="text-gray-700 text-sm mb-3 leading-relaxed">
            For female students passionate about leading in tech & beyond.
          </p>
          <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
            <li>Soft Skills + Growth Plan</li>
            <li>6-week program</li>
            <li>Exclusive for women</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Mentorship;
