import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconLogout, IconUser } from "@tabler/icons-react";
import UserProfileMenu from "../UserProfileMenu/UserProfileMenu";
import styles from "./NavBarGuest.module.css";

function NavBarGuest() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
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
    <nav className="w-full bg-black">
      <div className="container mx-auto flex items-center justify-evenly">
        <ul className="flex items-center space-x-48">
          <li>
            <Link to="/">
              <img className="w-24" src="/imagenes/Wanderluxehomes.png" alt="Logo" />
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
          {!isAuthenticated ? (
            <>
              <li>
                <Link to="/login" className={styles.options}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className={styles.options}>
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/my-rental-reserves" className={styles.options}>
                  My Rental Reserves
                </Link>
              </li>
              <li>
                <Link to="/recommendations" className={styles.options}>
                  Recommendations
                </Link>
              </li>
              <li>
                <Link to="/map" className={styles.options}>
                  Map
                </Link>
              </li>
              <li>
                <div className="relative">
                  <div
                    onClick={handleUserProfileClick}
                    className="cursor-pointer text-white hover:text-gray-400"
                  >
                    <IconUser className="w-6 h-6" />
                  </div>
                  {isUserProfileMenuOpen && (
                    <div
                      ref={userProfileMenuRef}
                      className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg p-4"
                    >
                      <UserProfileMenu
                        user={{
                          name: "Username",
                          email: "Useremail@example.com",
                          phone: "123456789",
                        }}
                        isOpen={isUserProfileMenuOpen}
                        onClose={() => setIsUserProfileMenuOpen(false)}
                        onChangePhoneNumber={handleChangePhoneNumber}
                        onChangePassword={handleChangePassword}
                        onLogout={handleLogout}
                      />
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div
                  onClick={handleLogout}
                  className="cursor-pointer text-white hover:text-darkred"
                >
                  <IconLogout className="w-6 h-6" />
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBarGuest;
