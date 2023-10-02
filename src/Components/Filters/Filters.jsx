import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCat, filterLocation, getCategory, getLocations } from "../../Redux/action/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const location = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getLocations());
  }, [dispatch]);

  const handleSelector = (e) => {
    const event = e.target.value;
    dispatch(filterCat(event));
  };

  const handleSelector2 = (e) => {
    const event = e.target.value;
    dispatch(filterLocation(event));
  };

  return (
    <div className="p-4 flex items-center space-x-4">
      <select
        className="bg-black text-white p-2 rounded"
        onChange={handleSelector}
      >
        <option value="default">Default</option>
        {category &&
          category.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
      </select>
      <select
        className="bg-black text-white p-2 rounded"
        onChange={handleSelector2}
      >
        <option value="default">Default</option>
        {location &&
          location?.map((loc) => (
            <option key={loc.id} value={loc.direction}>
              {loc.direction}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Filters;

