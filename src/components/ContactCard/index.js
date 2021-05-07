import React from "react";
import "./style.css";

function ContactCard(props) {
  return <div className={`card container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default ContactCard;
