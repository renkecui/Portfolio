import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logoIMG from "../assets/RC_LOGO.png";
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

  const handleLinkClick = (e, section) => {
    e.preventDefault(); // prevent anchor jump
    setActiveLink(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expand="md"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container fluid="lg">
        <Navbar.Brand href="#Home" onClick={(e) => handleLinkClick(e, "Home")}>
          <img
            src={logoIMG}
            alt="Renke Cui Logo"
            className="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <div className="w-100 d-flex justify-content-between align-items-center">
            {/* Centered Links */}
            <Nav className="mx-auto d-flex gap-3">
              {["Home", "Skills", "Projects"].map((section) => (
                <Nav.Link
                  key={section}
                  href={`#${section}`}
                  className={`nav-link ${
                    activeLink === section ? "active" : ""
                  }`}
                  onClick={(e) => handleLinkClick(e, section)}
                >
                  {section}
                </Nav.Link>
              ))}
            </Nav>

            {/* Right-Aligned Buttons */}
            <div className="d-flex align-items-center gap-2">
              <Nav.Link
                href="#Contact"
                className={`nav-link ${
                  activeLink === "Contact" ? "active" : ""
                }`}
                onClick={(e) => handleLinkClick(e, "Contact")}
              >
                Contact
              </Nav.Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
