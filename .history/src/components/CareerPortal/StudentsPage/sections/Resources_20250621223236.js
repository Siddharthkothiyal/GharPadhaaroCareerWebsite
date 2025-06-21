import React from "react";
import { FaFileAlt, FaLaptopCode, FaCertificate } from "react-icons/fa";

const Resources = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f3f4f8] to-[#eef0ff]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#3744a0] mb-16">
          📚 Learning Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Resource 1 */}
          <div className="bg-white/70 backdrop-blur-lg rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-[#3744a0]">
            <div className="flex items-center gap-4 mb-4">
              <FaFileAlt className="text-3xl text-blue-700" />
              <h3 className="text-xl font-bold text-[#3744a0]">
                Resume & Portfolio Guides
              </h3>
            </div>
            <p className="text-gray-700 text-sm mb-6">
              Learn to create a resume that stands out and a portfolio that speaks for your skills.
            </p>
            <a
              href="https://example.com/resume-guide"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm font-medium bg-[#525599] text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              View Resource →
            </a>
          </div>

          {/* Resource 2 */}
          <div className="bg-white/70 backdrop-blur-lg rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-300">
            <div className="flex items-center gap-4 mb-4">
              <FaLaptopCode className="text-3xl text-blue-700" />
              <h3 className="text-xl font-bold text-[#3744a0]">
                Interview Preparation Kits
              </h3>
            </div>
            <p className="text-gray-700 text-sm mb-6">
              Practice with aptitude, DSA, behavioral rounds, and coding exercises.
            </p>
            <a
              href="https://example.com/interview-prep"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm font-medium bg-[#525599] text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Start Preparing →
            </a>
          </div>

          {/* Resource 3 */}
          <div className="bg-white/70 backdrop-blur-lg rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-300">
            <div className="flex items-center gap-4 mb-4">
              <FaCertificate className="text-3xl text-blue-700" />
              <h3 className="text-xl font-bold text-[#3744a0]">
                Free Courses & Certifications
              </h3>
            </div>
            <p className="text-gray-700 text-sm mb-6">
              Explore curated free courses in AI, Web Development, and other in-demand skills.
            </p>
            <a
              href="https://example.com/free-courses"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm font-medium bg-[#525599] text-white py-2 px-4 rounded hover:bg-blue-700 transition"
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
