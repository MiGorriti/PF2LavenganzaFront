import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../Redux/action/actions"; // Debes tener una acción para obtener usuarios desde tu API

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users); // Suponiendo que tienes un reducer que almacena la lista de usuarios en el estado global

  useEffect(() => {
    // Cuando el componente se monta, obtén la lista de usuarios
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="admin-dashboard">
      <h1>Panel de Administración</h1>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      {/* Otras funcionalidades y vistas del panel de administración */}
    </div>
  );
};

export default AdminDashboard;
