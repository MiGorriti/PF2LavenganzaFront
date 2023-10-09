import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarGuest.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { IconLogout, IconUser } from "@tabler/icons-react";
import UserProfileMenu from "../UserProfileMenu/UserProfileMenu";


function NavBarGuest() {
  const isAuthenticated = useSelector((state)=> state.isAuthenticated)
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
    <nav className='mb-20 w-full'>
      <ul className={styles.navSup}>
        <li>
          <Link to ='/'>
          <img className={styles.logo} src="/imagenes/Wanderluxehomes.png" alt="Logo"/>
          </Link>
        </li>
        <li>
          <Link to='/home' className={styles.options}>Home</Link>
        </li>
        <li>
          <Link to = '/about-us' className={styles.options}>
          About Us
          </Link>
        </li>
        {isAuthenticated ?(
          <>
          <li>
            <Link to = '/my-rental-reserves' className={styles.options}>
            My rental reserves
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
          <div className={styles.options} onClick={handleUserProfileClick}>
            <IconUser className="cursor-pointer" size={25} />
          </div>
          </li>
          <li>
          <Link to="/logout">
            <IconLogout className="top-1/2 right-0 absolute cursor-pointer text-white hover:text-darkred
            transform -translate-y-1/2 -translate-x-1/2"  size={25}  />
          </Link>
          </li>
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
          </>
        ):(
          <>
          <li>
            <Link to='/login'>
            Login
            </Link>
          </li>
          <li>
            <Link to ='/register'>
              Sign Up
            </Link>
          </li>
          </>
        )}
      </ul>
    </nav>
    
  );
}

export default NavBarGuest;
