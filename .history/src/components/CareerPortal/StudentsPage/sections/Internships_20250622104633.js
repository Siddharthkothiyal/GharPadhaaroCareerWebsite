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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#525599] mb-16">
          🌟 Internships & Career Growth at GharPadharo
        </h2>

        {/* Row 1: Image right, content left */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-[#525599] mb-4">Why Start with an Internship?</h3>
            <p className="text-gray-700 mb-3">
              At <strong>GharPadharo</strong>, internships aren’t just a checkbox — they are your launchpad.
              We provide hands-on exposure in real-world projects across technology, marketing, HR, design, and more.
            </p>
            <p className="text-gray-700 mb-3">
              Whether you’re a student, a graduate, or a career switcher, we have internship programs tailored to help you
              gain industry skills, confidence, and clarity in your path ahead.
            </p>
            <ul className="text-left text-gray-700 list-disc list-inside">
              <li>✅ Real project experience</li>
              <li>✅ Personalized mentorship</li>
              <li>✅ Flexible & remote options</li>
              <li>✅ Certificates & recommendations</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/career_path1.jpg"
              alt="Career Path 1"
              className="rounded-xl shadow-md w-full max-w-lg mx-auto"
            />
          </div>
        </div>

        {/* Row 2: Image left, content right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-[#525599] mb-4">What Comes After the Internship?</h3>
            <p className="text-gray-700 mb-3">
              Most of our interns are offered full-time roles either with us or our hiring partners. We guide you
              through a structured career path that takes you from learner to leader.
            </p>
            <p className="text-gray-700 mb-4">
              Here’s what your journey might look like:
            </p>
            <ol className="list-decimal list-inside text-left text-gray-700 space-y-1">
              <li>🚀 Intern – Learn and contribute</li>
              <li>👩‍💻 Junior Role – Collaborate in teams</li>
              <li>🧠 Core Contributor – Own features/modules</li>
              <li>🧭 Team Lead – Manage people & timelines</li>
              <li>🏆 Domain Expert – Mentor, innovate & grow</li>
            </ol>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/career_path2.jpg"
              alt="Career Path 2"
              className="rounded-xl shadow-md w-full max-w-lg mx-auto"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-4">
            Ready to begin your journey? Explore our fresher job opportunities below.
          </p>
          <button
            onClick={handleScrollToJobs}
            className="px-6 py-3 bg-[#525599] text-white rounded-md hover:bg-[#41447d] transition-colors"
          >
            View Fresher Job Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Internships;
