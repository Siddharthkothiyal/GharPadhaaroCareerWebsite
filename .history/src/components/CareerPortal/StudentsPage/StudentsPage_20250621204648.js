import React from "react";
import { Element } from "react-scroll";

import Internships from "./sections/Internships";
import FreshersJob from "./sections/FreshersJob";
import EarlyCareers from "./sections/EarlyCareers";
import Hackathon from "./sections/Hackathons";
import Webinars from "./sections/Webinars";
import Scholarships from "./sections/Scholarships";
import Mentorship from "./sections/Mentorship";
import Resources from "./sections/Resources";
import FAQs from "./sections/FAQs";

const StudentsPage = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-700 text-white py-10">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold">Opportunities for Students</h1>
          <p className="mt-2 text-lg">
            Discover internships, job roles, and resources tailored for students.
          </p>
        </div>
      </section>

      {/* Internships */}
      <Element name="Internships">
        <Internships />
      </Element>

      {/* Fresher Jobs */}
      <Element name="FreshersJob">
        <FreshersJob />
      </Element>

      {/* Early Career Programs */}
      <Element name="EarlyCareers">
        <EarlyCareers />
      </Element>

      {/* Hackathons */}
      <Element name="Hackathons">
        <Hackathon />
      </Element>

      {/* Webinars */}
      <Element name="Webinars">
        <Webinars />
      </Element>

      {/* Scholarships */}
      <Element name="Scholarships">
        <Scholarships />
      </Element>

      {/* Mentorship */}
      <Element name="Mentorship">
        <Mentorship />
      </Element>

      {/* Learning Resources */}
      <Element name="Resources">
        <Resources />
      </Element>

      {/* FAQs */}
      <Element name="FAQs">
        <FAQs />
      </Element>
    </div>
  );
};

export default StudentsPage;
