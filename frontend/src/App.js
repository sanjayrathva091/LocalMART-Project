import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Admin from "./pages/routes/Admin";
import AllRoutes from "./pages/routes/AllRoutes";
import Home from "./pages/routes/Home";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";

const App = () => {
  return (
    <div className="App">
      {/* <Cart /> */}
      {/* <Admin /> */}
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default App;
