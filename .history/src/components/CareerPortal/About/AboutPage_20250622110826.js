import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import OurStory from "./OurStory";
import CoreValues from "./CoreValues";
import Leadership from "./Leadership";
import Awards from "./Awards";
import Impact from "./Impact";
import Contact from "./Contact";
import FAQs from "./FAQs";

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);

  return (
    <div className="px-6 py-16 space-y-24">
      <OurStory />
      <CoreValues />
      <Leadership />
      <Awards />
      <Impact />
      <Contact />
      <FAQs />
    </div>
  );
};

export default AboutPage;
