import React, { useState } from "react";
// import box from "assets/constBackground-box.png"
// import elbow from "assets/constBackground-elbow.png"
// import line from "assets/constBackground-line.png"
// import medium from "assets/constBackground-medium.png"
// import ship from "assets/constBackground-ship.png"
// import small from "assets/constBackground-small.png"
// import square from "assets/constBackground-square.png"
import "./style.css";

const FlyingObjects = () => {
  const [shapesArray, setShapesArray] = useState([
    "box",
    "line",
    "line",
    "small",
    "medium",
    "medium",
    "elbow",
    "elbow",
    "square",
  ]);

  // const [positionsArray, setPositionsArray] = useState([

  // ]);

  return (
    <div style={{ position: "relative", zIndex: "1"}}>
      {shapesArray.map((shape, index) => {
        return (
          <div
            key={shape + index}
            className={`flyingDiv floatAnimate${
              Math.floor(Math.random() * 20) + 1
            }`}
            style={{
              top: `${Math.floor(Math.random() * 100)}vh`,
              left: `${Math.floor(Math.random() * 100)}vw`,
            }}
          >
            <img
              className={`flyingShape rotateAnimate${
                Math.floor(Math.random() * 12) + 1
              }`}
              src={`assets/constBackground-${shape}.png`}
              alt="FlyingShape"
            />
          </div>
        );
      })}
      {shapesArray.map((shape, index) => {
        return (
          <div
            key={shape + index}
            className={`flyingDiv floatAnimate${
              Math.floor(Math.random() * 4) + 1
            }`}
            style={{
              top: `${Math.floor(Math.random() * 100) + 100}vh`,
              left: `${Math.floor(Math.random() * 100)}vw`,
            }}
          >
            <img
              className={`flyingShape rotateAnimate${
                Math.floor(Math.random() * 4) + 1
              }`}
              src={`assets/constBackground-${shape}.png`}
              alt="FlyingShape"
            />
          </div>
        );
      })}
      <div id="shapes"></div>
    </div>
  );
};

export default FlyingObjects;
