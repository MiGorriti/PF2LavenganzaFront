<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> 3d372cbac81204d4e450c53cbd6c20cba41fceb6
import { Link } from 'react-router-dom';
import styles from './NavBarGuest.module.css';
//import { IconLogout, IconUserDown } from "@tabler/icons-react";

function NavBarGuest() {
  return (
    <nav>
      <div className={styles.navSup}>
<<<<<<< HEAD
      <div className={styles.menu}>
      <img className={styles.logo} src="/imagenes/Wanderluxehomes.png" alt="Logo" />
      <Link to="/about-us" className={styles.options}>
        About Us
      </Link>
      <Link to="/recommendations" className={styles.options}>
        Recommendations
      </Link>
      <Link to="/form" className={styles.options}>
        Rent
      </Link>
      <Link to="/login" className={styles.options}>
        Log In
      </Link>
      <Link to="/register" className={styles.options}>
        Sign Up
      </Link>
=======

        <Link to="/">
          <img className={styles.logo} src="/imagenes/Wanderluxehomes.png" alt="Logo" />
        </Link>

      <div className={styles.menu}>
      
        <Link to="/home" className={styles.options}>
        Home
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
        <Link to="/register" className={styles.options}>
        Sign Up
        </Link>
>>>>>>> 3d372cbac81204d4e450c53cbd6c20cba41fceb6
      </div>
      </div>
    </nav>
  );
}

export default NavBarGuest;
