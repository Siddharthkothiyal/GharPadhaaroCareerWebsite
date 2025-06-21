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
    <section id="fresher-jobs" className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Explore Entry-Level Job Roles
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {freshersJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{job.company}</p>

              <div className="text-sm text-gray-500 space-y-1 mb-4">
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.type}</p>
                <p><strong>Pay:</strong> {job.pay}</p>
              </div>

              <p className="text-gray-700 text-sm">{job.description}</p>

              <button className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
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
