/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = ({
  id,
  image,
  title,
  numBeds,
  numBaths,
  avialiability,
  homeCapacity,
  Category,
}) => {

  return (
    <div className="row">
      <div key={id} className="col-xs-12 col-sm-6 col-md-4 ">
        <div className="card">
          <div className="view overlay">
            <img className="card-img-top" src={image} alt="Card image cap" />
            <a href="#!">
              <div className="mask rgba-white-slight"></div>
            </a>
          </div>
          <div className="card-body">
<<<<<<< HEAD
            <h4 className="text-blue">{title}</h4>
            <h4 className="text-black">{Category}</h4> {/* Muestra la categoría aquí */}
            <p className="card-text">Beds: {numBeds}</p>
            <p className="card-text">Baths: {numBaths}</p>
            <NavLink to={`/Detail/${id}`}>
              <button type="button" className="btn btn-light-blue btn-md">
=======
            <h4 className="text-white">{title}</h4>
            <h4 className="text-white">{Category}</h4> {/* Muestra la categoría aquí */}
            <p className="text-white">Beds: {numBeds}</p>
            <p className="text-white">Baths: {numBaths}</p>
            <NavLink to={`/Detail/${id}`}>
              <button type="button" className="btn bg-white text-black btn-md">
>>>>>>> f001fde9878a6bddd2edf5f5aecfa860fb3ff5dd
                Ver más
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;