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
              style={{ marginTop: 1100, marginBottom: 150 }}
            >
              <h2
                id="about"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: 70,
                  marginBottom: 10,
                  fontFamily: "monospace",
                }}
              >
                About Me
              </h2>
              <Fade right>
                <img
                  className="about-me-image img-fluid float-sm-right ml-sm-3"
                  src="assets/profile.jpg"
                  alt="about-me"
                />
              </Fade>
              <Fade left>
                <div className="col-sm left-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Full Stack Web Developer, founder of Unison Web Services, and cofounder of the Voyagr app, my aim is building fun and immersive web applications.  Completing the University of Utah’s Coding Bootcamp has helped to cultivate proficiencies in JavaScript, React, MongoDB, Node.js, CSS3, and
                  HTML5. Additionally, programs such as Unity, Blender, and GIMP also assist in creating innovative projects.  While collaborating with others, thoughtfulness and diligence are key attributes that I contribute throughout any project.
                </div>
              </Fade>
              {/* <Fade bottom>
                <CardBtn />
              </Fade> */}
              <br />
            </Container>
            <Link smooth to="#portfolio" className="arrowContainer">
              <img
                className="upArrow"
                src="assets/downArrow.png"
                alt="downArrow"
              />
            </Link>
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
                  {" "}
                  <div className="projectWrapper">
                    <a
                      href="https://kshopjs.web.app/"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3> AmazonJS</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://kshopjs.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets/kshophomepagethumbnail.PNG"
                    className="img-fluid images"
                    alt="AmazonJSImgThumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://kshopjs.web.app/"
                    title="Live"
                  />
                  <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Kayvonk/AmazonJS"
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
                      href="https://voyagr.netlify.app/"
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
                  {/* <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Kayvonk/voyagr"
                    title="Code"
                  /> */}
                </Container>
              </Container>
            </Fade>
            {/* <Fade right>
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
            </Fade> */}
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
                      href="http://www.unisonwebservices.com"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>Unison Web Services</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="http://www.unisonwebservices.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="assets/uwsthumbnailsm.PNG"
                    className="img-fluid images"
                    alt="Unison Web Services"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="http://www.unisonwebservices.com"
                    title="Live"
                  />
                  {/* <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Kayvonk/voyagr"
                    title="Code"
                  /> */}
                </Container>
              </Container>
            </Fade>
            {/* <Fade left>
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
            </Fade> */}
            <Fade right>
              <Container
                style={{ marginTop: 40, marginBottom: 100 }}
                className="project-container"
              >
                <LinkCard>
                  {" "}
                  <div className="projectWrapper">
                    <a
                      href="https://ardx.netlify.app/"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>AnimeXD</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://ardx.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets/ardxhomethumbnail.PNG"
                    className="img-fluid images"
                    alt="AnimeXDThumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://ardx.netlify.app/"
                    title="Live"
                  />
                  <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Kayvonk/AXD-redux"
                    title="Code"
                  />
                </Container>
              </Container>
            </Fade>
          </Container>
          {/* <Container className="grid-container">
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
                      <h3> AmazonJS</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://kshopjs.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets/kshophomepagethumbnail.PNG"
                    className="img-fluid images"
                    alt="AmazonJSImgThumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://kshopjs.web.app/"
                    title="Live"
                  />
                  <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Kayvonk/AmazonJS"
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
          </Container> */}
          {/* <Container className="grid-container">
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
          </Container> */}
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
