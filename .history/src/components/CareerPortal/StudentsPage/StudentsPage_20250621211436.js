import React from "react";

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

      {/* Sections with IDs for HashLink scrolling */}
      <div id="internships">
        <Internships />
      </div>

      <div id="freshersjob">
        <FreshersJob />
      </div>

      <div id="earlycareers">
        <EarlyCareers />
      </div>

      <div id="hackathons">
        <Hackathon />
      </div>

      <div id="webinars">
        <Webinars />
      </div>

      <div id="scholarships">
        <Scholarships />
      </div>

      <div id="mentorship">
        <Mentorship />
      </div>

      <div id="resources">
        <Resources />
      </div>

      <div id="faqs">
        <FAQs />
      </div>
    </div> {/* ←✅ this closing div was missing */}
  );
};

export default StudentsPage;
