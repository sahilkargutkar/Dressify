import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Home from "./components/Home/Home";
import { loadUser } from "./actions/userAction";
import Loader from "./components/layout/Loader/Loader";
import ProductDetails from "./components/layout/ProductDetails/ProductDetails";
import Products from "./components/layout/Products/Products";
import Search from "./components/layout/Search/Search";
import Login from "./components/User/Login";
import Profile from "./components/User/Profile";
import Register from "./components/User/Register";
import store from "./store";
import { useEffect } from "react";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import { useSelector } from "react-redux";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import OrderSuccess from "./components/Cart/OrderSuccess";
import MyOrders from "./components/Orders/MyOrders";
import OrderDetails from "./components/Orders/OrderDetails";
import Dashboard from "./components/Admin/Dashboard";
import ProductList from "./components/Admin/ProductList";
import NewProduct from "./components/Admin/NewProduct";
import UpdateProduct from "./components/Admin/UpdateProduct";
import OrderList from "./components/Admin/OrderList";
import UpdateOrder from "./components/Admin/UpdateOrder";
import UsersList from "./components/Admin/UsersList";
import UpdateUser from "./components/Admin/UpdateUser";
import NotFound from "./components/404 Page/NotFound";
import Contact from "./components/User/Contact";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const history = useHistory();

  console.log(user, "home user");

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router history={history}>
      {isAuthenticated ? <Header user={user} /> : <Header />}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#212121",
            color: "#fff",
          },
        }}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/search" component={Search} />

        <Route exact path="/register" component={Register} />
        <ProtectedRoutes exact path="/account" component={Profile} />
        <ProtectedRoutes exact path="/me/update" component={UpdateProfile} />
        <ProtectedRoutes
          exact
          path="/password/update"
          component={UpdatePassword}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />
        <Route exact path="/cart" component={Cart} />

        <ProtectedRoutes exact path="/success" component={OrderSuccess} />
        <ProtectedRoutes exact path="/shipping" component={Shipping} />

        <Route exact path="/login" component={Login} />
        <ProtectedRoutes exact path="/order/confirm" component={ConfirmOrder} />
        <ProtectedRoutes exact path="/order/:id" component={OrderDetails} />

        <Route exact path="/contact" component={Contact} />
        <ProtectedRoutes exact path="/orders" component={MyOrders} />
        <ProtectedRoutes
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoutes
          isAdmin={true}
          exact
          path="/admin/products"
          component={ProductList}
        />
        <ProtectedRoutes
          isAdmin={true}
          exact
          path="/admin/product"
          component={NewProduct}
        />
        <ProtectedRoutes
          isAdmin={true}
          exact
          path="/admin/product/:id"
          component={UpdateProduct}
        />
        <ProtectedRoutes
          isAdmin={true}
          exact
          path="/admin/orders"
          component={OrderList}
        />
        <ProtectedRoutes
          isAdmin={true}
          exact
          path="/admin/order/:id"
          component={UpdateOrder}
        />
        <ProtectedRoutes
          isAdmin={true}
          exact
          path="/admin/users"
          component={UsersList}
        />
        <ProtectedRoutes
          isAdmin={true}
          exact
          path="/admin/user/:id"
          component={UpdateUser}
        />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
