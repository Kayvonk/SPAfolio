import React, { useState, useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [messageIconAnimateClass, setMessageIconAnimateClass] = useState(
    "messageIconAnimate inactive"
  );
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    console.log(messageIconAnimateClass);
  }, [messageIconAnimateClass]);

  const handleMouseEnter = (event) => {
    console.log("in");
    setMessageIconAnimateClass("messageIconAnimate active");
  };
  const handleMouseLeave = (event) => {
    console.log("out");
    setMessageIconAnimateClass("messageIconAnimate inactive");
  };

  return (
    <>
      <footer className="footer" id="contact">
        <div className="iconsRow">
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/kayvon-kazemini-83469391/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="assets/iconfinder_1_Linkedin_unofficial_colored_svg_5296501.png"
                alt="linkedin-icon"
              />
            </a>
          </div>
          <div
            className={messageIconAnimateClass}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
          ></div>
          <div className="messageIcon">
            <FontAwesomeIcon icon={faComment} className="bars" size="2x" />
          </div>
          <div className="contactWrapper">

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
                <FontAwesomeIcon icon={faPhone} className="bars" size="m" />
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

          </div>
          <div className="icons">
            <a
              href="https://github.com/Kayvonk"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="assets/iconfinder_Github_1298743.png"
                alt="github-icon"
              />
            </a>
          </div>
        </div>
      </footer>
      <a
        className="attribution"
        href="https://www.freepik.com/vectors/background"
      >
        Background vector created by starline - www.freepik.com
      </a>
      <br />
    </>
  );
}

export default Footer;
