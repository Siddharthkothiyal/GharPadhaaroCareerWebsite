import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqsData = [
  {
    question: "Who can apply for internships listed here?",
    answer:
      "Any undergraduate or postgraduate student currently enrolled in a recognized institution can apply, unless otherwise specified in the job description.",
  },
  {
    question: "Do I need a resume to apply?",
    answer:
      "Yes, a professional resume is generally required. We recommend uploading your resume so it can be used across applications.",
  },
  {
    question: "Are these opportunities paid?",
    answer:
      "Many of the internships and jobs listed are paid, but some educational or research internships may be unpaid. Please refer to the job details for clarity.",
  },
  {
    question: "Can I apply to multiple opportunities?",
    answer:
      "Absolutely! You can apply to as many relevant opportunities as you like. Just ensure your profile is updated before applying.",
  },
  {
    question: "Will I receive updates after applying?",
    answer:
      "Yes, you’ll be notified via email or dashboard updates when your application status changes.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#f9faff] via-[#f4f5ff] to-[#f9faff]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#525599] mb-16">
           Frequently Asked Questions
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start gap-4 p-6 text-left focus:outline-none"
              >
                <FaQuestionCircle className="text-[#525599] text-2xl mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#525599] mb-1">
                    {faq.question}
                  </h3>
                  <p
                    className={`text-sm text-gray-700 leading-relaxed transition-all duration-300 ${
                      activeIndex === index ? "block mt-2" : "hidden"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 mt-1 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
