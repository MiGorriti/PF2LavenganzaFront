import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  id,
  image,
  title,
  numBeds,
  numBaths,
  availability,
  homeCapacity
  //Category,
}) => {

  return (
    <div>
      <Link to={`/Detail/${id}`}>
        <p>VER DETALLES</p>
        {/* Mostrar la imagen */}
        {
          image ? (
          <img src={image[0]} alt={title}/>
          ) : (
            <img
              src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"
              alt="Cargando . . ."
            />
          )
        }

        {/* Información relevante */}
        <div>
          <p>{title}</p>
          <p>{numBeds}</p>
          <p>{numBaths}</p>
          <p>{availability}</p>
          <p>{homeCapacity}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;