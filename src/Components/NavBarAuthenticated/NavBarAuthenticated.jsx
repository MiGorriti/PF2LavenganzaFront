import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarAuthenticated.module.css";
import { IconLogout, IconUser } from "@tabler/icons-react";
import UserProfileMenu from "../UserProfileMenu/UserProfileMenu";

function NavBarAuthenticated() {
  const [isUserProfileMenuOpen, setIsUserProfileMenuOpen] = useState(false);
  const userProfileMenuRef = useRef();

  const handleUserProfileClick = () => {
    setIsUserProfileMenuOpen(!isUserProfileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (userProfileMenuRef.current && !userProfileMenuRef.current.contains(event.target)) {
      setIsUserProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChangePhoneNumber = () => {
    // Lógica para cambiar el número de teléfono del usuario
    console.log("Cambiar número de teléfono");
  };

  const handleChangePassword = () => {
    // Lógica para cambiar la contraseña del usuario
    console.log("Cambiar contraseña");
  };

  const handleLogout = () => {
    // Lógica para cerrar la sesión del usuario
    console.log("Cerrar sesión");
  };

  return (
    <nav className="mb-20 w-full">
      <div className={styles.navSup}>
        <Link to="/">
          <img className={styles.logo} src="/imagenes/Wanderluxehomes.png" alt="Logo" />
        </Link>
        <div className={styles.menu}>
          <Link to="/home" className={styles.options}>
            Home
          </Link>
          <Link to="/my-rental-reserves" className={styles.options}>
            My rental reserves
          </Link>
          <Link to="/recommendations" className={styles.options}>
            Recommendations
          </Link>
          <Link to="/map" className={styles.options}>
            Map
          </Link>
          <div className={styles.options} onClick={handleUserProfileClick}>
            <IconUser className="cursor-pointer" size={25} />
          </div>
          <Link to="/logout">
            <IconLogout className="top-1/2 right-0 absolute cursor-pointer text-white hover:text-darkred
            transform -translate-y-1/2 -translate-x-1/2"  size={25}  />
          </Link>
          {isUserProfileMenuOpen && (
            <div ref={userProfileMenuRef}>
              <UserProfileMenu
                user={{ name: "Username", email: "Useremail@example.com", phone: "123456789" }}
                isOpen={isUserProfileMenuOpen}
                onClose={() => setIsUserProfileMenuOpen(false)}
                onChangePhoneNumber={handleChangePhoneNumber}
                onChangePassword={handleChangePassword}
                onLogout={handleLogout}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBarAuthenticated;




{/* <nav className='mb-20 w-full relative'>
<div className={styles.navbarContainer}>
  <UserProfileMenu />
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
    <div className={styles.profileOption}>
      <IconUser size={20} />
    </div>
    {isProfileMenuOpen && <UserProfileMenu onClose={closeProfileMenu} />}
    <div className={styles.logoutOption} onClick={handleLogout}>
      <IconLogout size={20} />
    </div>
  </div>
</div>
</nav> */}
