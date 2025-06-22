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
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#525599] mb-6">🌟 Internships & Career Growth</h2>

        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          At <strong>GharPadharo</strong>, internships aren't just training—they're the launchpad to meaningful careers.
          Whether you're a student, a recent graduate, or someone switching paths, we provide hands-on experience, mentorship,
          and exposure to real projects in domains like technology, marketing, human resources, and design.
        </p>

        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          We believe **everyone deserves a start**—that’s why we offer programs tailored for:
        </p>

        <ul className="text-left text-gray-700 max-w-3xl mx-auto mb-4 list-disc list-inside">
          <li><strong>Graduates</strong> – Seeking real-world experience before a full-time job</li>
          <li><strong>Non-Graduates</strong> – Looking to gain practical skills and a career direction</li>
          <li><strong>Career Switchers</strong> – Transitioning into tech, business, or creative fields</li>
        </ul>

        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          Our interns are treated as full team members. You’ll work on live projects, contribute ideas, join stand-ups, and even lead mini-initiatives—because your growth matters.
        </p>

        <h3 className="text-2xl font-semibold text-[#525599] mt-10 mb-2">🚀 What Happens After the Internship?</h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          Most of our interns move on to **full-time roles** with us or with our hiring partners. The goal is to turn potential into performance and learning into leadership.
        </p>

        <h3 className="text-2xl font-semibold text-[#525599] mt-10 mb-2">🛤 Career Path Overview</h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          Here’s what your growth with us could look like:
        </p>

        <div className="text-gray-700 max-w-3xl mx-auto text-left mb-6">
          <ul className="list-decimal list-inside">
            <li><strong>Intern</strong> – Hands-on learning & team collaboration</li>
            <li><strong>Junior Role</strong> – Entry-level job with guidance</li>
            <li><strong>Core Contributor</strong> – Lead small modules, propose ideas</li>
            <li><strong>Project Lead</strong> – Manage timelines, lead sprints</li>
            <li><strong>Domain Expert</strong> – Mentor others, own systems</li>
          </ul>
        </div>

        <img
  src="/career_path1.jpg"
  alt="Career Path"
  className="mx-auto mt-6 w-full max-w-md rounded-lg shadow-md"
/>


        <p className="text-gray-700 max-w-3xl mx-auto mt-6">
          Ready to explore your future? Scroll down or click below to view our current openings for freshers.
        </p>

        <button
          onClick={handleScrollToJobs}
          className="mt-6 px-6 py-3 bg-[#525599] text-white rounded-md hover:bg-[#41447d] transition-colors"
        >
          View Fresher Job Opportunities
        </button>
      </div>
    </section>
  );
};

export default Internships;
