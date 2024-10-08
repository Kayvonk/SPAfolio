import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import TitleCard from "./components/TitleCard";
import Banner from "./components/Banner";
import LinkCard from "./components/LinkCard";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import Footer from "./components/Footer";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from "./components/Loading";
import ProjectBtn from "./components/ProjectBtn";
import FlyingObjects from "./components/FlyingObjects";
import Reveal from "react-reveal/Reveal";
import { Tilt } from "react-tilt";
import FlyingObjectsBottom from "./components/FlyingObjectsBottom";

function App() {
  const [loading, setLoading] = useState(true);
  const [showAboutText, setShowAboutText] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.01, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  const handleMouseEnter = () => {
    handleShowAboutText();
  };
  const handleMouseLeave = () => {
    handleShowAboutText();
  };

  const imageRefCallback = useCallback((node) => {
    if (node !== null) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
    }
  }, []);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", () => updateMedia());
    return () => window.removeEventListener("resize", () => updateMedia());
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 3800);
  }, []);

  const handleShowAboutText = () => {
    if (showAboutText == true) {
      setShowAboutText(false);
    }
    if (showAboutText == false) {
      setShowAboutText(true);
    }
  };

  return (
    <Router>
      {loading === false ? (
        <div>
          <Navbar id="top" />
          <FlyingObjects />
          <Banner />
          <Container
            id="about"
            style={{
              paddingTop: "30vh",
              marginTop: "80vh",
              marginBottom: "20vh",
              position: "relative",
              minHeight: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                display: "flex",
                fontSize: "40pt",
                justifyContent: "center",
                fontFamily: "monospace",
                position: "absolute",
                top: "15vh",
              }}
            >
              About Me
            </h2>
            <Reveal effect="revealLeft">
              <div className="aboutTextBackground">
                <Fade delay="1000">
                  <div className="aboutText">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Full-stack Web Developer,
                    founder of Unison Web Services, and cofounder of the Voyagr
                    app, my aim is building fun and immersive web applications.
                    While collaborating with others, thoughtfulness and
                    diligence are key attributes that I contribute throughout
                    any project.
                  </div>
                </Fade>
              </div>
            </Reveal>
            <Slide left>
              <div
                className={
                  isDesktop
                    ? "aboutBackground"
                    : "aboutBackground aboutBackgroundTransition"
                }
              >
                {/* <Tilt
                  options={defaultOptions}
                > */}
                <Flip right delay="500" duration="750">
                  <img
                    className="aboutImage"
                    src="assets/headshot2.jpg"
                    alt="about-me"
                  />
                </Flip>
                <Fade when={showAboutText}>
                  <div ref={imageRefCallback} className="aboutTextMobile">
                    {showAboutText && !isDesktop
                      ? `Full-stack Web Developer,
                    founder of Unison Web Services, and cofounder of the Voyagr
                    app, my aim is building fun and immersive web applications.`
                      : ""}
                  </div>
                </Fade>
              </div>
            </Slide>
          </Container>
          <Container style={{ marginTop: 50 }}>
            {/* <FlyingObjects /> */}
            {/* <FlyingObjectsBottom/> */}
            <TitleCard>
              <h1
                id="portfolio"
                style={{
                  marginTop: "70vh",
                  paddingTop: 100,
                  fontFamily: "monospace",
                }}
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
                      href="https://vuegradients.onrender.com/"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3> Vue Gradients</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://vuegradients.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets/vueGradientsThumbnailSmall.PNG"
                    className="img-fluid images"
                    alt="Vue-Gradients-Thumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://vuegradients.onrender.com/"
                    title="Live"
                  />
                  <ProjectBtn
                    name="source-btn btn btn-lg"
                    link="https://github.com/Kayvonk/VueGradients"
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
                      href="https://voyagrs.com/"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>Voyagrs</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://voyagrs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets/voyagrThumbnailSmall.PNG"
                    className="img-fluid images"
                    alt="voyagrThumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://voyagrs.com/"
                    title="Live"
                  />
                </Container>
              </Container>
            </Fade>
          </Container>
          <Container
            className="grid-container"
            style={{ marginBottom: "20vh" }}
          >
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
                    src="assets/uws2thumbnailsm.jpg"
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
                </Container>
              </Container>
            </Fade>
            <Fade right>
              <Container
                style={{ marginTop: 40, marginBottom: 150 }}
                className="project-container"
              >
                <LinkCard>
                  {" "}
                  <div className="projectWrapper">
                    <a
                      href="https://yourbrand.vercel.app/"
                      className="col-sm-12 project-text"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h3>Jewelry Storefront</h3>
                    </a>
                  </div>
                </LinkCard>
                <a
                  className="center"
                  href="https://yourbrand.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="assets/jewelryThumbnailsm.jpg"
                    className="img-fluid images"
                    alt="JewelryStorefrontThumbnail"
                  />
                </a>
                <Container className="btn-container">
                  <ProjectBtn
                    name="live-btn btn btn-lg"
                    link="https://yourbrand.vercel.app/"
                    title="Live"
                  />             
                </Container>
              </Container>
            </Fade>
          </Container>
          {/* <FlyingObjectsBottom/> */}
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
