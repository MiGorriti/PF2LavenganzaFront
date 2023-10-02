import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarAuthenticated.module.css';
import { IconLogout, IconUserDown } from "@tabler/icons-react";
/* import { auth } from './firebase'; */

function NavBarAuthenticated() {
/*     const handleLogout = () => {
        auth.signOut()
          .then(() => {
            console.log('User logged out.');
          })
          .catch((error) => {
            console.error('Logout error', error);
          });
      }; */
  return (
    <nav>
      <div className={styles.navSup}>
      <div className={styles.menu}>
        <Link to="/home">
      <img className={styles.logo} src="/imagenes/Wanderluxehomes.png" alt="Logo" />
      </Link>
        <Link to="/home" className={styles.options}>
          Home
        </Link>
        <Link to="/my-reservations" className={styles.options}>
        My reservations
        </Link>
        <Link to="/recommendations" className={styles.options}>
        Recommendations
        </Link>
        <Link to="/publish-your-space" className={styles.options}>
        Publish your space
        </Link>
        <Link to="/map" className={styles.options}>
        Map
        </Link>
        <Link to="/houses" className={styles.options}>
        Houses
        </Link>
        <Link to="/apartments">
        Apartments 
        </Link>
        <Link to="/my-profile">
        <IconUserDown/>
        </Link>
        <Link to="/log-out" /* onClick={handleLogout} */>
        <IconLogout/>
        </Link>
      </div>
      </div>
    </nav>
  );
}

export default NavBarAuthenticated;