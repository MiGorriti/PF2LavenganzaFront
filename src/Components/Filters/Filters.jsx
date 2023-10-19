import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCat,
  filterLocation,
  getCategory,
  getLocations,
  setPriceFilter,
} from "../../Redux/action/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const location = useSelector((state) => state.location);
  const minPrice = useSelector((state) => state.minPrice);
  const maxPrice = useSelector((state) => state.maxPrice);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getLocations());
  }, []);

  const handleMaxChange = (e) => {
    const newMaxPrice = parseInt(e.target.value);
    dispatch(setPriceFilter({ minPrice: minPrice, maxPrice: newMaxPrice }));
  };

  const handleMinChange = (e) => {
    const newMinPrice = parseInt(e.target.value);
    dispatch(setPriceFilter({ minPrice: newMinPrice, maxPrice: maxPrice }));
  };

  const handleSelector = (e) => {
    const event = e.target.value;
    dispatch(filterCat(event));
  };

  const handleSelector2 = (e) => {
    const event = e.target.value;
    dispatch(filterLocation(event));
  };

  return (
    <div className="p-4 flex space-x-20 items-center mt-8 ml-40">
      <select className="bg-black text-white p-2 rounded cursor-pointer" onChange={handleSelector}>
        <option value="default">Category</option>
        {category &&
          category.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
      </select>
      <select className="bg-black text-white p-2 rounded cursor-pointer" onChange={handleSelector2} style={{ marginRight: "2px" }}>
        <option value="default">Location</option>
        {location &&
          location?.map((loc) => (
            <option key={loc.id} value={loc.direction}>
              {loc.direction}
            </option>
          ))}
      </select>
      <div className="flex space-x-20">
        <input
          className="bg-black text-white p-2 rounded placeholder-white"
          type="number"
          value={minPrice}
          onChange={handleMinChange}
          placeholder="MinPrice"
        />
        <input
          className="bg-black text-white p-2 rounded placeholder-white"
          type="number"
          value={maxPrice}
          onChange={handleMaxChange}
          placeholder="MaxPrice"
        />
      </div>
    </div>
  );
};

export default Filters;

