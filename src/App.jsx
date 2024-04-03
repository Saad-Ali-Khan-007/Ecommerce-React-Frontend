import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import Seller from "./pages/vendor/Seller";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/product-detail/:product_id"
          element={<ProductDetail />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Signin />}></Route>
        <Route path="/seller" element={<Seller />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
