import React from "react";
import "./style.css";

function TitleCard(props) {
    return (
        <header> {props.children}
        </header>
    );
}

export default TitleCard;
