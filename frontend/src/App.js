import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import NavbarBottom from "./components/layout/NavbarBottom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Loader from "./components/layout/Loader/Loader";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/sa" component={Loader} />
      <Footer />
    </Router>
  );
}

export default App;
