import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Detail.css";
import { getDetail } from "../../Redux/action/actions";
import { useDispatch, useSelector } from "react-redux";
import { initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  initMercadoPago("TEST-95bc6e5e-63b5-47cd-9d31-2eff19c633fe");

  const createPreference = async () => {
    try {
      const response = await axios.post("localhost:3001/mp/createpreference", {
        title: title,
        price: nightPrice,
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

    navigate(init_point);
  };
  return (
    <div className="container bootdey">
      <div className="col-md-12">
        <section className="panel">
          <div className="panel-body">
            <div className="row">
              {/* Columna de imágenes */}
              <div className="col-md-6">
                <div className="pro-img-details">
                  <img src={image} alt="" />
                </div>
                <div className="pro-img-list">
                  <Link to={image}>
                    <img src={image} alt="" />
                  </Link>
                  <Link to={image}>
                    <img src={image} alt="" />
                  </Link>
                  <Link to={image}>
                    <img src={image} alt="" />
                  </Link>
                  <Link to={image}>
                    <img src={image} alt="" />
                  </Link>
                </div>
              </div>
              {/* Columna de detalles */}
              <div className="col-md-6">
                <h2 className="pro-d-title"> {title}</h2>
                <h3>{availability}</h3>
                <p className="descripcion">{description}</p>
                <div className="product_meta text-white">
                  <span className="posted_in">
                    <strong className="text-white">Categories:</strong>{" "}
                    <Link to="#">{category}</Link>,{" "}
                    {/* Supongo que category es una cadena, no se puede usar category.name */}
                  </span>
                  <span className="tagged_as">
                    <strong>Specs:</strong> <Link to="#">{numBaths}</Link>,{" "}
                    <Link to="#">{numBeds}</Link>,{" "}
                    <Link to="#">{homeCapacity}</Link>.
                  </span>
                </div>
                <div className="m-bot15">
                  <strong>Price :</strong>{" "}
                  <span className="pro-price">{nightPrice}</span>
                </div>
                <div className="form-group"></div>
                <div className="mt-5">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={handleAcceptTerms}
                    className="border border-gray-400"
                  />
                  <span>
                    I accept the{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-purple-500 font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <div className="mt-3">
                  <button
                    onClick={handleBuy}
                    className={`btn btn-round btn-danger ${
                      !acceptedTerms ? "disabled" : ""
                    }`}
                    target="_blank"
                    disabled={!acceptedTerms}
                  >
                    <i className="fa fa-shopping-cart"></i> Alquilar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail;
