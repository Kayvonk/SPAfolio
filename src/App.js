import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import ContactCard from "./components/ContactCard";
import TitleCard from "./components/TitleCard";
import Banner from "./components/Banner";
import LinkCard from "./components/LinkCard";
import CardBtn from "./components/CardBtn";
import Flip from "react-reveal/Flip";
import Footer from "./components/Footer";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Loading from "./components/Loading";
import ProjectBtn from "./components/ProjectBtn";

function App() {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 3800);
  }, []);

  return (
    <Router>
      {loading === false ? (
        <div>
          <Navbar id="top" />
          <Banner />
          <div className="aboutBackground">
            <Container
              style={{ marginTop: 1100, marginBottom: 200, paddingBottom: 30 }}
            >
              <h2
                id="about"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: 70,
                  marginBottom: 100,
                  fontFamily: "monospace",
                }}
              >
                About Me
              </h2>
              <Fade right>
                <img
                  className="about-me-image img-fluid float-sm-right mb-sm-3 ml-sm-3"
                  src="assets/profile.jpg"
                  alt="about-me"
                />
              </Fade>
              <Fade left>
                <div className="col-sm left-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With a background in the arts
                  and sciences, and a strong foundation in web development from
                  the Coding Bootcamp at the University of Utah, my aim has been
                  developing fun and immersive applications. This is aided by
                  proficiencies in JavaScript, React, jQuery, Node.js, CSS3, and
                  HTML5. Additionally, working with softwares such as Unity,
                  Blender, and GIMP has provided a basis for image editing and
                  graphic designing. All of these skills culminate to form a
                  base of knowledge from which I tackle any project. Combined
                  with determination and creativity, every project becomes an
                  opportunity to put forth my best work.
                </div>
              </Fade>
              <Fade bottom>
                <CardBtn />
              </Fade>
              <br />
              <Link smooth to="#portfolio">
                <img
                  className="upArrow"
                  src="assets/downArrow.png"
                  alt="downArrow"
                />
              </Link>
            </Container>
          </div>
          <Container style={{ marginTop: 50 }}>
            <TitleCard>
              <h1
                id="portfolio"
                style={{ paddingTop: 100, fontFamily: "monospace" }}
              >
                Portfolio
              </h1>
            </TitleCard>
          </Container>
          <Container className="grid-container">
            <Fade left>
              <Container
                style={{ marginTop: 40, marginBottom: 100 }}
                className="project-container"
              >
                <LinkCard>
                  <div className="projectWrapper">
                    <a
                      href="https://github.com/Kayvonk/voyagr"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>Voyagr</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://voyagr.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets/voyagrHomepagethumbnailsmall.PNG"
                    className="img-fluid images"
                    alt="voyagrThumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://voyagr.netlify.app/"
                    title="Live"
                  />
                  <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Kayvonk/voyagr"
                    title="Code"
                  />
                </Container>
              </Container>
            </Fade>
            <Fade right>
              <Container
                style={{ marginTop: 40, marginBottom: 100 }}
                className="project-container"
              >
                <LinkCard>
                  <div className="projectWrapper">
                    <a
                      href="https://github.com/Kayvonk/MyPracticeCompanion"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>My Practice Companion</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://kayvonk.github.io/MyPracticeCompanion/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets/MyPracticeCompanionImgThumbnail.PNG"
                    className="img-fluid images"
                    alt="MyPracticeCompanionImgThumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://kayvonk.github.io/MyPracticeCompanion/"
                    title="Live"
                  />
                  <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Kayvonk/MyPracticeCompanion"
                    title="Code"
                  />
                </Container>
              </Container>
            </Fade>
          </Container>
          <Container className="grid-container">
            <Fade left>
              <Container
                style={{ marginTop: 40, marginBottom: 100 }}
                className="project-container"
              >
                <LinkCard>
                  {" "}
                  <div className="projectWrapper">
                    <a
                      href="https://github.com/Kayvonk/NotAnotherDirectory"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>Not Another Directory</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://kayvonk.github.io/NotAnotherDirectory/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="assets/employeedirectorythumbnail.PNG"
                    className="img-fluid images"
                    alt="NotAnotherDirectoryImgThumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://kayvonk.github.io/NotAnotherDirectory/"
                    title="Live"
                  />
                  <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Kayvonk/NotAnotherDirectory"
                    title="Code"
                  />
                </Container>
              </Container>
            </Fade>
            <Fade right>
              <Container
                style={{ marginTop: 40, marginBottom: 100 }}
                className="project-container"
              >
                <LinkCard>
                  {" "}
                  <div className="projectWrapper">
                    <a
                      href="https://github.com/Kayvonk/DailyPlannerForTheWin"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>Daily Planner For The Win</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://kayvonk.github.io/DailyPlannerForTheWin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets/DailyPlannerImgThumbnail.PNG"
                    className="img-fluid images"
                    alt="DailyPlannerImgThumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://kayvonk.github.io/DailyPlannerForTheWin/"
                    title="Live"
                  />
                  <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Kayvonk/DailyPlannerForTheWin"
                    title="Code"
                  />
                </Container>
              </Container>
            </Fade>
          </Container>
          <Container className="grid-container">
            <Fade left>
              <Container
                style={{ marginTop: 40, marginBottom: 100 }}
                className="project-container"
              >
                <LinkCard>
                  {" "}
                  <div className="projectWrapper">
                    <a
                      href="https://github.com/Koffidanh/job-aid"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3> Job Aid</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://whispering-eyrie-33529.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="assets/jobaidThumbnail.PNG"
                    className="img-fluid images"
                    alt="JobAideImgThumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://whispering-eyrie-33529.herokuapp.com/"
                    title="Live"
                  />
                  <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Koffidanh/job-aid"
                    title="Code"
                  />
                </Container>
              </Container>
            </Fade>

            <Fade right>
              <Container
                style={{ marginTop: 40, marginBottom: 100 }}
                className="project-container"
              >
                <LinkCard>
                  {" "}
                  <div className="projectWrapper">
                    <a
                      href="https://github.com/Kayvonk/WonderfulWeatherApp"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3 className="project-header"> Wonderful Weather App</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://kayvonk.github.io/WonderfulWeatherApp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets/WeatherAppImgThumbnail.PNG"
                    className="img-fluid images"
                    alt="WonderfulWeatherAppImgThumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://kayvonk.github.io/WonderfulWeatherApp/"
                    title="Live"
                  />
                  <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Kayvonk/WonderfulWeatherApp"
                    title="Code"
                  />
                </Container>
              </Container>
            </Fade>
          </Container>
          <Container className="grid-container">
            <Fade left>
              <Container
                style={{ marginTop: 40, marginBottom: 100 }}
                className="project-container"
              >
                <LinkCard>
                  {" "}
                  <div className="projectWrapper">
                    <a
                      href="https://github.com/Kayvonk/MyWorkplaceTracker"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3> My Workplace Tracker</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://github.com/Kayvonk/MyWorkplaceTracker#usage"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets/workplaceTrackerThumbnail.png"
                    className="img-fluid images"
                    alt="MyWorkplaceTrackerAppImgThumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://github.com/Kayvonk/MyWorkplaceTracker#usage"
                    title="Usage"
                  />
                  <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Kayvonk/MyWorkplaceTracker"
                    title="Code"
                  />
                </Container>
              </Container>
            </Fade>
            <Fade right>
              <Container
                style={{ marginTop: 40, marginBottom: 300 }}
                className="project-container"
              >
                <LinkCard>
                  {" "}
                  <div className="projectWrapper">
                    <a
                      href="https://github.com/Kayvonk/TeamBuilding101"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3> Team Building 101</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://github.com/Kayvonk/TeamBuilding101#usage"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets/teamBuildingthumbnail.PNG"
                    className="img-fluid images"
                    alt="TeamBuildingThumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://github.com/Kayvonk/TeamBuilding101#usage"
                    title="Usage"
                  />
                  <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Kayvonk/TeamBuilding101"
                    title="Code"
                  />
                </Container>
              </Container>
            </Fade>
          </Container>
          <div className="aboutBackground">
            <Container
              id="contact"
              style={{ marginTop: 30, paddingTop: 100, paddingBottom: 10 }}
            >
              <TitleCard>
                <h2 className="contactText">
                  Want to connect about a project? Awesome!
                </h2>
              </TitleCard>
              <button
                className="btn contactBtn my-5"
                type="button"
                onClick={handleClick}
              >
                Let's Talk
              </button>
              <div className="contactWrapper" style={{ position: "relative" }}>
                <Flip bottom when={toggle}>
                  <ContactCard>
                    <div className="cardText">
                      <div className="contactRow">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="bars"
                          size="m"
                        />
                        <p
                          style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: 10,
                          }}
                        >
                          kayvonk@gmail.com{" "}
                        </p>
                      </div>
                      <br />
                      <div className="contactRow">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="bars"
                          size="m"
                        />
                        <p
                          style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: 10,
                          }}
                        >
                          (503)&nbsp;309-1924
                        </p>
                      </div>
                    </div>
                  </ContactCard>
                </Flip>
              </div>
            </Container>
          </div>
          <Footer />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "35vh",
            padding: 50,
          }}
        >
          <Loading />
        </div>
      )}
    </Router>
  );
}

export default App;
