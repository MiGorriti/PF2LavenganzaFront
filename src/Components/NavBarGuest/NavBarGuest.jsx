import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarGuest.module.css';


function NavBarGuest() {
  return (
    <nav>
      <div className={styles.navSup}>

        <Link to="/">
          <img className={styles.logo} src="/imagenes/Wanderluxehomes.png" alt="Logo" />
        </Link>

      <div className={styles.menu}>
      
        <Link to="/home" className={styles.options}>
        Home
        </Link>
        <Link to="/form" className={styles.options}>
        Rent
        </Link>
        <Link to="/about-us" className={styles.options}>
        About Us
        </Link>
        <Link to="/Login" className={styles.options}>
        Log In
        </Link>
        <Link to="/Register" className={styles.options}>
        Sign Up
        </Link>
      </div>
      </div>
    </nav>
  );
}

export default NavBarGuest;
