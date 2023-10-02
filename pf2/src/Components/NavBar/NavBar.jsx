import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
//import { IconLogout, IconUserDown } from "@tabler/icons-react";

function Navbar() {
  return (
    <nav>
      <div className={styles.navSup}>

        <Link to="/">
          <img className={styles.logo} src="/imagenes/Wanderluxehomes.png" alt="Logo" />
        </Link>

      <div className={styles.menu}>
      
        <Link to="/map" className={styles.options}>
        Map
        </Link>
        <Link to="/recommendations" className={styles.options}>
        Recommendations
        </Link>
        <Link to="/about-us" className={styles.options}>
        About Us
        </Link>
        <Link to="/login" className={styles.options}>
        Log In
        </Link>
        <Link to="/sign up" className={styles.options}>
        Sign Up
        </Link>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
