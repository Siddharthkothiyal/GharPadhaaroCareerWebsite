// StudentsPage.jsx
import React from 'react';
import Internships from './sections/Internships'; // Adjust path if needed
import JobListings from '../JobListing/JobListings';


const StudentsPage = () => {
  return (
    <div className="students-container">
      {/* <h2>Internsships</h2>
        <p>Details about internsips...</p> */}
       <JobListings />

      <section id="fresher-jobs">
        <h2>Fresher Job Roles</h2>
        <p>Details about fresher jobs...</p>
      </section>

      <section id="early-careers">
        <h2>Early Career Programs</h2>
        <p>Details about early careers...</p>
      </section>

      <section id="hackathons">
        <h2>Hackathons & Challenges</h2>
        <p>Details about hackathons...</p>
      </section>

      <section id="webinars">
        <h2>Career Webinars</h2>
        <p>Details about webinars...</p>
      </section>

      <section id="scholarships">
        <h2>Scholarships</h2>
        <p>Details about scholarships...</p>
      </section>

      <section id="mentorship">
        <h2>Mentorship Programs</h2>
        <p>Details about mentorship programs...</p>
      </section>

      <section id="resources">
        <h2>Learning Resources</h2>
        <p>Details about resources...</p>
      </section>

      <section id="faqs">
        <h2>FAQs for Students</h2>
        <p>Frequently asked questions...</p>
      </section>
    </div>
  );
};

export default StudentsPage;
