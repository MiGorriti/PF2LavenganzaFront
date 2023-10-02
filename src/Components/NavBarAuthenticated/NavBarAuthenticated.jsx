import React from 'react';
import { Link } from 'react-router-dom';
import { IconLogout, IconUserDown } from "@tabler/icons-react";

function NavBarAuthenticated() {
  /* const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log('User logged out.');
      })
      .catch((error) => {
        console.error('Logout error', error);
      });
  }; */

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home">
          <img className="h-12 w-auto" src="/imagenes/Wanderluxehomes.png" alt="Logo" />
        </Link>
        <div className="flex space-x-4">
          <Link to="/home" className="hover:text-gray-300 font-Zasline">Home</Link>
          <Link to="/my-reservations" className="hover:text-gray-300 font-Zasline">My Reservations</Link>
          <Link to="/recommendations" className="hover:text-gray-300 font-Zasline">Recommendations</Link>
          <Link to="/publish-your-space" className="hover:text-gray-300 font-Zasline">Publish Your Space</Link>
          <Link to="/map" className="hover:text-gray-300 font-Zasline">Map</Link>
          <Link to="/houses" className="hover:text-gray-300 font-Zasline">Houses</Link>
          <Link to="/apartments" className="hover:text-gray-300 font-Zasline">Apartments</Link>
          <Link to="/my-profile" className="hover:text-gray-300 "><IconUserDown /></Link>
          <Link to="/log-out" /* onClick={handleLogout} */ className="hover:text-red-300 "><IconLogout /></Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBarAuthenticated;
