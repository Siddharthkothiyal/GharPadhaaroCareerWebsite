import React from 'react';

const Internships = () => {
  const handleScrollToJobs = () => {
    const section = document.getElementById('fresher-jobs');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="internships"
      className="relative overflow-hidden py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-tr from-white via-blue-50 to-purple-50 font-sans"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 opacity-20 rounded-full -z-10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100 opacity-20 rounded-full -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#41447d] mb-4 tracking-tight">
          🚀 Internships & Career Growth at GharPadharo
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          Learn by doing, grow with support, and explore your career with structured opportunities that matter.
        </p>

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-14 mb-24">
          <div className="lg:w-1/2 text-left animate-fade-in-up">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#525599] mb-5">
              🎯 Why Start with an Internship?
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At <strong>GharPadharo</strong>, internships are more than tasks — they’re launchpads. You contribute to real product teams,
              not hypothetical scenarios.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              From graduates to non-graduates, we guide every passionate learner toward clarity, capability, and confidence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 text-base">
              <p>🌐 Real-world project exposure</p>
              <p>🧑‍🏫 1-on-1 mentorship</p>
              <p>🕒 Flexible remote options</p>
              <p>📜 Certification & references</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img
              src="/career_path2.png"
              alt="Career Path 2"
              className="rounded-3xl shadow-2xl w-full max-w-md mx-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-14 mb-24">
          <div className="lg:w-1/2 text-left animate-fade-in-up">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#525599] mb-5">
              📈 What Comes After the Internship?
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Most interns transition into full-time roles with us or our hiring network. We help shape careers through
              continuous mentorship and real deliverables.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Here's your growth journey at a glance:
            </p>
            <ol className="text-gray-700 text-base list-decimal list-inside space-y-1">
              <li>🚀 Intern — Learn & collaborate</li>
              <li>👨‍💻 Junior — Deliver with support</li>
              <li>🧠 Contributor — Own real features</li>
              <li>🧭 Lead — Guide projects & people</li>
              <li>🏆 Expert — Innovate & inspire others</li>
            </ol>
          </div>

          <div className="lg:w-1/2">
            <img
              src="/career_path1.jpg"
              alt="Career Path 1"
              className="rounded-3xl shadow-2xl w-full max-w-md mx-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-700 text-xl font-medium mb-4">
            💡 Ready to take the next step? Discover openings waiting for you.
          </p>
          <button
            onClick={handleScrollToJobs}
            className="inline-block px-10 py-3 bg-gradient-to-r from-[#525599] to-[#6d70b3] text-white font-semibold text-lg rounded-full hover:scale-105 transition-all shadow-md"
          >
            View Fresher Job Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Internships;
