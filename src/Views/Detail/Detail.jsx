import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { getDetail } from "../../Redux/action/actions";
import { useDispatch, useSelector } from "react-redux";
import { initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios";

const Detail = () => {
  const { idHouse } = useParams();
  const [scrollTop, setScrollTop] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(idHouse));
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const houseDetail = useSelector((state) => state.propertyDetail);
  console.log(houseDetail);
  if (!houseDetail) {
    return <div>...Loading</div>;
  }
  var [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("TEST-95bc6e5e-63b5-47cd-9d31-2eff19c633fe");

  const createPreference = async () => {
    try {
      const response = await axios.post("localhost3001/mp/createpreference", {
        title: title,
        price: nightPriceprice,
      });
      console.log(response);
      const init_point = response.data.response.body.init_point;
      console.log("init point mp", init_point);
      return init_point;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const init_point = await createPreference();

    window.location.href = init_point;
  };

  return (
    <div className="flex start bg-black bg-opacity-75 rounded-2xl  overflow-hidden w-full h-full" >
      <div className="">
        <div>
          <div className="flex flex-col flex-wrap-reverse m-2">
          <div className={style.img}>
            {houseDetail &&
              houseDetail.image?.map((e, index) => (
                <img className={style.imgChild} src={e} alt="" key={index} />
              ))}
          </div>
              <button className="w-36 text-xs">Show more Image</button>

          </div>
          <div className="w-11/12 ml-12 justify-center items-center">
          <div className="text-left mt-4 ml-4 pb-6 border-b-2 flex flex-col">
            <div>Title of property </div>
            <div className="flex justify-between">
            <div className="flex mt-4 ml-2 w-60">
            <div className=" mr-4">{houseDetail.numBeds} beds</div>
              <div className="mr-4">{houseDetail.numBaths} Baths</div>
              <div>{houseDetail.homeCapacity} Huesped</div>
            </div>
            <div className="mr-32">
                Icono del usuario
            </div>
            </div>
          </div>
          <div>
            <div>
              <section className="h-64">
                <div>
                  <p>Titulo de Caracteristicas</p>
                  <div>
                    <p> Caracteristicas</p>
                  </div>
                </div>
              </section >
              <section className="h-64">
                <div>
                  <p>Titulo de Description</p>
                </div>
                <div>
                  <p>description</p>
                </div>
              </section>
              <section className="h-64">
                <div>
                  <p>What can We offer to you</p>
                </div>
              </section>
              <section className="h-64">
                <div>
                  <p>
                    User Detail
                  </p>
                </div>
              </section>
              <section className="h-64">
                <div>
                  <p>
                  Reviews
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

          </div>
         
      </div>
      <div class="w-64 mx-auto bg-black bg-opacity-75 rounded-2xl pb-4 fixed" style={{top: `${scrollTop}px`}}>
  <div class="w-64 mx-auto bg-black rounded-xl pb-4 border-bottom-2 border-radius-2xl ">
    <div class="flex justify-between">
      <div class="flex">
        <span class="ml-3 mt-2">
          <p>{houseDetail.nightPrice}$ Night </p>
        </span>
      </div>
      <div class="flex mt-3 text-xs">
        <span class="mr-2">
          <p>4.83-</p>
        </span>
        <span class="mr-2">
          <p class="text-bisque"> 41 reseñas</p>
        </span>
      </div>
    </div>
    <div class="bg-rosybrown grid grid-cols-1 m-4 rounded-xl mt-8 ">
      <div class="flex h-12 justify-center items-center">
        <div class="w-1/2">
          <p>Llegada</p>
        </div>
        <div class="w-1/2">
          <p>Salida</p>
        </div>
      </div>
      <div class="h-12 flex justify-center items-center">
        <p class="mx-auto">Huesped</p>
      </div>
    </div>
    <div className="">
      <div className="mb-6 mt-8">
        <button className="w-40 transform hover:scale-105 hover:border-white transition-transform">Reserva</button>
      </div>
      <div class="text-xs mb-4">
        <p>No se hara ningun cargo por el momento</p>
      </div>
    </div>
    <div>
      <section>
        <p>Calculo de dias por el precio</p>
      </section>
    </div>
    <div className="flex justify-between m-8 border-t-2 ">
      <p>Total: </p>
      <p>{houseDetail.nightPrice}</p>
    </div>
    <div> user</div>
  </div>
</div>
   
    </div>
  );
};

export default Detail;
