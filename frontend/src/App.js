import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Loader from "./components/Loader/Loader";
import Admin from "./pages/routes/Admin";
import AllRoutes from "./pages/routes/AllRoutes";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";

const App = () => {
  return (
    <div className="App">
    
      <Navbar />
      <AllRoutes />
      <Admin />
      <Loader />
      <Footer />
    </div>
  );
};

export default App;
