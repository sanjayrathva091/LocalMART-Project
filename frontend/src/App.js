import React from "react";
import Cart from "./components/Cart";
import { BrowserRouter as Router } from "react-router-dom";
import Checkout from "./components/checkout";


const App = () => {
  return (
    <Router>
      <Cart />
      <Checkout />
    </Router>
  );
};

export default App;