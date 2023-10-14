import Card from "./Card/Card";
import {  useSelector } from "react-redux";
//import { getCars } from "../../Redux/action/actions";

import "./Cards.css";

const Cards = () => {
 
  const property = useSelector((state)=> state.property)
  return (
    <div className="card-container">
      <div className="card-container-horizontal">
        {property?.map((prop)=>(
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
