import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logoIMG from "../assets/RC_LOGO.png";
import "../Styles/NavBar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [currentSection, setCurrentSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Set scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observe current section in view
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setCurrentSection(entry.target.id.toLowerCase());
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const capitalized =
      currentSection.charAt(0).toUpperCase() + currentSection.slice(1);
    setActiveLink(capitalized);
  }, [currentSection]);

  const handleLinkClick = (e, section) => {
    e.preventDefault();
    setExpanded(false);

    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        const yOffset = -128;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <>
      <Navbar
        expand="md"
        fixed="top"
        expanded={expanded}
        onToggle={() => setExpanded((prev) => !prev)}
        className={`custom-navbar ${
          scrolled ? "scrolled" : ""
        } section-${currentSection}`}
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
              {["Home", "Skills", "Experience", "Projects", "Contact"].map(
                (section) => (
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
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Push content below navbar */}
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
