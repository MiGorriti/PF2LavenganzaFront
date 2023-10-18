import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../Redux/action/actions";
import Filters from "../../Components/Filters/Filters";
import Cards from "../../Components/Cards/Cards";
import ReactPaginate from "react-paginate";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [isFirstPage, setIsFirstPage] = useState(true); // Inicializar con true
  const [isLastPage, setIsLastPage] = useState(false); // Inicializar con false
  const propertyPerPage = 1;

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const cars = useSelector((state) => state.property);

  const offset = currentPage * propertyPerPage;
  const currentPageData = cars.slice(offset, offset + propertyPerPage);

  const pageCount = Math.ceil(cars.length / propertyPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);

    // Verificar si estamos en la primera página (selected === 0) o en la última página (selected === pageCount - 1)
    const isFirstPage = selected === 0;
    const isLastPage = selected === pageCount - 1;

    // Actualizar el estado para ocultar los botones según corresponda
    setIsFirstPage(isFirstPage);
    setIsLastPage(isLastPage);
  };

  return (
    <div className="relative">
      <h1 className="titulardo" style={{ textAlign: "center" }}>
        Find your ideal holiday place!
      </h1>

      <Filters />
      <Cards property={currentPageData} />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={Math.ceil(cars.length / propertyPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex justify-center space-x-4"}
        previousLinkClassName={
          isFirstPage ? "pagination__link--disabled" : "pagination__link"
        }
        nextLinkClassName={
          isLastPage ? "pagination__link--disabled" : "pagination__link"
        }
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
}

export default Home;
