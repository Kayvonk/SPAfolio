import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import ContactCard from "../../components/ContactCard";
import Flip from "react-reveal/Flip";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  // const [showContacts, setShowContacts] = useState(false)
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/* <Link smooth to="#top">
        <img className="upArrow"
          src="assets/upArrow.png"
          alt="upArrow" />
      </Link> */}

      <footer className="footer">
        <div className="col-xs-2 icons">
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
          className="col-xs-2 messageIconAnimate"
          //  onClick={() => setShowContacts(!showContacts)}
        >
          <div className="messageIcon">
            <FontAwesomeIcon icon={faComment} className="bars" size="2x" />
          </div>
          <div className="messageIconDouble">
            <FontAwesomeIcon icon={faComment} className="bars" size="2x" />
          </div>
          <div className="contactWrapper">
            {/* <Flip bottom when={toggle}> */}
            <div className="cardText">
              <div className="contactRow">
                <FontAwesomeIcon icon={faEnvelope} className="bars" size="m" />
                <p
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: 10,
                    color: "white",
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
                    color: "white",
                  }}
                >
                  (503)&nbsp;309-1924
                </p>
              </div>
            </div>
            {/* </Flip> */}
          </div>
        </div>

        <div className="col-xs-2 icons">
          <a href="https://github.com/Kayvonk" target="_blank" rel="noreferrer">
            <img src="assets/iconfinder_Github_1298743.png" alt="github-icon" />
          </a>
        </div>
        {/* <div className="col-xs-2 icons"><a href="https://twitter.com/KayvonK" target="_blank" rel="noreferrer"><img
          src="assets/iconfinder_1_Twitter_colored_svg_5296514.png" alt="twitter-icon" /></a></div> */}
      </footer>
      <br />
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
