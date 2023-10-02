import React from "react";
import { Link } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
<<<<<<< Updated upstream
=======
  const { idHouse } = useParams();
  console.log(idHouse)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(idHouse));
  }, []);

  const houseDetail = useSelector((state) => state.houseDetail);

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

  
  
>>>>>>> Stashed changes
  return (
    <div className="container bootdey">
      <div className="col-md-12">
        <section className="panel">
          <div className="panel-body">
            <div className="col-md-6">
              <div className="pro-img-details">
                <img
                  src="https://www.bootdey.com/image/550x380/FFB6C1/000000"
                  alt=""
                />
              </div>
              <div className="pro-img-list">
                <Link to="#">
                  <img
                    src="https://www.bootdey.com/image/115x100/87CEFA/000000"
                    alt=""
                  />
                </Link>
                <Link to="#">
                  <img
                    src="https://www.bootdey.com/image/115x100/FF7F50/000000"
                    alt=""
                  />
                </Link>
                <Link to="#">
                  <img
                    src="https://www.bootdey.com/image/115x100/20B2AA/000000"
                    alt=""
                  />
                </Link>
                <Link to="#">
                  <img
                    src="https://www.bootdey.com/image/120x100/20B2AA/000000"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="pro-d-title">
                {" "}
                Monoambiente de mala muerte a sobreprecio
              </h4>
              <p className="descripcion">
                No puede vivir ni un caracol, pero ta barato (mentira)
              </p>
              <div className="product_meta">
                <span className="posted_in">
                  {" "}
                  <strong>Categories:</strong> <Link to="#">Monoambiente</Link>,{" "}
                  <Link to="#">Claustrofobia</Link>,{" "}
                  <Link to="#">Sin cocina</Link>,{" "}
                  <Link to="#">Con humedad en las paredes</Link>.
                </span>
                <span className="tagged_as">
                  <strong>Tags:</strong> <Link to="#">Estudiantes</Link>,{" "}
                  <Link to="#">Solteros/as</Link>.
                </span>
              </div>
              <div className="m-bot15">
                {" "}
                <strong>Price : </strong>{" "}
                <span className="amount-old">$54400</span>{" "}
                <span className="pro-price"> $300000</span>
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
