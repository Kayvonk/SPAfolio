import React, { useState } from "react";
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


  return (
    <div className="shapesContainer" >
      {shapesArray.map((shape, index) => {
        return (
          <div
            key={shape + index}
            className={`flyingDiv floatAnimate${Math.floor(Math.random() * 20) + 1
              }`}
            style={{
              top: `${Math.floor(Math.random() * 100)}vh`,
              left: `${Math.floor(Math.random() * 100)}vw`,
            }}
          >
            <img
              className={`flyingShape rotateAnimate${Math.floor(Math.random() * 12) + 1
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
            className={`flyingDiv floatAnimate${Math.floor(Math.random() * 4) + 1
              }`}
            style={{
              top: `${Math.floor(Math.random() * 100) + 100}vh`,
              left: `${Math.floor(Math.random() * 100)}vw`,
            }}
          >
            <img
              className={`flyingShape rotateAnimate${Math.floor(Math.random() * 4) + 1
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
