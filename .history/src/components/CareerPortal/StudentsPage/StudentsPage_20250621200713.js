import React from "react";
import Internships from "./sections/Internships";
import FreshersJob from "./sections/FreshersJob";
// You can import more sections here like EarlyCareers, Hackathons, etc.

const StudentsPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Opportunities for Students</h1>
          <p className="mt-2 text-lg">
            Explore internships, fresher jobs, career programs, and more!
          </p>
        </div>
      </section>

      {/* Internships Section */}
      <Internships />

      {/* Fresher Job Roles Section */}
      <FreshersJob />

      {/* Add other sections as needed, for example: */}
      {/* <EarlyCareers /> */}
      {/* <Hackathons /> */}
      {/* <Webinars /> */}
      {/* <Scholarships /> */}
      {/* <Mentorship /> */}
      {/* <Resources /> */}
      {/* <FAQs /> */}
    </div>
  );
};

export default StudentsPage;
