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
        <h2 className="text-4xl font-bold text-[#525599] mb-6">🌟 Internships & Career Guidance</h2>

        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          We offer a variety of internships in tech, marketing, design, and more. These are perfect for both <strong>graduates</strong> and <strong>non-graduates</strong> to kickstart their careers.
        </p>

        <p className="text-gray-700 max-w-3xl mx-auto mb-4">
          After completing an internship, you may be eligible for full-time fresher roles. Start your journey here and grow with us!
        </p>

        <p className="text-gray-700 max-w-3xl mx-auto">
          Scroll down or click the button below to explore current <strong>job opportunities</strong> available for freshers.
        </p>

        <img
          src="/career-path.png"
          alt="Career Path"
          className="mx-auto mt-10 w-full max-w-md rounded-lg shadow-md"
        />

        <button
          onClick={handleScrollToJobs}
          className="mt-8 px-6 py-3 bg-[#525599] text-white rounded-md hover:bg-[#41447d] transition-colors"
        >
          Explore Job Opportunities
        </button>
      </div>
    </section>
  );
};

export default Internships;
