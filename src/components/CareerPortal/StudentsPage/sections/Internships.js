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
      {/* Decorative background blur circles */}
      <div className="absolute top-[-5rem] left-[-5rem] w-96 h-96 bg-purple-100 opacity-20 rounded-full -z-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-5rem] right-[-5rem] w-96 h-96 bg-indigo-100 opacity-20 rounded-full -z-10 blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#2f315d] mb-6 tracking-tight transition-opacity duration-700 animate-fade-in">
          Internships & Career Growth at GharPadharo
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16 leading-relaxed animate-fade-in delay-100">
          Begin your professional journey with meaningful internship programs designed to equip you with practical
          experience and a clear career path.
        </p>

        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-28 group transition-transform duration-300">
          <div className="lg:w-1/2 text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#3f418d] mb-6">
              Why Start with an Internship?
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Our internship programs are crafted to offer real industry exposure — not simulated tasks. You’ll work on live projects,
              collaborate with experienced teams, and gain practical knowledge to build your resume and confidence.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Whether you're a graduate, non-graduate, or career switcher, our programs are tailored to guide your growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-gray-700">
              {[
                "Real-time project collaboration",
                "Dedicated mentorship",
                "Remote working flexibility",
                "Certification and career support",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 hover:scale-[1.02] hover:text-[#3f418d] transition-all duration-200"
                >
                  <span className="h-2.5 w-2.5 mt-2 bg-[#525599] rounded-full" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <img
              src="/career_path2.png"
              alt="Internship Path"
              className="rounded-2xl shadow-xl w-full max-w-lg mx-auto transition-transform duration-500 hover:scale-[1.05]"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-28 group transition-transform duration-300">
          <div className="lg:w-1/2 text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#3f418d] mb-6">
              The Career Progression
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              A successful internship often leads to full-time employment. We help interns transition smoothly into junior roles,
              and gradually take on leadership and specialist positions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Here’s how your career might progress with us:
            </p>

            <ul className="text-base text-gray-700 space-y-3 pl-5 list-disc hover:pl-6 transition-all duration-300">
              <li className="hover:text-[#3f418d] transition-all duration-150">Intern – Foundation through hands-on learning</li>
              <li className="hover:text-[#3f418d] transition-all duration-150">Junior Associate – Work in real teams</li>
              <li className="hover:text-[#3f418d] transition-all duration-150">Associate – Handle core features independently</li>
              <li className="hover:text-[#3f418d] transition-all duration-150">Team Lead – Mentor and manage initiatives</li>
              <li className="hover:text-[#3f418d] transition-all duration-150">Expert/Specialist – Innovate, lead, inspire</li>
            </ul>
          </div>

          <div className="lg:w-1/2">
            <img
              src="/career_path1.jpg"
              alt="Career Growth"
              className="rounded-2xl shadow-xl w-full max-w-lg mx-auto transition-transform duration-500 hover:scale-[1.05]"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 animate-fade-in delay-200">
          <p className="text-gray-700 text-xl font-medium mb-6">
            Ready to move forward in your career? Explore current opportunities tailored for freshers.
          </p>
          <button
            onClick={handleScrollToJobs}
            className="inline-block px-10 py-3 bg-[#525599] text-white text-lg font-medium rounded-full shadow-md hover:bg-[#41447d] transition-all duration-300 hover:scale-[1.05] active:scale-[0.98]"
          >
            View Fresher Job Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Internships;
