import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Loader from "./components/Loader/Loader";
import Register from "./components/Register And Login/Resgister";
import Admin from "./pages/routes/Admin";

const App = () => {
  return (
    <div className="App">
      {/* <Cart /> */}
      <Admin />
      {/* <Loader /> */}
      <Register />
    </div>
  );
};

export default App;
