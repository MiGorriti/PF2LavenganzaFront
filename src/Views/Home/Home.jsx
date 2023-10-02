import React, { useEffect } from "react";
import styles from './Home.module.css';
import Cards from "../../Components/Cards/Cards";
import {IconSearch} from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { getCars } from "../../Redux/action/actions";
import Filters from '../../Components/Filters/Filters';

function Home() {
const dispatch = useDispatch()

  useEffect(()=>{
  dispatch(getCars())
},[dispatch])
  return (
    <div>
      <div className={styles.container}>
      <section className={styles.backgroundimage}>
                <img src="/imagenes/FondoHomeCasa.jpg" alt="Fondo" className={styles.topImage} />
                <div className={styles.overlay}>
                    <h1 className={styles.title}>Explore the best places for your stay !</h1>
                </div>
            </section>

        <div className={styles.filters}>
        <p type="button" className={styles.rent}>Rent / Reserve</p>
          <button type="button" className="filter">Destination</button>
          <button type="button" className="filter">Date</button>
          <button type="button" className="filter">How many?</button>
          <IconSearch className={styles.search}/>
        </div>
      </div>
      <Filters/>
      <Cards />
      
    </div>
  );
}

export default Home;





