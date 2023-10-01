import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { IconLogout, IconUserDown } from "@tabler/icons-react";

function Navbar() {
  return (
    <nav>
      <div className={styles.navSup}>
        <Link to="/">
          <img className={styles.logo} src="/imagenes/Wanderluxehomes.png" alt="Logo" />
        </Link>
      <div className={styles.menu}>
        <Link to="/home" className={styles.linkNoUnderline}>
          Home{" "}
        </Link>
        <Link to="/my-reservations" className={styles.linkNoUnderline}>
        My Reservations
        </Link>
        <Link to="/form" className={styles.linkNoUnderline}>
        Publish Your Space 
        </Link>
        <Link to="/map" className={styles.linkNoUnderline}>
        Map
        </Link>
        <Link to="/houses" className={styles.linkNoUnderline}>
          Houses
        </Link>
        <Link to="/apartments" className={styles.linkNoUnderline}>
        Apartments
        </Link>
        <Link to="/my-profile" className={styles.iconUserDownLink}>
          <IconUserDown className={styles.iconUserDown} />
        </Link>
{/*         <Link onClick={logout} to="#">
          <IconLogout className={styles.iconLogout} />
        </Link> */}
        <IconLogout className={styles.iconLogout} />
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
