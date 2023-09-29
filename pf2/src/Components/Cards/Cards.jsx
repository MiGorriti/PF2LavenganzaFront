import React from "react";
import Card from "./Card/Card";
import "./Cards.css";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../Redux/action/actions";

const Cards = () => {
 
  const property = useSelector((state)=> state.copyPropertys)
 console.log(property)
  return (
    <div className="cartascontainer">
      <div className="card-deck row">
        {property?.map((prop)=>(
          
          <Card key={prop.id} image={prop.image[0]} title={prop.title} numBeds={prop.numBeds} numBaths={prop.numBaths} avialiability={prop.avialiability} homeCapacity={prop.homeCapacity} category={prop.category?.name}  />
        ))}
      </div>
    </div>
  );
};

export default Cards;
