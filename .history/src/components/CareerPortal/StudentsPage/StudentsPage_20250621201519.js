import React from "react";
import { Element } from "react-scroll";
import Internships from "./sections/Internships";
import FreshersJob from "./sections/FreshersJob";
// You can add more section components here

const StudentsPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-blue-700 text-white py-10">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold">Opportunities for Students</h1>
          <p className="mt-2 text-lg">
            Discover internships, job roles, and resources tailored for students.
          </p>
        </div>
      </section>

      

      {/* Internships */}
      <Element name="internships">
        <Internships />
      </Element>

      {/* Fresher Jobs */}
      <Element name="fresher-jobs">
        <FreshersJob />
      </Element>

      <Element name="early-career">
        <EarlyCareers />
      </Element>

      <Element name="hackathons">
        <Hackathon />
      </Element>

      <Element name="webinars">
        <Webinars />
      </Element>

      <Element name="scholarships">
        <Scholarships />
      </Element>

      <Element name="mentorships">
        <Mentorship />
      </Element>

      <Element name="resources">
        <Resources />
      </Element>

      <Element name="faq">
        <FAQs />
      </Element>

      
    </div>
  );
};

export default StudentsPage;
