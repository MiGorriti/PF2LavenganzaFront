import React from "react";
import "./CardsRes.css";
import CardRes from "./../CardRes"; // Importamos el componente CardRes

const CardsRes = ({ reservations, cancelReserve }) => {
  return (
    <div className="cartascontainer">
      <div className="card-deck row">
        {reservations.map((res) => (
          <CardRes
            key={res.id}
            id={res.id}
            title={res.PropertyTitle}
            cancelReserve={cancelReserve} // Pasamos la función cancelReserve
            image={res.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsRes;
