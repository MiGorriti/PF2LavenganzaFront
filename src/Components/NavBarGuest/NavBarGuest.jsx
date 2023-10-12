import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBarGuest.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { IconLogout, IconUser } from "@tabler/icons-react";
import UserProfileMenu from "../UserProfileMenu/UserProfileMenu";

function NavBarGuest() {
  const [isAuthenticatedNav, setIsAuthenticatedNav] = useState(null);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);
        setIsAuthenticatedNav(true);
        setUserData(userData);

        // Utiliza la información del usuario aquí si es necesario
      } catch (error) {
        console.error("Error al parsear JSON:", error);
      }
    }
  }, []);
  const dispatch = useDispatch();

  const [isUserProfileMenuOpen, setIsUserProfileMenuOpen] = useState(false);

  const userProfileMenuRef = useRef();

  const handleUserProfileClick = () => {
    setIsUserProfileMenuOpen(!isUserProfileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      userProfileMenuRef.current &&
      !userProfileMenuRef.current.contains(event.target)
    ) {
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
    localStorage.removeItem("userData");
    setIsAuthenticatedNav(false);
    useNavigate("/register");
  };
  return (
    <nav className="mb-20 w-full">
      <ul className={styles.navSup}>
        <li>
          <Link to="/">
            <img
              className={styles.logo}
              src="/imagenes/Wanderluxehomes.png"
              alt="Logo"
            />
          </Link>
        </li>
        <li>
          <Link to="/home" className={styles.options}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-us" className={styles.options}>
            About Us
          </Link>
        </li>
        {isAuthenticatedNav ? (
          <>
            <li>
              <Link to="/my-rental-reserves" className={styles.options}>
                My rental reserves
              </Link>
            </li>
            <li>
              <Link to="/recommendations" className={styles.options}>
                Recommendations
              </Link>
            </li>
            <li>
              <Link to="/Form" className={styles.options}>
                Rent your property
              </Link>
            </li>
            <li>
              <div className={styles.options} onClick={handleUserProfileClick}>
                <IconUser className="cursor-pointer" size={25} />
              </div>
            </li>

            {isUserProfileMenuOpen && (
              <div ref={userProfileMenuRef}>
                <UserProfileMenu
                  user={{ name: userData.name, email: userData.email }}
                  isOpen={isUserProfileMenuOpen}
                  onClose={() => setIsUserProfileMenuOpen(false)}
                  onChangePhoneNumber={handleChangePhoneNumber}
                  onChangePassword={handleChangePassword}
                  onLogout={handleLogout}
                />
              </div>
            )}
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBarGuest;
