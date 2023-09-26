import React from "react";
import Card from "./Card/Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cartascontainer">
      <div className="card-deck row">
        <Card />
      </div>
    </div>
  );
};

export default Cards;
