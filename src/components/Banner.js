import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import "../Styles/Banner.css";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <h1>Renke Cui</h1>
        <h2>Software Developer</h2>
        <p>
          I'm a student at Northeastern university majoring in Computer
          Engineering and Computer Science with a minor in Business
          administration. I enjoy the challenge of always learning something
          new.
        </p>
      </Container>
    </section>
  );
};
