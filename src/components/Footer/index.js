import React from "react";
import "./style.css";
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
  return (
    <>
      <Link smooth to="#top">
        <img className="upArrow"
          src="assets/upArrow.png"
          alt="upArrow" />
      </Link>

      <footer className="footer">
        <div className="col-xs-2 icons"><a href="https://www.linkedin.com/in/kayvon-kazemini-83469391/" target="_blank" rel="noreferrer"><img
          src="assets/iconfinder_1_Linkedin_unofficial_colored_svg_5296501.png" alt="linkedin-icon" /></a></div>
        <div className="col-xs-2 icons"><a href="https://github.com/Kayvonk" target="_blank" rel="noreferrer"><img
          src="assets/iconfinder_Github_1298743.png" alt="github-icon" /></a></div>
        <div className="col-xs-2 icons"><a href="https://twitter.com/KayvonK" target="_blank" rel="noreferrer"><img
          src="assets/iconfinder_1_Twitter_colored_svg_5296514.png" alt="twitter-icon" /></a></div>
      </footer>
      <br />
      <a className="attribution" href="https://www.freepik.com/vectors/background">Background vector created by starline - www.freepik.com</a>
      <br />
    </>
  );
}

export default Footer;
