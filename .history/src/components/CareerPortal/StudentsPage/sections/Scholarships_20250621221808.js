import React from "react";

const Scholarships = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#525599] mb-10">
          Scholarships for Students
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Scholarship 1 */}
          <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#525599] mb-2">
              GharPadharo Women in Tech Scholarship
            </h3>
            <p className="text-gray-700 mb-4">
              Supporting young women pursuing degrees in computer science or related fields.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Amount: ₹50,000</li>
              <li>Deadline: August 15, 2025</li>
              <li>Eligibility: Female students in 2nd or 3rd year B.Tech</li>
            </ul>
          </div>

          {/* Scholarship 2 */}
          <div className=" rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#525599] mb-2">
              Need-Based Scholarship Program
            </h3>
            <p className="text-gray-700 mb-4">
              For students from low-income backgrounds excelling in academics and innovation.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Amount: ₹75,000</li>
              <li>Deadline: September 1, 2025</li>
              <li>Open to: All UG students in India</li>
            </ul>
          </div>

          {/* Scholarship 3 */}
          <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#525599] mb-2">
              First-Gen Scholar Grant
            </h3>
            <p className="text-gray-700 mb-4">
              For students who are the first in their families to attend college.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Amount: ₹60,000</li>
              <li>Deadline: July 30, 2025</li>
              <li>Special mentorship included</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarships;
