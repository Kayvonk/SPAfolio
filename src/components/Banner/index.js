import React from "react";
import Container from "../Container";
import Slide from "react-reveal/Slide";
import ProjectBtn from "../ProjectBtn";
import { Link } from "../Navbar/NavbarElements";
import "./style.css";

function Banner() {
  return (
    <Container className="sliding-content">
      <Slide left>
        <div className="slidingTextLine">
          <div>
            Hi, my name is
            <span className="wordGradient"> Kayvon</span>
            .
            <br />
            ~Full-stack Web Developer
          </div>
        </div>
        <Container className="about-btn-container">
          <Link smooth to="#about" exact>
            <ProjectBtn name="about-btn btn btn-lg" title="Know more" />
          </Link>
        </Container>
      </Slide>
    </Container>
  );
}

export default Banner;
