import React from "react";
import "./style.css";

function Footer() {
  return (

    <footer className="footer">
      <div className="col-xs-2 icons"><a href="https://www.linkedin.com/in/kayvon-kazemini-83469391/" target="_blank" rel="noreferrer"><img
        src="assets/iconfinder_1_Linkedin_unofficial_colored_svg_5296501.png" alt="linkedin-icon" /></a></div>
      <div className="col-xs-2 icons"><a href="https://github.com/Kayvonk" target="_blank" rel="noreferrer"><img
        src="assets/iconfinder_Github_1298743.png" alt="github-icon" /></a></div>
      <div className="col-xs-2 icons"><a href="https://twitter.com/KayvonK" target="_blank" rel="noreferrer"><img
        src="assets/iconfinder_1_Twitter_colored_svg_5296514.png" alt="twitter-icon" /></a></div>
    </footer>
  );
}

export default Footer;
