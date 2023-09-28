import React from "react";
import styles from './Home.module.css';
import Cards from "../../Components/Cards/Cards";
import {IconSearch} from "@tabler/icons-react";

function Home() {
  return (
    <div>
      <div className={styles.separar}>
      </div>
      <div className={styles.container}>
        <div className={styles.slider}>
          <div className={styles.slide}>
            <h1 className={styles.h1}>Explore The Best Places For Your Stay !</h1>
            <img className={styles.img} src="/imagenes/FondoHomeCasa.jpg" alt="Imagen de fondo" />
          </div>
        </div>

        <div className={styles.filters}>
        <p type="button" className={styles.rent}>Rent / Reserve</p>
          <button type="button" className="filter">Destination</button>
          <button type="button" className="filter">Date</button>
          <button type="button" className="filter">How many?</button>
          <IconSearch className={styles.search}/>
        </div>
      </div>
      <Cards />
      
    </div>
  );
}

export default Home;





