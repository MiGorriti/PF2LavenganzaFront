import React from "react";
import "./Card.css";
const Card = () => {
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      text: "Mucho texto",
      imageUrl: "https://mdbootstrap.com/img/Photos/Others/images/16.jpg",
    },
    {
      id: 2,
      title: "Card 2",
      text: "Mucho texto",
      imageUrl: "https://mdbootstrap.com/img/Photos/Others/images/14.jpg",
    },
    // Agrega más objetos de datos aquí para más tarjetas
  ];
  return (
    <div className="row">
      {cardData.map((card) => (
        <div key={card.id} className="col-xs-12 col-sm-6 col-md-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top"
                src={card.imageUrl}
                alt="Card image cap"
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">{card.title}</h4>
              <p className="card-text">{card.text}</p>
              <button type="button" className="btn btn-light-blue btn-md">
                Ver más
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
