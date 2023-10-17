import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../Redux/action/actions";
import Filters from "../../Components/Filters/Filters";
import Cards from "../../Components/Cards/Cards";
import ReactPaginate from "react-paginate";

function Home() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const propertyPerPage = 12;

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const cars = useSelector((state) => state.property);

  const offset = currentPage * propertyPerPage;
  const currentPageData = cars.slice(offset, offset + propertyPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
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
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
}

export default Home;
