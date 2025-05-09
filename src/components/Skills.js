import React from 'react';

const skillsData = {
  "Languages": ["JavaScript", "TypeScript", "Python", "Java"],
  "Frameworks & Libraries": ["React", "Node.js", "Express", "Next.js"],
  "Tools & Platforms": ["Git", "Docker", "Firebase", "Vite"],
  "Testing": ["Jest", "Mocha", "React Testing Library"]
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa'
  },
  heading: {
    textAlign: 'center',
    color: '#333'
  },
  category: {
    marginBottom: '20px'
  },
  categoryTitle: {
    color: '#007bff',
    marginBottom: '10px'
  },
  skillList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  },
  skillItem: {
    backgroundColor: '#fff',
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    boxShadow: '1px 1px 5px rgba(0,0,0,0.05)'
  }
};

const Skills = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Skills</h2>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} style={styles.category}>
          <h3 style={styles.categoryTitle}>{category}</h3>
          <div style={styles.skillList}>
            {skills.map(skill => (
              <div key={skill} style={styles.skillItem}>
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
