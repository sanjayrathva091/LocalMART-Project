import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import { BrowserRouter as Router } from "react-router-dom";
import Checkout from "./components/Checkout";
import Admin from "./pages/Admin";
import Loader from "./components/Loader/Loader";
import Register from "./components/Register And Login/Resgister";
import AllRoutes from "./pages/routes/AllRoutes";
import Navbar from "./components/HomePage/Navbar";
// import Admin from "./pages/Admin";
// import Register from "./components/Register-And-Login/Resgister";

const App = () => {
  return (
    <div className="App">
      {/* <Cart /> */}
      {/* <Admin /> */}
      {/* <Loader /> */}
    

      {/* <AllRoutes /> */}
      {/* <Admin /> */}
      {/* <Loader /> */}

      <AllRoutes />
    </div>
  );
};

export default App;
