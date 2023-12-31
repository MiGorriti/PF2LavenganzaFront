import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBarGuest.module.css";
import { useDispatch } from "react-redux";
import { IconLogout, IconUser } from "@tabler/icons-react";
import UserProfileMenu from "../UserProfileMenu/UserProfileMenu";

function NavBarGuest() {
  const [isAuthenticatedNav, setIsAuthenticatedNav] = useState(null);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);
        setIsAuthenticatedNav(true);
        setUserData(userData);
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
    navigate("/register");
  };

  const specificEmail = "wanderluxe@gmail.com"; // Reemplaza con el correo específico

  return (
    <nav className="w-full">
      <ul className={styles.navSup}>
        <li>
          <Link to="/" className="text-lg">
            <img
              className={styles.logo}
              src="/imagenes/Wanderluxehomes.png"
              alt="Logo"
            />
          </Link>
        </li>
        <li>
          <Link to="/home" className={`text-xl ${styles.options}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className={`text-xl ${styles.options} ml-5`}>
            About Us
          </Link>
        </li>
        {isAuthenticatedNav ? (
          <>
            <li>
              <Link
                to="/MyReservations"
                className={`text-xl ${styles.options}`}
              >
                My rental reserves
              </Link>
            </li>

            {userData.email === specificEmail && ( // Comprueba el correo electrónico
              <>
                <li>
                  <Link to="/Form" className={`text-xl ${styles.options}`}>
                    Rent your property
                  </Link>
                </li>
                <li>
                  <Link to="/admin" className={`text-xl ${styles.options}`}>
                    Admin
                  </Link>
                </li>
              </>
            )}

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

            <li>
            <div className={styles.options} onClick={handleLogout}>
            <IconLogout className="cursor-pointer hover:text-darkred" size={25}/>
            </div>
            </li>
          </>
        ) : (
          <>
            <div style={{ marginRight: "10px" }}>
              <li>
                <Link
                  to="/login"
                  style={{ fontSize: "1.2rem" }}
                  className="text-white"
                >
                  Login
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link
                  to="/register"
                  style={{ fontSize: "1.2rem" }}
                  className="text-white"
                >
                  Sign Up
                </Link>
              </li>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBarGuest;
