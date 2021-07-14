import React from "react";
import "./style.css";

function ProjectBtn(props) {
  return (
    <a className={props.name} href={props.link} target="_blank" role="button">
      {props.title}
    </a>
  );
}

export default ProjectBtn;
