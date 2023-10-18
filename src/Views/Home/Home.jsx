import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../Redux/action/actions";
import Filters from "../../Components/Filters/Filters";
import Cards from "../../Components/Cards/Cards";

import "./Home.css";
import Page from "../../Components/Paginate/Page";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  const property = useSelector((state) => state.property);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="relative">
      <h1 className="titulardo" style={{ textAlign: "center" }}>
        Find your ideal holiday place!
      </h1>

      <Filters />
      <Cards currentPage={currentPage} />
      <Page
        cardsPerPage={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} // Pasa setCurrentPage como prop
        totalCars={property.length}
      />
    </div>
  );
}

export default Home;
