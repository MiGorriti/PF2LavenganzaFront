import React,  { useEffect } from "react";
import { Link,  useParams } from "react-router-dom";
import "./Detail.css";
import { getDetail } from "../../Redux/action/actions";
import { useDispatch, useSelector } from "react-redux";


const Detail = () => {
<<<<<<< HEAD:pf2/src/Views/Detail/Detail.jsx
<<<<<<< Updated upstream
=======
  const { idHouse } = useParams();
<<<<<<< HEAD

=======
  console.log(idHouse)
=======
  const { idHouse } = useParams();
>>>>>>> 3d372cbac81204d4e450c53cbd6c20cba41fceb6:src/Views/Detail/Detail.jsx
>>>>>>> f001fde9878a6bddd2edf5f5aecfa860fb3ff5dd
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(idHouse));
  }, []);

<<<<<<< HEAD
  const houseDetail = useSelector((state) => state.propertyDetail);
  console.log(houseDetail)
=======
  const houseDetail = useSelector((state) => state.houseDetail);
<<<<<<< HEAD:pf2/src/Views/Detail/Detail.jsx

=======
>>>>>>> 3d372cbac81204d4e450c53cbd6c20cba41fceb6:src/Views/Detail/Detail.jsx
>>>>>>> f001fde9878a6bddd2edf5f5aecfa860fb3ff5dd
  if (!houseDetail) {
    return <div>...Loading</div>;
  }

  const {
    title,
    image,  
    description,
    nightPrice,
    location,
    category,
    homeCapacity,
    numBaths,
    numBeds,
    availability
  } = houseDetail;

<<<<<<< HEAD
  
=======
<<<<<<< HEAD:pf2/src/Views/Detail/Detail.jsx
  
  
>>>>>>> Stashed changes
=======
  console.log("algo",houseDetail);
>>>>>>> f001fde9878a6bddd2edf5f5aecfa860fb3ff5dd
  
>>>>>>> 3d372cbac81204d4e450c53cbd6c20cba41fceb6:src/Views/Detail/Detail.jsx
  return (
    <div className="container bootdey">
      <div className="col-md-12">
        <section className="panel">
          <div className="panel-body">
            <div className="col-md-6">
              <div className="pro-img-details">
                <img
                  src={image}
                  alt=""
                />
              </div>
              <div className="pro-img-list">
                <Link to={image}>
                  <img
                    src={image[0]}
                    alt=""
                  />
                </Link>
                <Link to={image}>
                  <img
                    src={image[1]}
                    alt=""
                  />
                </Link>
                <Link to={image}>
                  <img
                    src={image[2]}
                    alt=""
                  />
                </Link>
                <Link to={image}>
                  <img
                    src={image}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="pro-d-title">
                {" "}
                {title}
              </h2>
              <h3>{availability}</h3>
              <p className="descripcion">
                 {description}
              </p>
              <div className="product_meta text-white">
                <span className="posted_in">
                  {" "}
                  <strong className="text-white">Categories:</strong> <Link to="#">{category}</Link>,{" "}
                  <Link to="#">{category.name}</Link>,{" "}  
                </span>
                <span className="tagged_as">
                  <strong>Specs:</strong> <Link to="#">{numBaths}</Link>,{" "}
                  <Link to="#">{numBeds}</Link><Link to="#">{homeCapacity}</Link>.
                </span>
              </div>
              <div className="m-bot15">
                {" "}
                <strong>Price : </strong>{" "}
                
                <span className="pro-price">{nightPrice}</span>
              </div>
              <div className="form-group"></div>
              <p>
                <button className="btn btn-round btn-danger" type="button">
                  <i className="fa fa-shopping-cart"></i> Alquilar
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail;
