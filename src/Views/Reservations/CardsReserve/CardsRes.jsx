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
            title={res.title}
            cancelReserve={cancelReserve} // Pasamos la función cancelReserve
          />
        ))}
      </div>
    </div>
  );
};

export default CardsRes;
