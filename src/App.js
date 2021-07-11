import React, { useState, useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import ContactCard from "./components/ContactCard";
import TitleCard from "./components/TitleCard";
import Banner from "./components/Banner";
import LinkCard from "./components/LinkCard";
import CardBtn from "./components/CardBtn";
import Flip from 'react-reveal/Flip';
import Footer from "./components/Footer";
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Loading from "./components/Loading"


function App() {
  const [toggle, setToggle] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleClick = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setTimeout(() => setLoading(false), 5500)
  }, [])

  return (
    <Router>
      {loading === false ? (
        <div>
          <Navbar id="top" />
          <Banner />
          <div
            className="aboutBackground">
            <Container
              style={{ marginTop: 1100, marginBottom: 200, paddingBottom: 30 }}>
              <h2 id="about"
                style={{ display: "flex", justifyContent: "center", paddingTop: 70, marginBottom: 100 }}
              >About Me</h2>
              <Fade right>
                <img className="about-me-image img-fluid float-sm-right mb-sm-3 ml-sm-3"
                  src="assets/profile.jpg" alt="about-me" />
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
              <Fade bottom>
                <CardBtn />
              </Fade>
              <br />
              <Link
                smooth to="#portfolio">
                <img className="upArrow"
                  src="assets/downArrow.png"
                  alt="downArrow" />
              </Link>
            </Container>
          </div>
          <Container style={{ marginTop: 50 }}>
            <TitleCard>
              <h1 id="portfolio"
                style={{ paddingTop: 100 }}
              > Portfolio </h1> </TitleCard>
            <TitleCard> <h2 className="portfolioText"> Clicking images will direct you to the deployed application  <br />
              and project titles will direct you to the source code!</h2> </TitleCard>
          </Container>
          <Fade bottom>
            <Container>
              <LinkCard><div className="projectWrapper">
                <a href="https://github.com/Kayvonk/voyagr" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
                  <h3>Voyagr</h3>
                </a>
              </div>
              </LinkCard>
              <a class="center" href="https://voyagr.netlify.app/" target="_blank" rel="noreferrer"><img
                src="assets/voyagrHomepagethumbnailsmall.PNG" class="img-fluid images"
                alt="voyagrThumbnail" /></a>
            </Container>
          </Fade>
          <Fade bottom>
            <Container style={{ marginTop: 80 }}>
              <LinkCard><div className="projectWrapper">
                <a href="https://github.com/Kayvonk/MyPracticeCompanion" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
                  <h3>My Practice Companion</h3>
                </a>
              </div>
              </LinkCard>
              <a class="center" href="https://kayvonk.github.io/MyPracticeCompanion/" target="_blank" rel="noreferrer"><img
                src="assets/MyPracticeCompanionImgThumbnail.PNG" class="img-fluid images"
                alt="MyPracticeCompanionImgThumbnail" /></a>
            </Container>
          </Fade>
          <Fade bottom>
            <Container style={{ marginTop: 80 }}>
              <LinkCard> <div className="projectWrapper">
                <a href="https://github.com/Kayvonk/NotAnotherDirectory" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
                  <h3>Not Another Directory</h3>
                </a>
              </div>
              </LinkCard>
              <a class="center" href="https://kayvonk.github.io/NotAnotherDirectory/" target="_blank" rel="noreferrer"> <img
                src="assets/employeedirectorythumbnail.PNG" class="img-fluid rounded mx-auto d-block images"
                alt="NotAnotherDirectoryImgThumbnail" /></a>
            </Container>
          </Fade>
          <Fade bottom>
            <Container style={{ marginTop: 80 }}>
              <LinkCard> <div className="projectWrapper">
                <a href="https://github.com/Kayvonk/DailyPlannerForTheWin" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
                  <h3>Daily Planner For The Win</h3>
                </a>
              </div>
              </LinkCard>
              <a class="center" href="https://kayvonk.github.io/DailyPlannerForTheWin/" target="_blank" rel="noreferrer"> <img
                src="assets/DailyPlannerImgThumbnail.PNG" class="img-fluid rounded mx-auto d-block images"
                alt="DailyPlannerImgThumbnail" /></a>
            </Container>
          </Fade>
          <Fade bottom>
            <Container style={{ marginTop: 80 }}>
              <LinkCard> <div className="projectWrapper">
                <a href="https://github.com/Koffidanh/job-aid" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
                  <h3> Job Aid</h3>
                </a>
              </div>
              </LinkCard>
              <a class="center" href="https://whispering-eyrie-33529.herokuapp.com/" target="_blank" rel="noreferrer"> <img
                src="assets/jobaidThumbnail.PNG" class="img-fluid rounded mx-auto d-block images"
                alt="JobAideImgThumbnail" /></a>
            </Container>
          </Fade>
          <Fade bottom>
            <Container style={{ marginTop: 80 }}>
              <LinkCard> <div className="projectWrapper">
                <a href="https://github.com/Kayvonk/BurgerDevourer" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
                  <h3> Burger Devourer</h3>
                </a>
              </div>
              </LinkCard>
              <a class="center" href="https://still-inlet-08359.herokuapp.com/" target="_blank" rel="noreferrer"> <img
                src="assets/burgerThumbnail.PNG" class="img-fluid rounded mx-auto d-block images"
                alt="BurgerDevourerImgThumbnail" /></a>
            </Container>
          </Fade>
          <Fade bottom>
            <Container style={{ marginTop: 80 }}>
              <LinkCard> <div className="projectWrapper">
                <a href="https://github.com/Kayvonk/WonderfulWeatherApp" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
                  <h3> Wonderful Weather App</h3>
                </a>
              </div>
              </LinkCard>
              <a class="center" href="https://kayvonk.github.io/WonderfulWeatherApp/" target="_blank" rel="noreferrer"><img
                src="assets/WeatherAppImgThumbnail.PNG" class="img-fluid rounded mx-auto d-block images"
                alt="WonderfulWeatherAppImgThumbnail" /></a>
            </Container>
          </Fade>
          <Fade bottom>
            <Container style={{ marginTop: 80 }}>
              <LinkCard> <div className="projectWrapper">
                <a href="https://github.com/Kayvonk/MyWorkplaceTracker" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
                  <h3> My Workplace Tracker</h3>
                </a>
              </div>
              </LinkCard>
              <a class="center" href="https://github.com/Kayvonk/MyWorkplaceTracker#usage" target="_blank" rel="noreferrer"><img
                src="assets/workplaceTrackerThumbnail.png" class="img-fluid rounded mx-auto d-block images"
                alt="WonderfulWeatherAppImgThumbnail" /></a>
            </Container>
          </Fade>
          <Fade bottom>
            <Container style={{ marginTop: 80, marginBottom: 350 }}>
              <LinkCard> <div className="projectWrapper">
                <a href="https://github.com/Kayvonk/TeamBuilding101" class="col-sm-12 project-text" target="_blank" rel="noreferrer">
                  <h3> Team Building 101</h3>
                </a>
              </div>
              </LinkCard>
              <a class="center" href="https://github.com/Kayvonk/TeamBuilding101#usage" target="_blank" rel="noreferrer"><img
                src="assets/teamBuildingthumbnail.PNG" class="img-fluid rounded mx-auto d-block images"
                alt="TeamBuildingThumbnail" /></a>
            </Container>
          </Fade>
          <div className="aboutBackground">
            <Container id="contact" style={{ marginTop: 30, paddingTop: 100, paddingBottom: 10 }}
            >
              <TitleCard>
                <h2
                  className="contactText">Want to connect about a project? Awesome!</h2>
              </TitleCard>
              <button
                className="btn resumeBtn my-5"
                type="button"
                onClick={handleClick}>
                Let's Talk
              </button>
              <div className="contactWrapper"
                style={{ position: "relative" }}>
                <Flip bottom when={toggle}>
                  <ContactCard>
                    <div className="cardText">
                      <div className="contactRow">
                        <FontAwesomeIcon icon={faEnvelope} className="bars" size="m" />
                        <p
                          style={{ marginTop: "auto", marginBottom: "auto", marginLeft: 10 }}
                        >kayvonk@gmail.com </p>
                      </div>
                      <br />
                      <div className="contactRow">
                        <FontAwesomeIcon icon={faPhone} className="bars" size="m" />
                        <p
                          style={{ marginTop: "auto", marginBottom: "auto", marginLeft: 10 }}
                        >(503)&nbsp;309-1924</p>
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
          style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "35vh", padding: 50 }}
        >
          <Loading />
        </div>
      )}
    </Router>

  );
}


export default App;
