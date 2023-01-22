import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

// import Admin from "./Admin";

import Admin from "../Admin";

import Cart from "../../components/Cart";
import PrivateRoute from "./PrivateRoute";
import Register from "../../components/Register-And-Login/Resgister";
import Login from "../../components/Register-And-Login/Login";
import EmailVerify from "../../components/Register-And-Login/Email-Verify/EmailVerify";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            {/* <Admin /> */}
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      ></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
    </Routes>
  );
};

export default AllRoutes;
