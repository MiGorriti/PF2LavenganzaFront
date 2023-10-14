import React from "react";
import { NavLink } from "react-router-dom";

import "./Card.css";

const Card = ({
  id,
  image,
  title,
  numBeds,
  numBaths,
  availability,
  nightPrice,
  Category,
}) => {

  return (
    <div className="row">
      <div key={id} className="col-xs-12 col-sm-6 col-md-4">
        <div className="card">
          <div className="view overlay">
            <img className="card-img-top" src={image} alt="Card image cap" />
            <a href="#!">
              <div className="mask rgba-white-slight"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="text-blue">{title}</h4>
            <h4 className="text-black">{Category}</h4> {/* Muestra la categoría aquí */}
            <p className="card-text">Beds: {numBeds}</p>
            <p className="card-text">Baths: {numBaths}</p>
            <NavLink to={`/Detail/${id}`}>
              <button type="button" className="btn btn-light-blue btn-md">
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