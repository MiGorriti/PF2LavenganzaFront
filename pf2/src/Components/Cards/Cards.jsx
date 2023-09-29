import React from "react";
import Card from "./Card/Card";
import "./Cards.css";
import { useSelector } from "react-redux";

const Cards = () => {
  const property = useSelector((state)=> state.copyPropertys)
console.log(property)
  return (
    <div className="cartascontainer">
      <div className="card-deck row">
        <Card />
      </div>
    </div>
  );
};

export default Cards;
