import React, { useEffect } from "react";
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
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url("/imagenes/FondoHomeCasa.jpg")' }}>
      <div className="absolute top-0 left-0 w-full bg-black bg-opacity-50 h-96 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Explore the best places for your stay!</h1>
        <div className="flex space-x-2">
          <button className="bg-white text-black px-4 py-2 rounded">Destination</button>
          <button className="bg-white text-black px-4 py-2 rounded">Date</button>
          <button className="bg-white text-black px-4 py-2 rounded">How many?</button>
          <IconSearch className="text-white w-8 h-8" />
        </div>
      </div>

      <div className="container mx-auto mt-20 px-4">
        <Filters />

        <div className="grid grid-cols-4 gap-4 mt-8">
          <Cards />
        </div>

        <div className="mt-8">
          {/* Paginizado */}
        </div>
      </div>
    </div>
  );
}

export default Home;






