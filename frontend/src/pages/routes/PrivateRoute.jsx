import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let token = localStorage.getItem("token") || false;

  if (token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
