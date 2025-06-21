import React from 'react';

const internshipData = [
  {
    id: 1,
    title: 'Software Engineering Intern',
    company: 'TechNova Solutions',
    location: 'Remote',
    duration: '3 Months',
    stipend: '₹15,000/month',
    description:
      'Work with our development team on live web applications, gain hands-on coding experience, and participate in agile sprints.',
  },
  {
    id: 2,
    title: 'Marketing Intern',
    company: 'AdWorx Media',
    location: 'Delhi, India',
    duration: '2 Months',
    stipend: '₹10,000/month',
    description:
      'Assist in content creation, social media management, and performance tracking of campaigns across digital platforms.',
  },
  {
    id: 3,
    title: 'Data Analytics Intern',
    company: 'InsightBridge Consulting',
    location: 'Bangalore, India',
    duration: '6 Months',
    stipend: '₹20,000/month',
    description:
      'Support the analytics team in preparing dashboards, cleaning datasets, and running business performance analyses.',
  },
  {
    id: 4,
    title: 'Human Resources Intern',
    company: 'PeopleFirst HR',
    location: 'Mumbai, India',
    duration: '2 Months',
    stipend: '₹8,000/month',
    description:
      'Help manage recruitment cycles, onboard new interns, and coordinate employee engagement activities.',
  },
  {
    id: 5,
    title: 'Graphic Design Intern',
    company: 'PixelCraft Studio',
    location: 'Remote',
    duration: '3 Months',
    stipend: '₹12,000/month',
    description:
      'Design creatives for campaigns, improve UI assets, and collaborate closely with the branding team.',
  },
  {
    id: 6,
    title: 'Product Management Intern',
    company: 'CloudAxis Technologies',
    location: 'Hyderabad, India',
    duration: '4 Months',
    stipend: '₹18,000/month',
    description:
      'Work with cross-functional teams to gather product requirements, create roadmaps, and support feature rollouts.',
  },
];

const Internships = () => {
  return (
    <section id="internships" className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Explore Internship Opportunities
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {internshipData.map((intern) => (
            <div
              key={intern.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <h3 className="text-xl font-semibold text-[#525599]">{intern.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{intern.company}</p>

              <div className="text-sm text-gray-500 space-y-1 mb-4">
                <p><strong>Location:</strong> {intern.location}</p>
                <p><strong>Duration:</strong> {intern.duration}</p>
                <p><strong>Stipend:</strong> {intern.stipend}</p>
              </div>

              <p className="text-gray-700 text-sm">{intern.description}</p>

              <button className="mt-4 inline-block px-4 py-2 bg-[#525599] text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
