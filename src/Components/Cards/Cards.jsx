import Card from "./Card/Card";
//import "./Cards.css";
import {  useSelector } from "react-redux";
//import { getCars } from "../../Redux/action/actions";

const Cards = () => {
 
  const property = useSelector((state)=> state.property)
  return (
    <div className="cartascontainer" >
      <div className="card-deck row">
        {property?.map((prop)=>(
          <Card key={prop.id} id={prop.id} image={prop.image[0]} title={prop.title} numBeds={prop.numBeds} numBaths={prop.numBaths} avialiability={prop.avialiability} homeCapacity={prop.homeCapacity} Category={prop.Category?.name}  />
        ))}
      </div>
    </div>
  );
};

export default Cards;
