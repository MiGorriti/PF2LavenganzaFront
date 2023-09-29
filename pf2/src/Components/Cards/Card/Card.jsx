import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({id, image, title, numBeds, numBaths, avialiability, homeCapacity, category} ) => {
  
  return (
    <div className="row">
      
        <div key={id} className="col-xs-12 col-sm-6 col-md-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top"
                src={image}
                alt="Card image cap"
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p className="card-text">{category}</p>
              <Link to="/Detail">
                <button type="button" className="btn btn-light-blue btn-md">
                  Ver más
                </button>
              </Link>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default Card;
