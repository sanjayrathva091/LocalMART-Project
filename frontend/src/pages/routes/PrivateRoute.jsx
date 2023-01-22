import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let tokenData = JSON.parse(localStorage.getItem("localmart")) || false;
  let token = tokenData.token || false;

  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
