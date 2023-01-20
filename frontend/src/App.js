import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Loader from "./components/Loader/Loader";
import Admin from "./pages/routes/Admin";

const App = () => {
  return (
    <div className="App">
      {/* <Cart /> */}
      <Admin />
      <Loader />
    </div>
  );
};

export default App;
