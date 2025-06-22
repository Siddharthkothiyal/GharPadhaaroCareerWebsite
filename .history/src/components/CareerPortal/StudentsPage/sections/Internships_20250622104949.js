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
      className="py-24 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-white via-gray-50 to-white font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#41447d] mb-16 tracking-tight">
          🌟 Internships & Career Growth at GharPadharo
        </h2>

        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-14 mb-24">
          <div className="lg:w-1/2 text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#525599] mb-5">
              Why Start with an Internship?
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At <strong>GharPadharo</strong>, internships are your first step toward a successful career. We don’t offer coffee-fetching roles —
              we offer opportunities to contribute to real, impactful projects from Day 1.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Whether you're a <strong>graduate</strong>, <strong>non-graduate</strong>, or <strong>career switcher</strong>, we help you build skills, confidence,
              and clarity in your professional journey.
            </p>
            <ul className="text-gray-700 text-base space-y-2 list-disc list-inside">
              <li>🌐 Real-world, team-based projects</li>
              <li>🧑‍🏫 Mentorship & learning support</li>
              <li>🕒 Remote & flexible timing options</li>
              <li>📜 Certification & hiring recommendations</li>
            </ul>
          </div>

          <div className="lg:w-1/2">
            <img
              src="/career_path1.jpg"
              alt="Career Path 1"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-14 mb-24">
          <div className="lg:w-1/2 text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#525599] mb-5">
              What Comes After the Internship?
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our internship programs are structured to build strong foundations. Most interns transition into full-time roles—
              either with us or through referrals to trusted partners.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Here's how your career journey with GharPadharo can unfold:
            </p>
            <ol className="text-gray-700 text-base list-decimal list-inside space-y-1">
              <li>🚀 Intern — Learn & collaborate</li>
              <li>👨‍💻 Junior Role — Contribute with guidance</li>
              <li>🧠 Contributor — Take ownership of features</li>
              <li>🧭 Team Lead — Manage modules & guide others</li>
              <li>🏆 Expert — Drive innovation and mentor</li>
            </ol>
          </div>

          <div className="lg:w-1/2">
            <img
              src="/career_path2.png"
              alt="Career Path 2"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 text-lg mb-4">
            Ready to take the next step? Check out open roles for freshers and begin your career journey.
          </p>
          <button
            onClick={handleScrollToJobs}
            className="inline-block px-8 py-3 bg-[#525599] text-white font-medium text-lg rounded-md hover:bg-[#41447d] transition-all shadow-md"
          >
            View Fresher Job Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Internships;
