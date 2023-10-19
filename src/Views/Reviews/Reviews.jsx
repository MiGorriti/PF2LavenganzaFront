import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../Redux/action/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch]);

  const reviews = useSelector((state) => state.reviews);

  return (
    <div className="mt-4">
      {!reviews.length ? (
        <h4>No hay comentarios disponibles</h4>
      ) : (
        <ul>
          {reviews?.map((rev, index) => (
            <li key={index} className="bg-gray-100 rounded p-4 mb-4">
              <div className="text-center mb-2">
                <p className="bg-black text-white py-2 rounded">
                  {rev.pushDate}
                </p>
                <p className="bg-black text-white py-2 rounded">{rev.userName}</p>
              </div>
              <p className="text-center">{rev.description}</p>
              <div className="flex justify-center">
                <p className="mr-2 text-2xl">Rating:</p>
                <div className="flex items-center">
                  {[...Array(rev.rating)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="text-yellow" />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;

