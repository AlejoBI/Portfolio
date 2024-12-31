import React from "react";

import { Link } from "react-router-dom";

import { Container, Image, Row, Col, Button } from "react-bootstrap";

import Skills from "../../components/skills/Skills";
import Projects from "../../components/projects/Projects";

import ImagePortfolio from "../../assets/images/Portfolio.jpg";

const Home = () => {
  return (
    <Container className="my-5">
      {/* PRESENTATION */}
      <Row>
        <Col xs={6} md={4}>
          <h1>Hi, I'm Alejadro Bravo Isajar </h1>
          <p>
            Developer specializing in building exceptional digital experiences
          </p>
          <div className="d-flex justify-content-between">
            <Button variant="light">
              <Link to="/contact" className="text-decoration-none text-reset">
                Contact Me
              </Link>
            </Button>
            <Button variant="light">
              <Link
                to="https://github.com/AlejoBI"
                className="text-decoration-none text-reset"
              >
                GitHub
              </Link>
            </Button>
            <Button variant="light">
              <Link
                to="/linkLinkedIn"
                className="text-decoration-none text-reset"
              >
                LinkedIn
              </Link>
            </Button>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <Image src={ImagePortfolio} rounded />
        </Col>
      </Row>

      {/* SKILLS */}
      <Row>
        <h2>Skills</h2>
        <Skills />
      </Row>

      {/* PROJECTS */}
      <Row>
        <h2>Featured projects</h2>
        <Projects />
      </Row>

      {/* ABOUT */}
      <Row>
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with X years of experience in building web
          applications. I specialize in creating user-friendly interfaces and
          solving complex problems through clean, efficient code. When I'm not
          coding, you can find me [your interests/hobbies].
        </p>
      </Row>
    </Container>
  );
};

export default Home;
