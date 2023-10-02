import { useEffect } from "react";
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
    <div className="relative">
      <div className={styles.container}>
        <section className="relative w-full h-96">
          <img
            src="/imagenes/FondoHomeCasa.jpg"
            alt="Fondo"
            className="absolute mt-10 top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover"
          />
          <div className={`${styles.overlay} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full`}>
            <h1 className={styles.title}>Explore the best places for your stay!</h1>
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





