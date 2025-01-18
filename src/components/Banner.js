import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import "../Styles/Banner.css";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <div className="info">
          <h1>Renke Cui</h1>
          <h2>Software Developer</h2>
          <p className="description">
            I'm a student at Northeastern university majoring in Computer
            Engineering and Computer Science with a minor in Business
            administration. I enjoy the challenge of always learning something
            new.
          </p>
        </div>
      </Container>
    </section>
  );
};
