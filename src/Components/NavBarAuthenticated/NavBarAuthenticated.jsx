import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styles from './NavBarAuthenticated.module.css';
import { IconLogout, IconUser } from "@tabler/icons-react";
import UserProfileMenu from '../UserProfileMenu/UserProfileMenu';

function NavBarAuthenticated() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const history = useHistory();

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const closeProfileMenu = () => {
    setIsProfileMenuOpen(false);
  };

  const handleLogout = () => {
    // Redirige al usuario a la página de inicio de sesión al hacer clic en el IconLogout
    history.push('/login');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/home">
          <img className={styles.logo} src="/imagenes/Wanderluxehomes.png" alt="Logo" />
        </Link>
        <div className={styles.menu}>
          <Link to="/home" className={styles.option}>
            Home
          </Link>
          <Link to="/my-reservations" className={styles.option}>
            My Reservations
          </Link>
          <Link to="/recommendations" className={styles.option}>
            Recommendations
          </Link>
          <Link to="/publish-your-space" className={styles.option}>
            Publish Your Space
          </Link>
          <Link to="/map" className={styles.option}>
            Map
          </Link>
          <Link to="/houses" className={styles.option}>
            Houses
          </Link>
          <Link to="/apartments" className={styles.option}>
            Apartments
          </Link>
          <div className={styles.profileOption} onClick={handleProfileClick}>
            <IconUser size={20} />
          </div>
          {isProfileMenuOpen && <UserProfileMenu onClose={closeProfileMenu} />}
          <div className={styles.logoutOption} onClick={handleLogout}>
            <IconLogout size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarAuthenticated;
