import React from "react";

import { Navigate, Outlet } from "react-router-dom";
export const ProtectedR = ({ canActivate, redirectPath = "/" }) => {
  console.log(canActivate);
  if (!canActivate) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};
