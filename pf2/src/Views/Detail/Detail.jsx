import React,  { useEffect } from "react";
import { Link,  useParams } from "react-router-dom";
import "./Detail.css";
import { getDetail } from "../../Redux/action/actions";
import { useDispatch, useSelector } from "react-redux";


const Detail = () => {
  const { idHouse } = useParams();
  console.log(idHouse)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(idHouse));
  }, []);

  const houseDetail = useSelector((state) => state.houseDetail);

  if (!houseDetail) {
    return <div>...Loading</div>;
  }

  const {
    title,
    image,  
    description,
    nightPrice,
    location,
    category,
    homeCapacity,
    numBaths,
    numBeds,
    availability
  } = houseDetail;

  
  
  return (
    <div className="container bootdey">
      <div className="col-md-12">
        <section className="panel">
          <div className="panel-body">
            <div className="col-md-6">
              <div className="pro-img-details">
                <img
                  src={image}
                  alt=""
                />
              </div>
              <div className="pro-img-list">
                <Link to={image}>
                  <img
                    src={image}
                    alt=""
                  />
                </Link>
                <Link to={image}>
                  <img
                    src={image}
                    alt=""
                  />
                </Link>
                <Link to={image}>
                  <img
                    src={image}
                    alt=""
                  />
                </Link>
                <Link to={image}>
                  <img
                    src={image}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="pro-d-title">
                {" "}
                {title}
              </h2>
              <h3>{availability}</h3>
              <p className="descripcion">
                 {description}
              </p>
              <div className="product_meta">
                <span className="posted_in">
                  {" "}
                  <strong>Categories:</strong> <Link to="#">{category}</Link>,{" "}
                  <Link to="#">{category}</Link>,{" "}
                  <Link to="#">{category}</Link>,{" "}
                  <Link to="#">{category}</Link>.
                </span>
                <span className="tagged_as">
                  <strong>Specs:</strong> <Link to="#">{numBaths}</Link>,{" "}
                  <Link to="#">{numBeds}</Link><Link to="#">{homeCapacity}</Link>.
                </span>
              </div>
              <div className="m-bot15">
                {" "}
                <strong>Price : </strong>{" "}
                
                <span className="pro-price">{nightPrice}</span>
              </div>
              <div className="form-group"></div>
              <p>
                <button className="btn btn-round btn-danger" type="button">
                  <i className="fa fa-shopping-cart"></i> Alquilar
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail;
