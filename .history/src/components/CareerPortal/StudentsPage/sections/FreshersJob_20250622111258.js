import React from 'react';

const freshersJobs = [
  {
    id: 1,
    title: 'Junior Software Developer',
    company: 'TechNova Solutions',
    location: 'Bangalore, India',
    type: 'Full-time',
    pay: '₹4.5 LPA',
    description:
      'Join our development team to build scalable web applications, write clean code, and collaborate in agile sprints.',
  },
  {
    id: 2,
    title: 'Associate Business Analyst',
    company: 'InsightBridge Consulting',
    location: 'Gurgaon, India',
    type: 'Full-time',
    pay: '₹5 LPA',
    description:
      'Assist in gathering and analyzing business requirements, preparing client reports, and supporting strategic decision-making.',
  },
  {
    id: 3,
    title: 'UI/UX Design Trainee',
    company: 'PixelCraft Studio',
    location: 'Remote',
    type: 'Full-time',
    pay: '₹3.8 LPA',
    description:
      'Support our design team by creating user-centric interfaces, conducting usability tests, and improving design systems.',
  },
  {
    id: 4,
    title: 'Cloud Support Associate',
    company: 'CloudAxis Technologies',
    location: 'Hyderabad, India',
    type: 'Full-time',
    pay: '₹4.2 LPA',
    description:
      'Provide first-line technical support for cloud services, troubleshoot client issues, and ensure SLA compliance.',
  },
  {
    id: 5,
    title: 'Digital Marketing Executive',
    company: 'AdWorx Media',
    location: 'Mumbai, India',
    type: 'Full-time',
    pay: '₹3.6 LPA',
    description:
      'Contribute to SEO strategies, content optimization, and digital campaign execution across platforms.',
  },
  {
    id: 6,
    title: 'Quality Assurance Tester',
    company: 'QualityVerse Pvt. Ltd.',
    location: 'Pune, India',
    type: 'Full-time',
    pay: '₹4 LPA',
    description:
      'Execute test cases, identify bugs, and assist in ensuring product quality across software releases.',
  },
];

const FreshersJob = () => {
  return (
    <section
  id="fresher-jobs"
  className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white"
>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-[#525599] mb-16">
       Explore Entry-Level Job Roles
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {freshersJobs.map((job) => (
        <div
          key={job.id}
          className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow px-6 py-5"
        >
          <h3 className="text-xl font-bold text-[#525599] mb-1">{job.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{job.company}</p>

          <div className="text-sm text-gray-500 space-y-1 mb-4">
            <p>
              <span className="font-medium text-gray-700">📍 Location:</span>{' '}
              {job.location}
            </p>
            <p>
              <span className="font-medium text-gray-700">🕒 Type:</span>{' '}
              {job.type}
            </p>
            <p>
              <span className="font-medium text-gray-700">💰 Pay:</span>{' '}
              {job.pay}
            </p>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">{job.description}</p>

          <button className="mt-6 inline-block px-5 py-2 bg-[#525599] text-white text-sm rounded-md hover:bg-[#41447d] transition-colors">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default FreshersJob;
