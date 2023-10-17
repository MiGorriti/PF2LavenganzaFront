import { useState } from "react";
import axios from "axios";
// import { reserve } from "../../Redux/action/actions";
import { initMercadoPago } from "@mercadopago/sdk-react";

const FormReserva = ({ id }) => {
  let i = 0;

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

  const [input, setInput] = useState({
    month: "default",
    numHuespedes: 0,
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    if (event.target.name === "numHuespedes" || event.target.name === "month") {
      event.target.value = Number(event.target.value);
    }
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newReservation = {
      month: input.month,
      numHuespedes: input.numHuespedes,
      idHome: id,
      email: input.email,
      password: input.password,
    };

    console.log(newReservation);

    // dispatch(reserve(reservation));
    axios
      .post("http://localhost:3001/reservation/create", newReservation)
      .then((response) => {
        // Si la respuesta es exitosa
        console.log("Añadida");
        alert("Reservación añadida");
      })
      .catch((error) => {
        // Si ocurre un error
        console.log("error");
        alert("Error al crear reserva");
      });

    setInput({ month: "default", numHuespedes: 0, email: "", password: "" });
  };

  initMercadoPago("TEST-0e901727-9400-4f99-8e37-20e241e7f075");
  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/mp/createpreference",
        {
          id: id,
          title: title,
          price: nightPrice,
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
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <select name="month" onChange={handleInputChange}>
          <option value="default">Month</option>
          {meses.map((mes) => {
            i++;
            return <option value={i}>{mes}</option>;
          })}
        </select>
      </div>

      <label htmlFor="numHuespedes">Guests</label>
      <input
        type="number"
        name="numHuespedes"
        value={input.numHuespedes}
        onChange={handleInputChange}
        style={{
          marginBottom: "5px", // Agrega el margen inferior de 5px
        }}
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={input.email}
        onChange={handleInputChange}
        style={{
          marginBottom: "2px",
          backgroundColor: "#333",
          border: "1px solid white",
        }}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={input.password}
        onChange={handleInputChange}
        style={{ backgroundColor: "#333", border: "1px solid white" }}
      />

      <button
        onClick={handleBuy}
        type="submit"
        style={{ backgroundColor: "#4b4a4c" }}
      >
        Reservar
      </button>
    </form>
  );
};

export default FormReserva;
