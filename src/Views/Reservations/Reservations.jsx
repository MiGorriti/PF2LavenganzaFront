// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { cancel, getReservations } from "../../Redux/action/actions";
// import { useState } from "react";
// import CardsRes from "./CardsReserve/CardsRes";

// const Reservations = () => {
//   const [email, setEmail] = useState({});

//   console.log(email);

//   const meses = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   useEffect(() => {
//     const storedUserData = localStorage.getItem("userData");
//     if (storedUserData) {
//       try {
//         const userData = JSON.parse(storedUserData);
//         setEmail(userData);
//         // Utiliza la información del usuario aquí si es necesario
//         dispatch(getReservations(userData.email));
//       } catch (error) {
//         console.error("Error al parsear JSON:", error);
//       }
//     }
//   }, []);

//   const dispatch = useDispatch();

//   const reservations = useSelector((state) => state.reservations);

//   return (
//     <div>
//       <h1>Your reservations</h1>
//       <div>
//         {!reservations.length ? (
//           <h2>You don't have reservations</h2>
//         ) : (
//           <li>
//             {reservations.map((res) => {
//               return (
//                 <ul>
//                   <CardsRes />
//                 </ul>
//               );
//             })}
//           </li>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Reservations;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancel, getCars, getReservations } from "../../Redux/action/actions";
import CardsRes from "./CardsReserve/CardsRes";

const Reservations = ({ image }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  const reservations = useSelector((state) => state.reservations);
  const casas = useSelector((state) => state.property);
  console.log(casas);
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);
        dispatch(getReservations(userData.email));
      } catch (error) {
        console.error("Error al parsear JSON:", error);
      }
    }
  }, [dispatch]);

  const cancelReserve = (id) => {
    dispatch(cancel(id));
    window.location.reload();
  };

  for (let i = 0; i < reservations.length; i++) {
    for (let j = 0; j < casas.length; j++) {
      if (reservations[i].PropertyTitle === casas[j].title) {
        reservations[i].image = casas[j].image;
      }
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Your reservations</h1>
      <div>
        {!reservations.length ? (
          <h2>You don't have reservations</h2>
        ) : (
          <CardsRes
            image={image}
            reservations={reservations}
            cancelReserve={cancelReserve}
          />
        )}
      </div>
    </div>
  );
};

export default Reservations;
