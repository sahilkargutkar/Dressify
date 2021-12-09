import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import NavbarBottom from "./components/layout/NavbarBottom";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Loader from "./components/layout/Loader/Loader";
import ProductDetails from "./components/layout/ProductDetails/ProductDetails";
import Products from "./components/layout/Products/Products";
import Search from "./components/layout/Search/Search";

function App() {
  return (
    <Router>
      <Header />
      <Toaster />
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:keyword" component={Products} />
      <Route exact path="/search" component={Search} />
      <Footer />
    </Router>
  );
}

export default App;
