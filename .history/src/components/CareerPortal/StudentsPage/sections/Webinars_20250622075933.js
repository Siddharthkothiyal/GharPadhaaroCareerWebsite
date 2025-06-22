import React from "react";

const Webinars = () => {
  return (
    <section className="py-20 px-4 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-[#525599] mb-16">
      Upcoming Career Webinars
    </h2>

    <div className="relative border-l-4 border-[#525599] space-y-10">
      {/* Webinar 1 */}
      <div className="relative pl-6">
        <div className="absolute w-4 h-4 bg-[#525599] rounded-full -left-2 top-2"></div>
        <div className="bg-[#f0f0ff] p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-[#525599] mb-1">
            Cracking Your First Tech Interview
          </h3>
          <p className="text-sm text-gray-600 mb-2">July 10, 2025 | Senior Engineer @ Meta</p>
          <p className="text-gray-700 text-sm mb-3 leading-relaxed">
            Learn how to approach technical interviews, build confidence, and tackle common coding rounds.
          </p>
          <span className="text-xs bg-[#525599] text-white py-1 px-2 rounded">
            Free Registration
          </span>
        </div>
      </div>

      {/* Webinar 2 */}
      <div className="relative pl-6">
        <div className="absolute w-4 h-4 bg-[#525599] rounded-full -left-2 top-2"></div>
        <div className="bg-[#f0f0ff] p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-[#525599] mb-1">
            Building Your LinkedIn & Resume
          </h3>
          <p className="text-sm text-gray-600 mb-2">July 18, 2025 | Talent Head @ Flipkart</p>
          <p className="text-gray-700 text-sm mb-3 leading-relaxed">
            Stand out with a professional online presence. Tips from recruiters and hiring managers.
          </p>
          <span className="text-xs bg-[#525599] text-white py-1 px-2 rounded">
            Live Q&A Session
          </span>
        </div>
      </div>

      {/* Webinar 3 */}
      <div className="relative pl-6">
        <div className="absolute w-4 h-4 bg-[#525599] rounded-full -left-2 top-2"></div>
        <div className="bg-[#f0f0ff] p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-[#525599] mb-1">
            Careers in Data Science
          </h3>
          <p className="text-sm text-gray-600 mb-2">July 24, 2025 | Lead DS @ Amazon</p>
          <p className="text-gray-700 text-sm mb-3 leading-relaxed">
            A roadmap for entering the field of data analytics, ML, and AI – ideal for freshers.
          </p>
          <span className="text-xs bg-[#525599] text-white py-1 px-2 rounded">
            Recorded Session Available
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Webinars;
