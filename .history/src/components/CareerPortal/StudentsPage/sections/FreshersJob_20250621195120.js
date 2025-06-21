import React from 'react';

const freshersJobs = [
  {
    id: 1,
    title: 'Junior Software Developer',
    location: 'Bangalore, India',
    duration: 'Full-time',
    pay: '₹4.5 LPA',
    company: 'TechNova Solutions',
    description: 'Work on web applications and support senior developers in agile teams.',
  },
  {
    id: 2,
    title: 'Associate Business Analyst',
    location: 'Gurgaon, India',
    duration: 'Full-time',
    pay: '₹5 LPA',
    company: 'InsightBridge Consulting',
    description: 'Analyze business requirements and create detailed documentation for clients.',
  },
  {
    id: 3,
    title: 'UI/UX Designer (Fresher)',
    location: 'Remote',
    duration: 'Full-time',
    pay: '₹3.8 LPA',
    company: 'PixelCraft Studio',
    description: 'Create intuitive and visually appealing designs for web and mobile apps.',
  },
  {
    id: 4,
    title: 'Cloud Support Associate',
    location: 'Hyderabad, India',
    duration: 'Full-time',
    pay: '₹4.2 LPA',
    company: 'CloudAxis',
    description: 'Provide support for cloud-based services and assist clients with technical queries.',
  },
  {
    id: 5,
    title: 'Digital Marketing Executive',
    location: 'Mumbai, India',
    duration: 'Full-time',
    pay: '₹3.6 LPA',
    company: 'AdWorx Media',
    description: 'Assist in SEO, content strategy, and campaign analysis for client projects.',
  },
  {
    id: 6,
    title: 'QA Tester (Fresher)',
    location: 'Pune, India',
    duration: 'Full-time',
    pay: '₹4 LPA',
    company: 'QualityVerse',
    description: 'Execute test cases, log defects, and ensure software quality standards are met.',
  },
];

const FreshersJob = () => {
  return (
    <section id="fresher-jobs" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Fresher Job Roles</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {freshersJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
              <p className="text-gray-700 mb-2"><strong>Company:</strong> {job.company}</p>
              <p className="text-gray-600"><strong>Location:</strong> {job.location}</p>
              <p className="text-gray-600"><strong>Type:</strong> {job.duration}</p>
              <p className="text-gray-600 mb-2"><strong>Pay:</strong> {job.pay}</p>
              <p className="text-sm text-gray-500">{job.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-xl hover:bg-blue-700">
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
