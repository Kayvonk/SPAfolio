import { useState, useEffect } from "react";
import Container from "../Container";
import Slide from "react-reveal/Slide";
import { LinkBtn } from "../Navbar/NavbarElements";
import "./style.css";
// var ReactRotatingText = require('react-rotating-text');
import ReactRotatingText from 'react-rotating-text';

function Banner() {

// const [rollingTextIndex, setRollingTextIndex] = useState(0)

const rollingTextArr = [
  "Full-stack Web Developer",
  "UI/UX Designer",
  "Animation Enthusiast",
  "Tech Educator",
]

// useEffect(() => {
//   const interval = setInterval(() => {
//     setRollingTextIndex((prevIndex) => 
//       prevIndex === rollingTextArr.length - 1 ? 0 : prevIndex + 1
//     );
//   }, 3000);

//   return () => clearInterval(interval);
// }, [rollingTextArr.length]);

  return (
    <Container className="sliding-content">
      <Slide left>
        <div className="slidingTextLine">
          <div className="slidingText">
            <p>Hi, my name is Kayvon.</p>
            {/* Hi, my name is
            <span className="wordGradient"> Kayvon</span>
            . */}
            <br />
            {/* ~{rollingTextArr[rollingTextIndex]} */}
            ~ <ReactRotatingText items={rollingTextArr} pause={3000} />
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
