import { useState } from "react";
import axios from "axios";
// import { reserve } from "../../Redux/action/actions";
import { initMercadoPago } from "@mercadopago/sdk-react";

const FormReserva = ({ id, title, nightPrice }) => {
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
      .post(
        "https://apibackend-vpxw.onrender.com/reservation/create",
        newReservation
      )
      .then((response) => {
        // Si la respuesta es exitosa
        console.log("Añadida");
        alert("Reservación añadida");
      })
      .catch((error) => {
        // Si ocurre un error
        console.log("error");
        alert("Error al crear review");
      });

    setInput({ month: "default", numHuespedes: 0, email: "", password: "" });
  };

  initMercadoPago("TEST-0e901727-9400-4f99-8e37-20e241e7f075");

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://apibackend-vpxw.onrender.com/mp/createpreference",
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
    <form onSubmit={handleSubmit} className="bg-black text-white p-4 rounded">
      {/* <div className="mb-4">
        <select
          name="month"
          onChange={handleInputChange}
          className="bg-gray-800 text-black p-2 rounded cursor-pointer"
        >
          <option value="default">Month</option>
          {[
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
          ].map((mes, index) => (
            <option key={index} value={index + 1}>
              {mes}
            </option>
          ))}
        </select>
      </div> */}

      <div className="mb-4 text-black ">
        <h1 className="text-lg text-center  p-4 bg-black text-white ">
          Guests
        </h1>
        <input
          type="number"
          name="numHuespedes"
          value={input.numHuespedes}
          onChange={handleInputChange}
          className="border p-2 w-full bg-gray-800 text-black rounded"
        />
      </div>

      <div className="mb-4 text-black">
        <h1 className="text-lg text-center  p-4 bg-black text-white">
          Email :
        </h1>
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={handleInputChange}
          className="border p-2 w-full bg-gray-800 text-black rounded"
        />
        
      </div>

      <div className="mb-4 text-black">
        <h1 className="text-lg text-center  p-4 bg-black text-white">
        Password :
        </h1>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleInputChange}
          className="border p-2 w-full text-black rounded"
        />
      </div>

      <button
        onClick={handleBuy}
        className="bg-blue-500 hover:bg-blue-400 text-darkblue p-2 rounded"
        type="submit"
      >
        Reservar
      </button>
    </form>
  );
};

export default FormReserva;
