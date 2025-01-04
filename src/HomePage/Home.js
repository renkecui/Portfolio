import React from "react";
import "./Home.css";
import { Link, useLocation } from "react-router-dom";
import { Container, Col, Row, Nav, Navbar } from "react-bootstrap";
import logoIMG from "../Resources/RC_LOGO.png";

function Home() {
  const { pathname } = useLocation();

  // var OiaPic = document.getElementById("OiaImage");
  // OiaPic.src = "src/Pictures/Renke_at_Oia.jpg";

  return (
    <section className="home-page">
      <Container>
        {/* <header className="header"> */}
        <Row>
          <Col>
            <Navbar.Brand href="#/Home">
              <img src={logoIMG} alt="Renke Cui Logo" height="100"></img>
            </Navbar.Brand>
          </Col>
          <Col>
            <div className="btnProjects">
              <Link
                to="/Projects"
                className={`nav-link ${
                  pathname.includes("Projects") ? "active" : ""
                }`}
              >
                Projects
              </Link>
            </div>
          </Col>
          <Col>
            <div className="btnAbout">
              <Link
                to="/About"
                className={`button text-wrapper-3${
                  pathname.includes("About") ? "active" : ""
                }`}
              >
                About Me
              </Link>
            </div>
          </Col>
        </Row>
        {/* </header>
        <content></content> */}
      </Container>
    </section>
  );
}

export default Home;
//

{
  /* <Container className="overlap">
<div className="picture">
  {/* <img id="OiaImage" src="picture of Renke at Oia JPG " alt="" /> 
</div>
<div className="introduction">
  <p className="HELLO-welcome-to-my">
    HELLO!
    <br />
    <br />
    Welcome to my personal website, I’m an aspiring Full Stack
    developer and I’ll be showing my progress through this website
  </p>
</div>
</Container>
<header className="header">
<div className="overlap-group">
  <div className="text-wrapper-2">Renke Cui</div>
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
</div> */
}
