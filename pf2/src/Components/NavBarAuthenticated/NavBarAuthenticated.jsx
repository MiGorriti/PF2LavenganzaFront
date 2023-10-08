import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarAuthenticated.module.css';
import { IconLogout, IconUserDown } from "@tabler/icons-react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function NavBarAuthenticated({ handleLogout }) {
  const navigate = useNavigate();
  const userName = useSelector(state => state.userName);
  console.log('userName:', userName);  
 
  const userNameGoogle = localStorage.getItem("userName");
  

  const handleLogoutClick = () => {
    handleLogout(); 
    handleLogoutGoogle(); 
    navigate('/');

    
  };
  

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
        {"Welcome " + ( localStorage.getItem("userName") ||userNameGoogle || <IconUserDown />)}
          </Link>
        <Link to="/" onClick={handleLogoutClick}>
        <IconLogout />
      </Link>
      </div>
      </div>
    </nav>
  );
}

export default NavBarAuthenticated;