import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Cart from "../../components/Cart";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
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
    </Routes>
  );
};

export default AllRoutes;
