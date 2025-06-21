import React from "react";

const Hackathon = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Hackathons & Innovation Challenges
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Hackathon 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              CodeSprint 2025
            </h3>
            <p className="text-gray-700 mb-4">
              A 36-hour online coding marathon where participants solve algorithmic and real-world problems. Top teams get job interviews and prizes.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Cash prizes up to ₹1,00,000</li>
              <li>Problem-solving + system design rounds</li>
              <li>Open to all college students</li>
            </ul>
          </div>

          {/* Hackathon 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Women in Tech Hackathon
            </h3>
            <p className="text-gray-700 mb-4">
              A tech-for-good event focused on encouraging female coders to build impactful solutions. Winners get fast-tracked interviews.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Mentorship by women leaders in tech</li>
              <li>Team collaboration encouraged</li>
              <li>Scholarships and internship offers</li>
            </ul>
          </div>

          {/* Hackathon 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              GharPadhaaro BuildFest
            </h3>
            <p className="text-gray-700 mb-4">
              A product + business hackathon to solve challenges for Uttarakhand’s local communities using AI, mobile, or web solutions.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Live pitch to investors & hiring panel</li>
              <li>Build solutions for real-world problems</li>
              <li>Internships with GharPadhaaro team</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
