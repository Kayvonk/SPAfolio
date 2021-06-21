import React from "react";
import "./style.css";
import Container from "../../components/Container";
import TitleCard from "../../components/TitleCard";
import ProfileImage from "../../components/ProfileImage";
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

function HomePage() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Fade top>
          <TitleCard>
            <h1>Kayvon Kazemini</h1>
          </TitleCard>
        </Fade>

      </Container>
      <ProfileImage />

      <Container style={{ marginTop: 900, marginBottom: 300 }}>
        <Rotate top left>
          <div className="col-sm left-text">
            <h2>About Me</h2>
          </div>
        </Rotate>
        <Fade right>
          <img className="about-me-image img-fluid float-sm-right mb-sm-3 ml-sm-3"
            src="assets/417296_10151061927160981_1015273837_n.jpg" alt="about-me" />
        </Fade>
        <Fade left>
          <div className="col-sm left-text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With a background in the arts and sciences, and a strong
            foundation in web development from the Coding Bootcamp at the University of Utah, my aim has
            been developing fun and immersive applications. This is aided by proficiencies in JavaScript, React,
            jQuery, Node.js, CSS3, and HTML5. Additionally, working with softwares
            such as Unity, Blender, and GIMP has provided a basis for image editing and graphic designing.
            All of these skills culminate to form a base of knowledge from which I tackle any project. Combined
            with determination and creativity, every project becomes an opportunity to put forth my best work.
          </div>
        </Fade>

      </Container>
    </div >
  );
}

export default HomePage;
