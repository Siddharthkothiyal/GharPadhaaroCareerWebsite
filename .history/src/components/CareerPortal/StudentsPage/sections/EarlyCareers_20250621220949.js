import React from "react";
import { FaGraduationCap, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";

const programs = [
  {
    title: "Graduate Trainee Program",
    icon: <FaGraduationCap className="text-blue-600 text-3xl" />,
    description:
      "A 6-month structured onboarding program for fresh graduates to explore roles in software, product, and analytics.",
    points: [
      "One-on-one mentorship",
      "Cross-functional project exposure",
      "Career development workshops",
    ],
  },
  {
    title: "Leadership Launchpad",
    icon: <FaChalkboardTeacher className="text-blue-600 text-3xl" />,
    description:
      "A 12-month rotational program for early-career professionals interested in team leadership and management tracks.",
    points: [
      "Rotations across 3 departments",
      "Executive mentorship",
      "Performance-based fast track roles",
    ],
  },
  {
    title: "Tech Foundation Bootcamp",
    icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
    description:
      "A 10-week intensive bootcamp for coding, system design, and tech stack mastery – ideal for engineers in their first year.",
    points: [
      "Hands-on coding assignments",
      "Tech talks by senior engineers",
      "Placement into core product teams",
    ],
  },
];

const EarlyCareers = () => {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#525599] mb-10">
          Early Career Programs
        </h2>

        <div className="space-y-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="flex items-start gap-5 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="min-w-[50px]">{program.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold text-[#525599] mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                  {program.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarlyCareers;
