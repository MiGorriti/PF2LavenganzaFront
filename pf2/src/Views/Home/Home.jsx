import React from "react";
import styles from './Home.module.css';
import Footer from '../../Components/Footer/Footer';
import Cards from "../../Components/Cards/Cards";

function Home() {

  return (
    <div>
      <div className={styles.img}>
        <img src="/imagenes/FondoHomeCasa.jpg" alt="imagen" />
        </div>
      <div className={styles.pad}>
        <div className={styles.msg}>
          <h1 className={styles.h1}>Explore the best places for your stay !</h1>
      </div>
      </div>
      <Cards/>
      <Footer />
    </div>
   
  );
}

export default Home;
