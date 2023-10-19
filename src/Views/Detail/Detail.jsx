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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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

  
  return (
    <div className="flex bg-white rounded-lg overflow-hidden w-full h-full">
      {/* Columna Izquierda */}
      <div className="w-2/3 text-black p-6 mt-20">
        {/* Imágenes de la propiedad */}
        <h1 className="text-3xl text-black mb-4">{houseDetail.title}</h1>
        <Carousel showArrows={true} emulateTouch={true} infiniteLoop={true}>
          {houseDetail.image &&
            houseDetail.image.map((e, index) => (
              <div key={index}>
              <img
                className="w-full h-auto object-cover rounded-lg max-h-80"
                src={e}
                alt=""
                key={index}
              />
              </div>
            ))}
        </Carousel> 
        <h2 className="text-xl p-4">
          {houseDetail.homeCapacity} guests -{houseDetail.numBeds} beds -{" "}
          {houseDetail.numBaths} baths
        </h2>
        <div className="flex items-center mt-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          <Link className="text-xl text-darkblue p-4"
            to="https://www.google.com/maps/place/48%C2%B052'36.0%22S+123%C2%B023'36.0%22W/@-48.8766631,-123.3959082,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-48.8766667!4d-123.3933333?authuser=0&entry=ttu"
            target="_blank"
          >
            View Location on Map
          </Link>
        </div>
        <h3 className="text-2xl border-t-2 border-black mt-6 mb-2 p-4">
          What This Place Offers:
        </h3>
        <div className="flex items-center mt-4 space-x-40 mb-6 p-4">
        <FontAwesomeIcon icon={faWifi} className="mr-6 text-6xl " />
        <FontAwesomeIcon icon={faParking} className="mr-6 text-6xl" />
        <FontAwesomeIcon icon={faDog} className="mr-6 text-6xl" />
        <FontAwesomeIcon icon={faSwimmingPool} className="mr-6 text-6xl" />
        </div>
        <h1 className="text-2xl border-t-2 border-black mt-4 mb-2 p-2">Description:</h1>
        <p className="p-2">{houseDetail.description}</p>
        <div className="mt-8">
  <h1 className="text-2xl border-t-2 border-black p-4 mb-2">Property reserved for:</h1>
  <ul className="list-disc ml-8">
    {reservations.map((res, index) => (
      <li key={index} className="p-2">{meses[res.month - 1]}</li>
    ))}
  </ul>
  
  <div className="mt-4">
    <h1 className="text-2xl text-center mb-4">Reviews</h1>
    <Reviews key={idHouse} id={idHouse} />
  </div>
</div>



      </div>

      {/* Columna Derecha */}
      <div className="w-1/3 text-black p-6 mt-20">
        {/* Precio por noche */}
        <div className="text-3xl">${houseDetail.nightPrice} / Month</div>

        {/* Selección de fechas y botón de reserva */}
        <div className="mt-4 ">
          <label className="block mb-1 text-xl">Arrival Date:</label>
          <input
            type="date"
            className="border p-2 w-full"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            style={{ backgroundColor: "white", border: "1px solid black" }}
          />
        </div>
        <div className="mt-2">
          <label className="block mb-1 text-xl">Departure Date:</label>
          <input
            type="date"
            className="border p-2 w-full"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            style={{ backgroundColor: "white", border: "1px solid black" }}
          />
        </div>

        <div className="mt-6 text-center ">
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

        <div className="border-t-2 border-black mt-6 p-6">
          <div className="mt-2 text-xl">Total:${nightPrice}</div>
        </div>

        <div>
          {userLoggedIn && (
            <FormReviews
              key={idHouse}
              id={idHouse}
              title={title}
              nightPrice={nightPrice}
              onLogout={handleLogout}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
