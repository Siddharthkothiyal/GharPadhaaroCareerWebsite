import React from "react";

const Hackathon = () => {
  const hackathons = [
    {
      title: "CodeSprint 2025",
      desc: "A 36-hour online coding marathon where participants solve algorithmic and real-world problems. Top teams get job interviews and prizes.",
      bullets: [
        "Cash prizes up to ₹1,00,000",
        "Problem-solving + system design rounds",
        "Open to all college students",
      ],
    },
    {
      title: "Women in Tech Hackathon",
      desc: "A tech-for-good event focused on encouraging female coders to build impactful solutions. Winners get fast-tracked interviews.",
      bullets: [
        "Mentorship by women leaders in tech",
        "Team collaboration encouraged",
        "Scholarships and internship offers",
      ],
    },
    {
      title: "GharPadhaaro BuildFest",
      desc: "A product + business hackathon to solve challenges for Uttarakhand’s local communities using AI, mobile, or web solutions.",
      bullets: [
        "Live pitch to investors & hiring panel",
        "Build solutions for real-world problems",
        "Internships with GharPadhaaro team",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-purple-50 to-white relative overflow-hidden">
      {/* Glow Background Elements */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-blue-200 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#42447c] mb-16 animate-fade-in-down">
           Hackathons & Innovation Challenges
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {hackathons.map((hack, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-6 shadow-md border border-gray-200 hover:shadow-2xl hover:border-[#525599] transform transition duration-500 hover:-translate-y-1 hover:scale-[1.03] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
            >
              <h3 className="text-xl font-semibold text-[#525599] mb-3 group-hover:text-[#2f315d] transition-colors duration-300">
                {hack.title}
              </h3>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {hack.desc}
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                {hack.bullets.map((point, idx) => (
                  <li key={idx} className="transition-all duration-200 group-hover:text-[#3f418d]">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
