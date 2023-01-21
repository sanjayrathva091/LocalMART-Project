import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Admin from "./pages/Admin";


import Loader from "./components/Loader/Loader";
import AllRoutes from "./pages/routes/AllRoutes";
import Navbar from "./components/HomePage/Navbar";
import Footer from "./components/HomePage/Footer";


const App = () => {
  return (
    <div className="App">
    
      <Navbar />
      <AllRoutes />
      {/* <Admin /> */}
      {/* <Loader /> */}
      <Footer />
    </div>
  );
};

export default App;
