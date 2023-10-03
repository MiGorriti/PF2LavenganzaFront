import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Detail.css";
import { getDetail } from "../../Redux/action/actions";
import { useDispatch, useSelector } from "react-redux";
import { initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios";

const Detail = () => {
  const { idHouse } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(idHouse));
  }, []);

  const houseDetail = useSelector((state) => state.propertyDetail);
  console.log(houseDetail);
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
    availability,
  } = houseDetail;

  var [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("TEST-95bc6e5e-63b5-47cd-9d31-2eff19c633fe");

  const createPreference = async () => {
    try {
      const response = await axios.post("localhost3001/mp/createpreference", {
        title: title,
        price: nightPriceprice,
      });
      console.log(response);
      const init_point = response.data.response.body.init_point;
      console.log("init point mp", init_point);
      return init_point;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const init_point = await createPreference();

    window.location.href = init_point;
  };
  return (
    <div className="container bootdey">
      <div className="col-md-12">
        <section className="panel">
          <div className="panel-body">
            <div className="col-md-6">
              <div className="pro-img-details">
                <img src={image} alt="" />
              </div>
              <div className="pro-img-list">
                <Link to={image}>
                  <img src={image[0]} alt="" />
                </Link>
                <Link to={image}>
                  <img src={image[1]} alt="" />
                </Link>
                <Link to={image}>
                  <img src={image[2]} alt="" />
                </Link>
                <Link to={image}>
                  <img src={image} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="pro-d-title"> {title}</h2>
              <h3>{availability}</h3>
              <p className="descripcion">{description}</p>
              <div className="product_meta text-white">
                <span className="posted_in">
                  {" "}
                  <strong className="text-white">Categories:</strong>{" "}
                  <Link to="#">{category}</Link>,{" "}
                  <Link to="#">{category.name}</Link>,{" "}
                </span>
                <span className="tagged_as">
                  <strong>Specs:</strong> <Link to="#">{numBaths}</Link>,{" "}
                  <Link to="#">{numBeds}</Link>
                  <Link to="#">{homeCapacity}</Link>.
                </span>
              </div>
              <div className="m-bot15">
                {" "}
                <strong>Price : </strong>{" "}
                <span className="pro-price">{nightPrice}</span>
              </div>
              <div className="form-group"></div>
              <p>
                <button
                  onClick={handleBuy}
                  className="btn btn-round btn-danger"
                  target="_blank"
                >
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
