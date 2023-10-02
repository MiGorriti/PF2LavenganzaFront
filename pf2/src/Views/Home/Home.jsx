import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCars } from "../../Redux/action/actions";
import Filters from "../../Components/Filters/Filters";
import Cards from "../../Components/Cards/Cards";
import { IconSearch } from "@tabler/icons-react";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <div className="relative">
      <div className="relative w-full ">
        <img
          src="/imagenes/FondoHomeCasa.jpg"
          alt="Fondo"
          className=" w-full h-auto object-cover"
        />
        <div className="absolute top-1/2 text-center w-full">
          <h1 className="text-white text-4xl font-bold mb-4 font-ModernAntiqua-book">Explore the best places for your stay!</h1>

          <div className="w-10/12 mx-auto">
          <p className="bg-white p-2 rounded-t-2xl w-2/12">Rent / Reserve</p>
          <div className="bg-white p-4 rounded-tr-2xl rounded-b-2xl text-black flex justify-between">
          <button className="filter">Destination</button>
          <div>
          <label htmlFor="dateInput">Date:</label> <br />
          <input id="dateInput" type="date"/>
          </div>
          <button className="filter">How many?</button>
          <IconSearch className="text-black mt-6 cursor-pointer hover:text-royalblue" />
        </div>
          </div>

        </div>
      </div>

      <Filters />
      <Cards />
    </div>
  );
}

export default Home;







