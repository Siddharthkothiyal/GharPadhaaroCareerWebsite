import React from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLaptopCode,
} from "react-icons/fa";

const programs = [
  {
    title: "Graduate Trainee Program",
    icon: <FaGraduationCap className="text-blue-600 text-3xl group-hover:animate-bounce transition-all duration-300" />,
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
    icon: <FaChalkboardTeacher className="text-blue-600 text-3xl group-hover:animate-bounce transition-all duration-300" />,
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
    icon: <FaLaptopCode className="text-blue-600 text-3xl group-hover:animate-bounce transition-all duration-300" />,
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
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute -top-20 -left-32 w-80 h-80 bg-indigo-200 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute -bottom-20 -right-32 w-80 h-80 bg-purple-200 opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#525599] mb-16 animate-fade-in-down">
           Early Career Programs
        </h2>

        <div className="space-y-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group flex items-start gap-6 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 px-6 py-5 border border-gray-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
            >
              <div className="min-w-[50px]">{program.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold text-[#525599] mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {program.description}
                </p>
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
