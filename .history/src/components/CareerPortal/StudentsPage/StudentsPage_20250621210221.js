import React, { useEffect } from "react";

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
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "auto" }); // 👈 No smooth scroll
      }
    }
  }, []);

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

      {/* Sections */}
      <section id="internships"><Internships /></section>
      <section id="fresher-jobs"><FreshersJob /></section>
      <section id="early-careers"><EarlyCareers /></section>
      <section id="hackathons"><Hackathon /></section>
      <section id="webinars"><Webinars /></section>
      <section id="scholarships"><Scholarships /></section>
      <section id="mentorship"><Mentorship /></section>
      <section id="resources"><Resources /></section>
      <section id="faqs"><FAQs /></section>
    </div>
  );
};

export default StudentsPage;
