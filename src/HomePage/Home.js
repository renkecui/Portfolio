import React from "react";
import "./Home.css";
import { Link, useLocation } from "react-router-dom";
import { Container, Col, Row, Button, Body } from "react-bootstrap";
import logoIMG from "../Resources/RC_LOGO.png";
import OiaIMG from "../Resources/Renke_at_Oia.jpg";

function Home() {
  // const { pathname } = useLocation();

  return (
    <section className="home-page">
      <Container>
        <Row className="align-items-center text-center Home-Header">
          <Col md={1}>
            <div className="logo">
              <Link to="/Home" aria-label="Home">
                <img src={logoIMG} alt="Renke Cui Logo" height="100" />
              </Link>
            </div>
          </Col>
          <Col md={7}> </Col>
          <Col md={1}>
            <div className="projects-link nav-link">
              <Link
                to="/Projects"
                className={`nav-link ${
                  pathname.includes("Projects") ? "active" : ""
                }`}
                aria-current={
                  pathname.includes("Projects") ? "page" : undefined
                }
              >
                <Button variant="secondary">Projects</Button>{" "}
              </Link>
            </div>
          </Col>
          <Col md={2}>
            <div className="about-link nav-link">
              <Link
                to="/About"
                className={`nav-link ${
                  pathname.includes("About") ? "active" : ""
                }`}
                aria-current={pathname.includes("About") ? "page" : undefined}
              >
                <Button variant="secondary">About Me</Button>{" "}
              </Link>
            </div>
          </Col>
          <Col md={1}> </Col>
        </Row>
      </Container>
      <Container>
        <div className="Home-Content">
          <div className="intro-box"></div>
        </div>
      </Container>
    </section>
  );
}

export default Home;

// //

// {
//   /* <Container className="overlap">
// <div className="picture">
//   {/* <img id="OiaImage" src="picture of Renke at Oia JPG " alt="" /> 
// </div>
// <div className="introduction">
//   <p className="HELLO-welcome-to-my">
//     HELLO!
//     <br />
//     <br />
//     Welcome to my personal website, I’m an aspiring Full Stack
//     developer and I’ll be showing my progress through this website
//   </p>
// </div>
// </Container>
// <header className="header">
// <div className="overlap-group">
//   <div className="text-wrapper-2">Renke Cui</div>
//   <div className="nav-bar">
//     <div className="works-button">
//       <Link
//         to="/Projects"
//         className={`button text-wrapper-3${
//           pathname.includes("Projects") ? "active" : ""
//         }`}
//       >
//         Projects
//       </Link>
//     </div>
//     <div className="about-me-button">
//     <Link
//         to="/About"
//         className={`button text-wrapper-3${
//           pathname.includes("About") ? "active" : ""
//         }`}
//       >
//         About Me
//       </Link>
//     </div>
//   </div>
// </div> */
// }
