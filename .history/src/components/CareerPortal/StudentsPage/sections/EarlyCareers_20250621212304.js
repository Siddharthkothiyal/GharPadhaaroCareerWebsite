import React from "react";

const EarlyCareers = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Early Career Programs
        </h2>

        <div className="space-y-6">
          {/* Card 1 */}
          <div className="bg-blue-50 rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Graduate Trainee Program
            </h3>
            <p className="text-gray-700 mb-4">
              A 6-month structured onboarding program for fresh graduates to explore roles in software, product, and analytics.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>One-on-one mentorship</li>
              <li>Cross-functional project exposure</li>
              <li>Career development workshops</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-50 rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Leadership Launchpad
            </h3>
            <p className="text-gray-700 mb-4">
              A 12-month rotational program for early-career professionals interested in team leadership and management tracks.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Rotations across 3 departments</li>
              <li>Executive mentorship</li>
              <li>Performance-based fast track roles</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-50 rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Tech Foundation Bootcamp
            </h3>
            <p className="text-gray-700 mb-4">
              A 10-week intensive bootcamp for coding, system design, and tech stack mastery – ideal for engineers in their first year.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Hands-on coding assignments</li>
              <li>Tech talks by senior engineers</li>
              <li>Placement into core product teams</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyCareers;
