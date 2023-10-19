import React from "react";
import Card from "./Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";

import "./Cards.css";

const Cards = ({ currentPage }) => {
  const property = useSelector((state) => state.property);
  const filteredProperties = property.filter(
    (prop) => prop.isPublished === true
  );

  const [cardsPerPage, setCardsPerPage] = useState(10);
  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const cardsRender = filteredProperties.slice(firstIndex, lastIndex);
  
  return (
    <div className="cartascontainer">
      <div className="card-deck row">
        {cardsRender?.map((prop) => (
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
