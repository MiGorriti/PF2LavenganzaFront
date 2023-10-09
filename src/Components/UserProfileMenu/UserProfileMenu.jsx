import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faEnvelope, faLock, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const UserProfileMenu = ({ user, isOpen, onClose, onChangePhoneNumber, onLogout, onChangePassword }) => {
  return (
    <div className={`fixed top-0 right-0 m-4 p-4 bg-black border rounded shadow-lg z-10 ${isOpen ? "block" : "hidden"}`}>
      <div className="mb-4">
        <div className="font-semibold">{user.name}</div>
        <div className="text-gray-500">{user.email}</div>
      </div>
      <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
        {user.phone}
      </div>
      <div className="border-t border-gray-300 pt-2 mt-2">
        <div className="flex items-center mb-2 hover:text-steelblue cursor-pointer" onClick={onChangePhoneNumber}>
          <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
          Cambiar Número de Teléfono
        </div>
        <div className="flex items-center mb-2 hover:text-steelblue  cursor-pointer" onClick={onChangePassword}>
          <FontAwesomeIcon icon={faLock} className="mr-2" />
          Cambiar Contraseña
        </div>
        <div className="flex items-center hover:text-darkred mb-2 cursor-pointer" onClick={onLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          Cerrar Sesión
        </div>
      </div>
    </div>
  );
};

export default UserProfileMenu;
