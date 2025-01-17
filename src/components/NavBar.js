import React from "react";
import "../Styles/NavBar.css";
import { Navbar, Nav, Container, Col, Row, Button } from "react-bootstrap";
import logoIMG from "../Resources/RC_LOGO.png";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import linkedinLogo from "../Resources/linkedinLogo.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };
  const openResume = () => {
    //TODO: fix this link so that it opens the resume in a new tab
    window.open("src/assets/Resume_2024.pdf", "_blank");
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand
            href="#Home"
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("Home")}
          >
            <img src={logoIMG} alt="Renke_Cui_Logo" height="100" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav">
              <Nav.Link
                href="#Home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#Skills"
                className={
                  activeLink === "Skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#Projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("Projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link onClick={openResume}>
                <Button variant="secondary">Resume</Button>{" "}
              </Nav.Link>
              {/* <span className="navbar-text"> */}
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/renkecui/">
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn Logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                </a>
              </div>
              <Nav.Link>
                {" "}
                <Button
                  variant="secondary"
                  className="contact-button"
                  onClick={() => console.log("connect")}
                >
                  Contact
                </Button>
              </Nav.Link>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
