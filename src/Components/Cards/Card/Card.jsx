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
<<<<<<< Updated upstream
          <div className="card-body">
            <h4 className="text-blue">{title}</h4>
            <h4 className="text-black">{Category}</h4> {/* Muestra la categoría aquí */}
            <p className="card-text">Beds: {numBeds}</p>
            <p className="card-text">Baths: {numBaths}</p>
            <NavLink to={`/Detail/${id}`}>
              <button type="button" className="btn btn-light-blue btn-md">
=======
          <div className="card-body font-ModernAntiqua-book">
            <h4 className="text-white ">{title}</h4>
            <h4 className="text-white">{Category}</h4> {/* Muestra la categoría aquí */}
            <p className="text-white">Beds: {numBeds}</p>
            <p className="text-white">Baths: {numBaths}</p>
            <Link to="/Detail">
              <button type="button" className="btn bg-white text-black mt-5 btn-md">
>>>>>>> Stashed changes
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