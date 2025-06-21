import React from "react";

const Resources = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Learning Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Resource 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Resume & Portfolio Guides
            </h3>
            <p className="text-gray-700 mb-4">
              Learn how to build a compelling resume and showcase your work effectively through portfolios.
            </p>
            <a
              href="https://example.com/resume-guide"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-600 underline"
            >
              View Resource →
            </a>
          </div>

          {/* Resource 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Interview Preparation Kits
            </h3>
            <p className="text-gray-700 mb-4">
              Access curated resources for aptitude, technical interviews, and behavioral rounds.
            </p>
            <a
              href="https://example.com/interview-prep"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-600 underline"
            >
              Start Preparing →
            </a>
          </div>

          {/* Resource 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Free Courses & Certifications
            </h3>
            <p className="text-gray-700 mb-4">
              Browse platforms offering free upskilling in AI, Web Dev, Data Science & more.
            </p>
            <a
              href="https://example.com/free-courses"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-600 underline"
            >
              Explore Courses →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
