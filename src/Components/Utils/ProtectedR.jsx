import React from "react";

import { Navigate, Outlet } from "react-router-dom";
const ProtectedR = () => {
  let userData = localStorage.getItem("userData");
  let isAdmin = userData ? JSON.parse(userData) : null; // Parsea la cadena JSON a un objeto
  if (isAdmin === null || !isAdmin) {
    return <Navigate to="/" />;
  }
  console.log(isAdmin.email);
  if (isAdmin.email === "wanderluxe@gmail.com") {
    return <Outlet />;
  }
};

export default ProtectedR;
