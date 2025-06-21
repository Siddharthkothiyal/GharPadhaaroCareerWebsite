import React from 'react';

const EarlyCareers = () => {
  const programs = [
    { title: "Graduate Program", year: "Year 1" },
    { title: "Rotational Training", year: "Year 2" },
    { title: "Mentorship & Leadership", year: "Year 3" },
  ];

  return (
    <section className="py-10 px-5">
      <h2 className="text-2xl font-bold mb-6">Early Career Programs</h2>
      <div className="relative border-l-4 border-blue-500 pl-6">
        {programs.map((program, index) => (
          <div key={index} className="mb-8">
            <div className="text-blue-700 font-semibold">{program.year}</div>
            <div className="text-lg">{program.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EarlyCareers;
