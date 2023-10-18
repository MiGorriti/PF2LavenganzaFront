import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../Redux/action/actions";
import "./Reviews.css";

const Reviews = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch]);

  const reviews = useSelector((state) => state.reviews);
  console.log(reviews);
  return (
    <div>
      <div>
        {!reviews.length ? (
          <h4>There's no comments</h4>
        ) : (
          <li>
            {reviews?.map((rev) => {
              return (
                <div className="reviewcuadradito">
                  <ul>
                    <p
                      style={{
                        textAlign: "center",
                        backgroundColor: "#050505",
                        color: "white",
                      }}
                    >
                      {rev.pushDate}
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        backgroundColor: "#050505",
                        color: "white",
                      }}
                    >
                      {rev.userName}
                    </p>
                    <p style={{ textAlign: "center" }}>{rev.description}</p>
                    <p style={{ textAlign: "center" }}>Stars: {rev.rating}</p>
                  </ul>
                </div>
              );
            })}
          </li>
        )}
      </div>
    </div>
  );
};

export default Reviews;
