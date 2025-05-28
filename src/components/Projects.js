import React from 'react';
import '../Styles/Projects.css'; 

const projectData = [
  {
    title: 'Portfolio Website',
    description: 'A personal site to showcase skills, projects, and resume using React.',
    image: '/assets/portfolio-thumbnail.png',
    link: 'https://github.com/yourusername/portfolio-site'
  },
  {
    title: 'Fitness Tracker App',
    description: 'Tracks workouts, progress, and goals. Built with React Native and Firebase.',
    image: '/assets/fitness-app-thumbnail.png',
    link: 'https://github.com/yourusername/fitness-tracker'
  }
];

const Projects = () => {
  return (
    <section id="Projects" className="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
