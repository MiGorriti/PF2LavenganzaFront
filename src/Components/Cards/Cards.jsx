import React from "react";
import Card from "./Card/Card";
import "./Cards.css";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../Redux/action/actions";

const Cards = () => {
<<<<<<< Updated upstream
 
  const property = useSelector((state)=> state.property)
  return (
    <div className="cartascontainer" >
      <div className="card-deck row">
        {property?.map((prop)=>(
          <Card key={prop.id} id={prop.id} image={prop.image[0]} title={prop.title} numBeds={prop.numBeds} numBaths={prop.numBaths} avialiability={prop.avialiability} homeCapacity={prop.homeCapacity} Category={prop.Category?.name}  />
=======
  const property = useSelector((state) => state.property);

  return (
    <div className="cartascontainer container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20">
        {property?.map((prop) => (
          <Card
            key={prop.id}
            image={prop.image[0]}
            title={prop.title}
            numBeds={prop.numBeds}
            numBaths={prop.numBaths}
            avialiability={prop.avialiability}
            homeCapacity={prop.homeCapacity}
            Category={prop.Category?.name}
          />
>>>>>>> Stashed changes
        ))}
      </div>
    </div>
  );
};

export default Cards;

