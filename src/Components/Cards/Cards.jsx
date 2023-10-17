import React from "react";
import Card from "./Card/Card";
import { useDispatch, useSelector } from "react-redux";

import "./Cards.css";

const Cards = () => {

  const property = useSelector((state)=> state.property)

  const filteredProperties = property.filter((prop) => prop.isPublished === true);

  return (
    <div className="cartascontainer">
      <div className="card-deck row">
        {filteredProperties?.map((prop) => (
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
