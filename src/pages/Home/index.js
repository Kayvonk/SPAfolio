import React from "react";
import "./style.css";
import Container from "../../components/Container";
import TitleCard from "../../components/TitleCard";

function HomePage() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <TitleCard>
          <h1>Kayvon Kazemini</h1>
        </TitleCard>
      </Container>
      <Container style={{ marginTop: 30 }}>
        <img className="profileSquare imgAnimate image-fluid"
          style={{ borderRadius: '200px' }}
          src="assets/profileSquare.PNG"
          alt="MyPracticeCompanionImgThumbnail" />
        <p className="slidingText"> Full-stack Web Developer</p>
        <div class="text rotatingText">
          <p>with a passion for innovation.</p>
          <p>
            <span className="word midnight"></span>
            <span className="word belize">innovation.</span>
            <span className="word pomegranate">responsiveness.</span>
            <span className="word green">interactivity.</span>
            <span className="word wisteria">aesthetic.</span>
          </p>
        </div>
      </Container>
      <Container style={{ marginTop: 800, marginBottom: 80 }}>
        <div className="col-sm left-text">
          <h2>About Me</h2>
          <img className="about-me-image img-fluid float-sm-right mb-sm-3 ml-sm-3"
            src="assets/417296_10151061927160981_1015273837_n.jpg" alt="about-me" />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With a background in studying arts and sciences, and a strong
            foundation in web development from the Coding Bootcamp at the University of Utah, my aim has
            been developing fun and immersive applications. This is aided by proficiencies in coding frameworks
            such as JavaScript, React, jQuery, Node.js, CSS3, and HTML5. Additionally, working with softwares
            such as Unity, Blender, and GIMP has provided a basis for image editing and graphic designing.
            All of these skills culminate to form a base of knowledge from which I tackle any project. Combined
            with determination and creativity, every project becomes an opportunity to put forth my best work.
                </div>
      </Container>
    </div >
  );
}

export default HomePage;
