import React from "react";
import Card from "./Card/Card";
import "./Cards.css";

const Cards = ({ property }) => {
  return (
    <div className="cartascontainer">
      <div className="card-deck row">
        {property.map((prop) => (
          <Card
            key={prop.id}
            id={prop.id}
            image={prop.image[0]}
            title={prop.title}
            numBeds={prop.numBeds}
            numBaths={prop.numBaths}
            avialiability={prop.avialiability}
            homeCapacity={prop.homeCapacity}
            Category={prop.Category?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
