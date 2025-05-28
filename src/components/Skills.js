import React from 'react';
import '../Styles/Skills.css'; 
const skillsData = {
  Languages: [
    "HTML", "CSS", "JavaScript", "TypeScript", "Python", "SQL"
  ],
  Tools: [
    "React", "Redux", "Bootstrap", "Express", "MongoDB", "Node.js", "Git"
  ]
};

const Skills = () => {
  return (
    <section id="Skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skills-category">
          <h3 className="skills-category-title">{category}</h3>
          <div className="skills-list">
            {skills.map((skill) => (
              <div key={skill} className="skill-pill">
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
