import { Link } from 'react-router-dom';
import styles from './NavBarGuest.module.css';
//import { IconLogout, IconUserDown } from "@tabler/icons-react";

function NavBarGuest() {
  return (
    <nav>
      <div className={styles.navSup}>
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
      </div>
      </div>
    </nav>
  );
}

export default NavBarGuest;
