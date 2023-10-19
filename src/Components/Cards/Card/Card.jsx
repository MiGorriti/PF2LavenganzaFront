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
    <div className="row mt-10">
      <div key={id} className="col-xs-12 col-sm-6 col-md-4">
        <div className="card">
          <div className="view overlay">
            <img className="card-img-top rounded-t-lg" src={image} alt="Card image cap" />
            <a href="#!">
              <div className="mask rgba-white-slight"></div>
            </a>
          </div>
          <div className="bg-black text-center text-white rounded-b-lg p-4">
         <h1 className="text-2xl ">{title}</h1>
         <h4>{Category}</h4>
         <p className="card-text">Beds: {numBeds}</p>
         <p className="card-text">Baths: {numBaths}</p>
         <NavLink to={`/Detail/${id}`}>
         <button type="button" className="text-blue btn-md mt-4">
         Discover
         </button>
         </NavLink>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
