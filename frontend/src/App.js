import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Poster from "./components/Poster";
import Home from "./pages/routes/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Poster />
      <Footer />
    </div>
  );
}

export default App;
