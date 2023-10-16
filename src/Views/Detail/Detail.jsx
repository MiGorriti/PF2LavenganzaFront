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
import { getDetail, getReservationsByHome } from "../../Redux/action/actions";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import FormReserva from "../FormReserve/FormReserva";
import FormReviews from "../Reviews/FormReviews";
import Reviews from "../Reviews/Reviews";

const Detail = () => {
  const navigate = useNavigate();
  const { idHouse } = useParams();
  const dispatch = useDispatch();
  const houseDetail = useSelector((state) => state.propertyDetail);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [userData, setUserData] = useState({});

  const { nightPrice, title } = houseDetail;

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

  useEffect(() => {
    dispatch(getReservationsByHome(idHouse));
  }, [dispatch]);

  const meses = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const reservations = useSelector((state) => state.reservations);

  if (!houseDetail) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);
        setuserLoggedIn(true);
        setUserData(userData);
      } catch (error) {
        console.error("Error al parsear JSON:", error);
      }
    }
  }, []);

  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("userData");
    setuserLoggedIn(false);
  };
  console.log("22", userLoggedIn);
  // useEffect(() => {
  //   // Comprobar si el usuario está logueado (puedes hacerlo a través de tu lógica de autenticación)

  //   // Actualiza el estado según el resultado de la autenticación
  //   setuserLoggedIn(userLoggedIn);
  //   console.log(userLoggedIn);
  // }, []);
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
          <Link
            to="https://www.google.com/maps/place/48%C2%B052'36.0%22S+123%C2%B023'36.0%22W/@-48.8766631,-123.3959082,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-48.8766667!4d-123.3933333?authuser=0&entry=ttu"
            target="_blank"
          >
            View Location on Map
          </Link>
        </div>
        <h3 className="text-xl border-t-2 border-black mt-4">
          What This Place Offers:
        </h3>
        <p>{houseDetail.description}</p>
        {/* <h1 className="text-2xl border-t-2 border-black mt-4">Bedrooms</h1> */}
        {/* Servicios */}
        <h1 className="text-2xl border-t-2 border-black mt-4"></h1>

        <div>
          <h3>Property reserved for:</h3>
          <li>
            {reservations.map((res) => {
              return (
                <ul>
                  <h2>{meses[res.month - 1]}</h2>
                </ul>
              );
            })}
          </li>
        </div>

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

        <div className="mt-2 text-center">
          {userLoggedIn && (
            <FormReserva
              key={idHouse}
              id={idHouse}
              title={title}
              nightPrice={nightPrice}
              onLogout={handleLogout}
            />
          )}
        </div>
        {/* Total */}

        <div>
          <FormReviews
            key={idHouse}
            id={idHouse}
          />
        </div>

        <div className="border-t-2 border-black mt-4">
          <div className="mt-2">Total:${nightPrice}</div>
        </div>

        {/* Best Reviews */}
        <h1 className="text-xl text-center border-t-2 border-black mt-6">
          Best Reviews
        </h1>
        {/* Implementa aquí los comentarios */}
      </div>

      <div>
        <Reviews
          key={idHouse}
          id={idHouse}
        />
      </div>

    </div>
  );
};

export default Detail;
