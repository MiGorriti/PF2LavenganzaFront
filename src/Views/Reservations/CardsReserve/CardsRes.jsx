import React from "react";
import "./CardsRes.css";
import CardRes from "../CardRes";

const CardsRes = ({ res }) => {
  return (
    <div className="cartascontainer">
      <div className="card-deck row">
        {res.map((res) => (
          <CardRes
            key={res.id}
            id={res.id}
            image={res.image[0]}
            title={res.title}
            numBeds={res.numBeds}
            numBaths={res.numBaths}
            avialiability={res.avialiability}
            homeCapacity={res.homeCapacity}
            Category={res.Category?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsRes;
