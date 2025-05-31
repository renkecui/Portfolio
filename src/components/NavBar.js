import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logoIMG from "../assets/RC_LOGO.png";
import "../Styles/NavBar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, section) => {
    e.preventDefault();
    setActiveLink(section);
    setExpanded(false); // collapse first to avoid layout shift

    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        const yOffset = -128;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 150); // small delay to allow collapse to animate
  };

  return (
    <>
      <Navbar
        expand="md"
        fixed="top"
        expanded={expanded}
        onToggle={() => setExpanded((prev) => !prev)}
        className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
        // bg="light"
        // variant="light"
      >
        <Container>
          <Navbar.Brand
            href="#Home"
            onClick={(e) => handleLinkClick(e, "Home")}
          >
            <img src={logoIMG} alt="Renke Cui Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto d-flex flex-column flex-md-row align-items-center gap-3">
              {["Home", "Skills", "Projects", "Contact"].map((section) => (
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Spacer to prevent content being hidden behind fixed navbar */}
      {/* <div style={{ height: expanded ? "304px" : "120px", transition: "height 0.3s ease" }} /> */}
      <div
        style={{
          height: expanded ? "316px" : "128px",
          transition: "height 0.3s ease",
        }}
      />
    </>
  );
};

export default NavBar;
