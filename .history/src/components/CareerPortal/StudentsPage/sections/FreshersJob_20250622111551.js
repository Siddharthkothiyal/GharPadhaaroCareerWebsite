import React from 'react';

const engineeringJobs = [
  {
    id: 1,
    title: 'Junior Software Developer',
    company: 'TechNova Solutions',
    description:
      'Work on scalable frontend/backend applications, collaborate in sprints, and contribute to real product development.',
  },
  {
    id: 2,
    title: 'Cloud Support Associate',
    company: 'CloudAxis Technologies',
    description:
      'Provide cloud support, resolve technical issues, and assist DevOps engineers in deploying robust infrastructure.',
  },
  {
    id: 3,
    title: 'Quality Assurance Tester',
    company: 'QualityVerse Pvt. Ltd.',
    description:
      'Ensure product reliability by testing features, reporting bugs, and working closely with the engineering team.',
  },
];

const marketingJobs = [
  {
    id: 4,
    title: 'Digital Marketing Executive',
    company: 'AdWorx Media',
    description:
      'Support SEO campaigns, manage social media strategies, and analyze digital metrics to boost outreach.',
  },
  {
    id: 5,
    title: 'Associate Business Analyst',
    company: 'InsightBridge Consulting',
    description:
      'Assist in market research, generate reports, and help define sales-focused solutions through data insights.',
  },
  {
    id: 6,
    title: 'UI/UX Design Trainee',
    company: 'PixelCraft Studio',
    description:
      'Collaborate with designers to enhance user flows, create wireframes, and support product usability improvements.',
  },
];

const FreshersJob = () => {
  return (
    <section
      id="fresher-jobs"
      className="relative overflow-hidden py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-white via-gray-50 to-white font-sans"
    >
      {/* Subtle Background Elements */}
      <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-100 rounded-full opacity-10 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 rounded-full opacity-10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#41447d] mb-4 tracking-tight">
          Entry-Level Career Opportunities
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          GharPadharo supports early professionals in kickstarting their journey with impactful, skill-focused roles across engineering and marketing domains.
        </p>

        {/* Engineering Roles */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-[#525599] border-b-2 border-gray-200 pb-2 mb-8">
            Engineering Roles
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow px-6 py-6"
              >
                <h4 className="text-lg font-semibold text-[#41447d] mb-1">
                  {job.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sales & Marketing Roles */}
        <div>
          <h3 className="text-2xl font-semibold text-[#525599] border-b-2 border-gray-200 pb-2 mb-8">
            Sales & Marketing Roles
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {marketingJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow px-6 py-6"
              >
                <h4 className="text-lg font-semibold text-[#41447d] mb-1">
                  {job.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshersJob;
