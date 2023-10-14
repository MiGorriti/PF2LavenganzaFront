import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../Redux/action/actions";
import Filters from "../../Components/Filters/Filters";
import Cards from "../../Components/Cards/Cards";
import { IconSearch } from "@tabler/icons-react";
import styles from "./Home.module.css";


import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

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
        <div className="absolute top-1/4 text-center w-full">
          <h1 className="text-white text-4xl mt-8 text-shadow">Explore the best places for your stay!</h1>
          <div className="w-8/12 mx-auto mt-5">
            <p className="bg-white p-2 rounded-t-2xl w-4/12 font-bold">Rent / Reserve</p>
            <div className="bg-white p-4 rounded-tr-2xl rounded-b-2xl text-black flex justify-between">
              <button className="filter">Destination</button>
              <div>
                <label htmlFor="dateInput"> Date:</label> <br />
                <input id="dateInput" type="date" />
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