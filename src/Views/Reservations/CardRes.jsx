import React from "react";
import "./CardRes.css";

const CardRes = ({ id, image, title }) => {
  const cancelReserve = (event, id) => {
    dispatch(cancel(id));
    window.location.reload(); // Recarga la página después de cancelar
  };
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
            <h4 className="text-white">{title}</h4>
            <button
              onClick={(event) => cancelReserve(event, res.id)}
              style={{ backgroundColor: "#4b4a4c" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRes;