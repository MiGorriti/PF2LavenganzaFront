import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarGuest.module.css';
//import { IconLogout, IconUserDown } from "@tabler/icons-react";

function NavBarGuest() {
  return (
    <nav>
      <div className={styles.navSup}>
<<<<<<< HEAD:pf2/src/Components/NavBarGuest/NavBarGuest.jsx
=======

        <Link to="/">
          <img className={styles.logo} src="/imagenes/Wanderluxehomes.png" alt="Logo" />
        </Link>

>>>>>>> 0a4fa2b492278cf80d25e0943ae4c6e57f0f036a:pf2/src/Components/NavBar/NavBar.jsx
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

export default NavBarGuest;
