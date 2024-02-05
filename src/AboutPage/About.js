import React from "react";
import "./About.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="div">
        <header className="header">
          <div className="overlap-group">
            <div className="text-wrapper">Renke Cui</div>
            <div className="nav-bar">
              <div className="works-button">
                <div className="text-wrapper-2">Projects</div>
              </div>
              <div className="about-me-button">
                <div className="text-wrapper-2">About Me</div>
              </div>
            </div>
          </div>
        </header>
        <div className="glass-effect">
          <div className="resume-button">
            <div className="text-wrapper-3">Resume</div>
          </div>
          <img className="image" alt="Image" src="image-1.png" />
          <img className="img" alt="Image" src="image-2.png" />
          <img className="image-2" alt="Image" src="image-3.png" />
          <div className="frame">
            <p className="fall-began-my">
              Fall 2021
              <br />
              Began my college career at Northeastern university
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
