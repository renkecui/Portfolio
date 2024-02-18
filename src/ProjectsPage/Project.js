import React from "react";
import "./Project.css";
import { Link, useLocation } from "react-router-dom";

function ProjectsPage() {
  const { pathname } = useLocation();

  return (
    <div className="projects-page">
      <div className="div">
        <header className="header">
          <div className="overlap-group">
            <div className="text-wrapper">Renke Cui</div>
            <div className="nav-bar">
              <div className="works-button">
                <Link
                  to="/Projects"
                  className={`button text-wrapper-3${
                    pathname.includes("Projects") ? "active" : ""
                  }`}
                >
                  Projects
                </Link>
              </div>
              <div className="about-me-button">
                <Link
                  to="/About"
                  className={`button text-wrapper-3${
                    pathname.includes("About") ? "active" : ""
                  }`}
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="project-cards">
          <div className="title">
            <div className="text-wrapper-3">Project Title</div>
          </div>
          <div className="description">
            <p className="project-description">
              Project Description
              <br />
              What is this project?
              <br />
              What skills did you use for this project
            </p>
          </div>
        </div>
        <div className="project-cards-2">
          <div className="title">
            <div className="text-wrapper-3">Project Title</div>
          </div>
          <div className="project-description-wrapper">
            <p className="project-description">
              Project Description
              <br />
              What is this project?
              <br />
              What skills did you use for this project
            </p>
          </div>
        </div>
        <div className="project-cards-3">
          <div className="title">
            <div className="text-wrapper-3">Project Title</div>
          </div>
          <div className="description">
            <p className="project-description">
              Project Description
              <br />
              What is this project?
              <br />
              What skills did you use for this project
            </p>
          </div>
        </div>
        <div className="project-cards-4">
          <div className="title">
            <div className="text-wrapper-3">Project Title</div>
          </div>
          <div className="description">
            <p className="project-description">
              Project Description
              <br />
              What is this project?
              <br />
              What skills did you use for this project
            </p>
          </div>
        </div>
        <div className="project-cards-5">
          <div className="title">
            <div className="text-wrapper-3">Project Title</div>
          </div>
          <div className="description">
            <p className="project-description">
              Project Description
              <br />
              What is this project?
              <br />
              What skills did you use for this project
            </p>
          </div>
        </div>
        <div className="project-cards-6">
          <div className="title">
            <div className="text-wrapper-3">Project Title</div>
          </div>
          <div className="project-description-wrapper">
            <p className="project-description">
              Project Description
              <br />
              What is this project?
              <br />
              What skills did you use for this project
            </p>
          </div>
        </div>
        <div className="project-cards-7">
          <div className="title">
            <div className="text-wrapper-3">Project Title</div>
          </div>
          <div className="description">
            <p className="project-description">
              Project Description
              <br />
              What is this project?
              <br />
              What skills did you use for this project
            </p>
          </div>
        </div>
        <div className="project-cards-8">
          <div className="title">
            <div className="text-wrapper-3">Project Title</div>
          </div>
          <div className="description">
            <p className="project-description">
              Project Description
              <br />
              What is this project?
              <br />
              What skills did you use for this project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectsPage;
