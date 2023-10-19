import React from "react";
import "./CardAbout.css";

const CardAbout = ({ name, image, github, linkedin, description }) => {
  return (
    <div className="cardContainer">
      <div className="cardFront">
        <img src={image} alt={name} />
        <h3>{name}</h3>

        <div></div>
      </div>
      <div className="cardBack">
        <p className="cardDescription">{description}</p>
        <div className="cardLinks">
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
