import React from "react";
import Cart from "./components/Cart";
import { BrowserRouter as Router } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Cart />
    </Router>
  );
};

export default App;