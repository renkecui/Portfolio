import React from "react";
import "../Styles/Experience.css";

const experiences = [
  {
    role: "Software Development Engineer Co-op",
    company: "Veeco Instruments",
    date: "June 2024 – Dec 2024",
    description: [
      "Updated a C# WinForms application by integrating SQLite, reducing field service process time by 50%.",
      "Created software tests with EDATester to identify inefficiencies, leading to doubling improvement in data collection.",
      "Upgraded a VB.NET application with dynamic user controls, halving development time and enhancing scalability.",
      "Developed a WinForm application using Registry and PowerShell scripting to resolve 30% of customer tool issues."
    ],
    skills: [
      "C#", ".NET", "WinForms", "SQLite", "EDATester", "VB.NET", "Software Testing", "Scrum", "Agile", "Windows PowerShell", "Windows Registry",
    ],
  },
  {
    role: "Information Technology Intern",
    company: "Rendr Care",
    date: "June 2023 – Aug 2023",
    description: [
      "Directed asset management and maintenance operations for 1,000+ units across 50+ sites.",
      "Performed site surveys and analyzed space utilization to align infrastructure with medical specialty requirements.",
      "Led site hardware and software upgrades across multiple sites to improve operational performance."
    ],
    skills: [
      "Asset Management", "Site Surveys", "Infrastructure Analysis", "Hardware and Software Upgrades"
    ],
  },
];

const Experience = () => {
  return (
    <section id="Experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>
              {exp.role} <span className="at">@ {exp.company}</span>
            </h3>
            <p className="date">{exp.date}</p>
            <ul>
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="skills-list">
              {exp.skills.map((skill) => (
                <div key={skill} className="skill-pill">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
