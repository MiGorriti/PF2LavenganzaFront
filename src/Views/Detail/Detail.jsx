import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faWifi,
  faParking,
  faDog,
  faSwimmingPool,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../Redux/action/actions";
import { useNavigate, useParams } from "react-router-dom";
import { initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios";
import FormReserva from "../FormReserve/FormReserva";

const Detail = () => {
  const navigate = useNavigate();
  const { idHouse } = useParams();
  const dispatch = useDispatch();
  const houseDetail = useSelector((state) => state.propertyDetail);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [guests, setGuests] = useState(1);

  const { id, nightPrice, title } = houseDetail;

  useEffect(() => {
    dispatch(getDetail(idHouse));
  }, []);

  const calculateTotal = () => {
    if (!arrivalDate || !departureDate) {
      return 0;
    }
    const nights = (departureDate - arrivalDate) / (1000 * 60 * 60 * 24);
    return nights * houseDetail.nightPrice;
  };
  initMercadoPago("TEST-0e901727-9400-4f99-8e37-20e241e7f075");

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/mp/createpreference",
        {
          id: houseDetail.id,
          title: houseDetail.title,
          price: houseDetail.nightPrice,
          quantity: 1,
        }
      );
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

  if (!houseDetail) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="flex bg-white rounded-lg overflow-hidden w-full h-full">
      {/* Columna Izquierda */}
      <div className="w-2/3 text-black p-6">
        {/* Imágenes de la propiedad */}
        <div className="grid grid-cols-2 gap-2">
          {houseDetail.image &&
            houseDetail.image.map((e, index) => (
              <img
                className="w-full h-64 object-cover"
                src={e}
                alt=""
                key={index}
              />
            ))}
        </div>
        <button className="mt-2 text-blue-500 hover:text-blue-300">
          Show more Images
        </button>

        {/* Título y descripción */}
        <h1 className="text-3xl text-black mt-4">{houseDetail.title}</h1>
        <p>
          {houseDetail.homeCapacity} guests - {houseDetail.numRooms} rooms -{" "}
          {houseDetail.numBeds} beds - {houseDetail.numBaths} baths
        </p>
        <div className="flex items-center mt-4">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          <span>View Location on Map</span>
        </div>
        <h3 className="text-xl border-t-2 border-black mt-4">Description</h3>
        <p>{houseDetail.description}</p>
        <h1 className="text-2xl border-t-2 border-black mt-4">Bedrooms</h1>
        {/* Servicios */}
        <h1 className="text-2xl border-t-2 border-black mt-4">
          What This Place Offers
        </h1>
        <div className="flex items-center mt-2">
          {houseDetail.features &&
            houseDetail.features.map((feature, index) => {
              let icon;
              switch (feature) {
                case "wifi":
                  icon = faWifi;
                  break;
                case "parking":
                  icon = faParking;
                  break;
                case "dog":
                  icon = faDog;
                  break;
                case "pool":
                  icon = faSwimmingPool;
                  break;
                default:
                  icon = null;
              }
              return icon ? (
                <FontAwesomeIcon key={index} icon={icon} className="mr-2" />
              ) : null;
            })}
        </div>
      </div>

      {/* Columna Derecha */}
      <div className="w-1/3 text-black p-6">
        {/* Precio por noche */}
        <div className="text-3xl">${houseDetail.nightPrice} / Night</div>

        {/* Selección de fechas y botón de reserva */}
        <div className="mt-4">
          <label className="block mb-1">Arrival Date:</label>
          <input
            type="date"
            className="border p-2 w-full"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label className="block mb-1">Departure Date:</label>
          <input
            type="date"
            className="border p-2 w-full"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label className="block mb-1">Guests:</label>
          <input
            type="number"
            min="1"
            className="border p-2 w-full"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
        <div className="mt-2 text-center">
          {/* <button
            className="mt-4 bg-blue-500 text-black p-2 rounded"
            onClick={handleBuy}
          >
            Reserve
          </button> */}
          <FormReserva
            key={idHouse}
            id={idHouse}
          />
        </div>
        {/* Total */}
        <div className="border-t-2 border-black mt-4">
          <div className="mt-2">Total: ${calculateTotal()}</div>
        </div>

        {/* Best Reviews */}
        <h1 className="text-xl text-center border-t-2 border-black mt-6">
          Best Reviews
        </h1>
        {/* Implementa aquí los comentarios */}
      </div>
    </div>
  );
};

export default Detail;
