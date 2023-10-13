import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../Redux/action/actions";
import Graficas from "./graficasAdmin";
import axios from 'axios';

import "./AdminDashboard.css"



const AdminDashboard = () => {

  const property = useSelector((state) => state.property)
  const dispatch = useDispatch();
  console.log("Propiedades", property)
  const [usersData, setUsersData] = useState([]); // Declarar usersData en el estado

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/user//userget`);
        const usersData = response.data; // Suponiendo que los datos se encuentran en la propiedad "data" de la respuesta
        console.log("users", usersData);
        // Actualiza el estado con los datos de usuarios
        setUsersData(usersData);
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    fetchUsers();
  }, []);


  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleTogglePublish = async (id, isPublished) => {
    try {
      await axios.put(`http://localhost:3001/property/gproductAdmin/${id}`, {
        isPublished: !isPublished,
      });
      dispatch(getCars());
    } catch (error) {
      console.error('Error al actualizar el estado de publicación:', error);
    }
  };

  const handleBanUser = async (id, isBanned) => {
    try {
      await axios.put(`http://localhost:3001/user/userAdmin/${id}`, {
        isBanned: !isBanned,
      });
      // Actualiza la lista de usuarios después de banear/desbanear
      const updatedUsers = usersData.map((user) => {
        if (user.id === id) {
          return { ...user, isBanned: !isBanned };
        }
        return user;
      });
      setUsersData(updatedUsers);
    } catch (error) {
      console.error('Error al banear/desbanear el usuario:', error);
    }
  };


  return (
    <div className="admin-dashboard">
      <h1>Administration panel</h1>
      <div>
        <Graficas />
      </div>
      <div className='container'>
        <div className='section'>
          <h2>Users</h2>
          {usersData.map((user) => (
            <div key={user.id} className='users-section'>
              <h3>{user.fullName || user.givenName}</h3>
              <p>{user.id}</p>
              <p>{user.email}</p>
              <button onClick={() => {
                console.log("userId:", user.id);
                handleBanUser(user.id, user.isBanned)
              }} className='buttonAdmin'>
                {user.isBanned ? 'Unban' : 'Ban'}
              </button>
            </div>
          ))}
        </div>

        <div className='section'>
          <h2>Publications</h2>
          {property.map((propiedad) => (
            <div key={propiedad.id} className='posts-section'>
              <h3>{propiedad.title}</h3>
              <p>{propiedad.id}</p>
              <button onClick={() => {
                console.log("productId:", propiedad.id);
                handleTogglePublish(propiedad.id, propiedad.isPublished);
              }} className='buttonAdmin'>
                {propiedad.isPublished ? 'Unpublish' : 'Post'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 