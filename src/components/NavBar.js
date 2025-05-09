import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logoIMG from "../assets/RC_LOGO.png";
import linkedinLogo from "../assets/linkedinLogo.svg";
import "../Styles/NavBar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const openResume = () => {
    window.open("/assets/Resume_2024.pdf", "_blank"); // public/assets/Resume_2024.pdf
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#Home" onClick={() => handleLinkClick("Home")}>
          <img src={logoIMG} alt="Renke Cui Logo" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto align-items-center">
            {["Home", "Skills", "Projects"].map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                className={`navbar-link ${
                  activeLink === section ? "active" : ""
                }`}
                onClick={() => handleLinkClick(section)}
              >
                {section}
              </Nav.Link>
            ))}
            <Nav.Link onClick={openResume}>
              <Button variant="secondary">Resume</Button>
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/renkecui/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center"
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                style={{ width: "30px", height: "30px" }}
              />
            </Nav.Link>
            <Nav.Link>
              <Button
                variant="secondary"
                className="contact-button"
                onClick={() => console.log("connect")}
              >
                Contact
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
