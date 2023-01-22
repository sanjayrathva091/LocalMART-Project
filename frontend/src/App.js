import React from "react";
import "./App.css";
import AllRoutes from "./pages/routes/AllRoutes";
import Navbar from "./components/HomePage/Navbar";
import Admin from "./pages/Admin";
// import Register from "./components/Register-And-Login/Resgister";

const App = () => {
  return (
    <div className="App">
      {/* <Cart /> */}
      {/* <Admin /> */}
      {/* <Loader /> */}
      {/* <Register /> */}
      {/* <Navbar /> */}
      <AllRoutes />
      <Admin />
      {/* <Loader /> */}
      {/* <Footer /> */}
      {/* <Register /> */}
    </div>
  );
};

export default App;
