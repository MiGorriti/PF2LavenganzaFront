import Card from "./Card/Card";
import "./Cards.css";
import { useSelector } from "react-redux";

const Cards = () => {
<<<<<<< HEAD
 
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
>>>>>>> f001fde9878a6bddd2edf5f5aecfa860fb3ff5dd
        ))}
      </div>
    </div>
  );
};

export default Cards;

