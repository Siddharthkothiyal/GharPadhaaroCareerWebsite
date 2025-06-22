import React from 'react';

const engineeringJobs = [
  {
    id: 1,
    title: 'Junior Software Developer',
    company: 'TechNova Solutions',
    description:
      'Contribute to real-time web applications and write scalable frontend/backend code under the guidance of senior developers.',
  },
  {
    id: 2,
    title: 'Cloud Support Associate',
    company: 'CloudAxis Technologies',
    description:
      'Help manage cloud-based infrastructure, troubleshoot technical issues, and support DevOps tasks in a collaborative environment.',
  },
  {
    id: 3,
    title: 'Quality Assurance Tester',
    company: 'QualityVerse Pvt. Ltd.',
    description:
      'Execute test cases, identify bugs early in the development cycle, and support product quality across releases.',
  },
];

const marketingJobs = [
  {
    id: 4,
    title: 'Digital Marketing Executive',
    company: 'AdWorx Media',
    description:
      'Plan and execute SEO campaigns, manage content across platforms, and assist in digital growth initiatives.',
  },
  {
    id: 5,
    title: 'Associate Business Analyst',
    company: 'InsightBridge Consulting',
    description:
      'Analyze business data, assist in market research, and provide actionable insights to support sales strategies.',
  },
  {
    id: 6,
    title: 'UI/UX Design Trainee',
    company: 'PixelCraft Studio',
    description:
      'Support the design team with wireframes, prototypes, and improve user experience through iterative testing and feedback.',
  },
];

const FreshersJob = () => {
  return (
    <section
      id="fresher-jobs"
      className="py-20 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#525599] mb-16">
          Entry-Level Job Roles
        </h2>

        {/* Engineering Roles */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#41447d] mb-6">
            Engineering Roles
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-5"
              >
                <h4 className="text-lg font-semibold text-[#525599] mb-1">
                  {job.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3">{job.company}</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sales & Marketing Roles */}
        <div>
          <h3 className="text-2xl font-semibold text-[#41447d] mb-6">
            Sales & Marketing Roles
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {marketingJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-5"
              >
                <h4 className="text-lg font-semibold text-[#525599] mb-1">
                  {job.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3">{job.company}</p>
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
