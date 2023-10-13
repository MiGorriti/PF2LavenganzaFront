import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancel, getReservations } from "../../Redux/action/actions";
import { useState } from "react";

const Reservations = () => {
  const [email, setEmail] = useState({});

  console.log(email);

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

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);
        setEmail(userData);
        // Utiliza la información del usuario aquí si es necesario
        dispatch(getReservations(userData.email));
      } catch (error) {
        console.error("Error al parsear JSON:", error);
      }
    }
  }, []);

  const dispatch = useDispatch();

  const reservations = useSelector((state) => state.reservations);

  const cancelReserve = (event, id) => {
    dispatch(cancel(id));
  };

  return (
    <div>
      <h1>Your reservations</h1>
      <div>
        {!reservations.length ? (
          <h2>You don't have reservations</h2>
        ) : (
          <li>
            {reservations.map((res) => {
              return (
                <ul>
                  <h2>{res.PropertyTitle}</h2>
                  <h2>Month: {meses[res.month - 1]}</h2>
                  <h2>Guests: {res.numHuespedes}</h2>
                  <button onClick={(event) => cancelReserve(event, res.id)}>
                    Cancel
                  </button>
                </ul>
              );
            })}
          </li>
        )}
      </div>
    </div>
  );
};

export default Reservations;
