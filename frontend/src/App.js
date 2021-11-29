import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import NavbarBottom from "./components/layout/NavbarBottom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
