import React from "react";
import "./About.css";
import { Link, useLocation } from "react-router-dom";

function AboutPage() {
  const { pathname } = useLocation();

  return (
    <section className="about-page">
      <div className="div">
        <header className="header">
          <div className="overlap-group">
            <div className="text-wrapper">Renke Cui</div>
            <div className="nav-bar">
            <div className="works-button">
                <Link
                  to="/Projects"
                  className={`nav-link ${
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
        <div className="glass-effect">
          <div className="resume-button">
            <div className="text-wrapper-3">Resume</div>
          </div>
          {/* <img className="image" alt="Image" src="image-1.png" />
          <img className="img" alt="Image" src="image-2.png" />
          <img className="image-2" alt="Image" src="image-3.png" /> */}
          <div className="frame">
            <p className="fall-began-my">
              Fall 2021
              <br />
              Began my college career at Northeastern university
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
