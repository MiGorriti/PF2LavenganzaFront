import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const UserProfileMenu = ({ user, selectedFile }) => {
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEditProfilePictureModalOpen, setIsEditProfilePictureModalOpen] = useState(false);

  const openChangePasswordModal = () => {
    setIsChangePasswordModalOpen(true);
  };

  const closeChangePasswordModal = () => {
    setIsChangePasswordModalOpen(false);
  };

  const openEditProfilePictureModal = () => {
    setIsEditProfilePictureModalOpen(true);
  };

  const closeEditProfilePictureModal = () => {
    setIsEditProfilePictureModalOpen(false);
  };


  const handlePasswordChangeSubmit = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      console.error("Please complete all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      console.error("Passwords do not match.");
      return;
    }

    try {
      // Realizar una solicitud al servidor para cambiar la contraseña
      const response = await axios.post("http://localhost:3001/change-password", {
        userId: user.id, // Suponiendo que se tiene la información del usuario autenticado
        currentPassword,
        newPassword,
      });
      console.log(response.data.message);
    } catch (error) {
      console.error("Error when changing password: ", error);
    }

    closeChangePasswordModal();
  };


  const handleProfilePictureEditSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userId", user.id); // Suponiendo que se tiene la información del usuario autenticado
    formData.append("profilePicture", selectedFile); // selectedFile es el archivo de imagen seleccionado por el usuario
    try {
      // Realizar una solicitud al servidor para editar la foto de perfil
      const response = await axios.post("http://localhost:3001/edit-profile-picture", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data.message);
    } catch (error) {
      console.error("Error when changing profile picture: ", error);
    }

    closeEditProfilePictureModal();
  };

  return (
    <div className="user-profile-menu">
      <div className="edit-option" onClick={openChangePasswordModal}>
        <span>Cambiar Contraseña</span>
        <FontAwesomeIcon icon={faEdit} />
      </div>
      <div className="edit-option" onClick={openEditProfilePictureModal}>
        <span>Editar Foto de Perfil</span>
        <FontAwesomeIcon icon={faEdit} />
      </div>

      {/* Modal para Cambiar Contraseña */}
      <Modal isOpen={isChangePasswordModalOpen} onRequestClose={closeChangePasswordModal}>
        <h2>Cambiar Contraseña</h2>
        <form onSubmit={handlePasswordChangeSubmit}>
          <div className="form-group">
            <label htmlFor="currentPassword">Contraseña Actual:</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">Nueva Contraseña:</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Nueva Contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Guardar Contraseña</button>
          <button onClick={closeChangePasswordModal}>Cancelar</button>
        </form>
      </Modal>

      {/* Modal para Editar Foto de Perfil */}
      <Modal isOpen={isEditProfilePictureModalOpen} onRequestClose={closeEditProfilePictureModal}>
        <h2>Editar Foto de Perfil</h2>
        <form onSubmit={handleProfilePictureEditSubmit}>
          {/* Campos de formulario para editar la foto de perfil */}
          <div className="form-group">
            <label htmlFor="profilePicture">Seleccionar Nueva Foto de Perfil:</label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              accept="image/*"
              required
            />
          </div>
          <button type="submit">Guardar Foto de Perfil</button>
          <button onClick={closeEditProfilePictureModal}>Cancelar</button>
        </form>
      </Modal>
    </div>
  );
};

export default UserProfileMenu;


