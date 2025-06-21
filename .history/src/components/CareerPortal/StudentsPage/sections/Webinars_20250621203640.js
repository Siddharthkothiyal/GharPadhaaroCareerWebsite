import React from "react";

const Webinars = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Upcoming Career Webinars
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Webinar 1 */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Cracking Your First Tech Interview
            </h3>
            <p className="text-gray-700 mb-4">
              Learn how to approach technical interviews, build confidence, and tackle common coding rounds.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Date: July 10, 2025</li>
              <li>Speaker: Senior Engineer @ Meta</li>
              <li>Free Registration</li>
            </ul>
          </div>

          {/* Webinar 2 */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Building Your LinkedIn & Resume
            </h3>
            <p className="text-gray-700 mb-4">
              Stand out with a professional online presence. Tips from recruiters and hiring managers.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Date: July 18, 2025</li>
              <li>Speaker: Talent Head @ Flipkart</li>
              <li>Live Q&A Session</li>
            </ul>
          </div>

          {/* Webinar 3 */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Careers in Data Science
            </h3>
            <p className="text-gray-700 mb-4">
              A roadmap for entering the field of data analytics, ML, and AI – ideal for freshers.
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Date: July 24, 2025</li>
              <li>Speaker: Lead DS @ Amazon</li>
              <li>Recorded Session Available</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webinars;
