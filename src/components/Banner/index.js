import React from "react";
import Container from "../Container";
import Slide from "react-reveal/Slide";
import { LinkBtn } from "../Navbar/NavbarElements";
import "./style.css";

function Banner() {
  return (
    <Container className="sliding-content">
      <Slide left>
        <div className="slidingTextLine">
          <div className="slidingText">
            Hi, my name is
            <span className="wordGradient"> Kayvon</span>
            .
            <br />
            ~Full-stack Web Developer
          </div>
        </div>
        <Container className="about-btn-container">
          <LinkBtn smooth to="#about" exact>
            <div className="about-btn btn btn-lg">Learn more</div>
          </LinkBtn>
        </Container>
      </Slide>
    </Container>
  );
}

export default Banner;
