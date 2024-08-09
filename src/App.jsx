import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainWrapper from "./layout/MainWrapper";
import PrivateRoute from "./layout/PrivateRoute";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import CreatePassword from "./pages/auth/CreatePassword";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// Base Routes
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <MainWrapper>
        <Navbar />
        <Routes>
          <Route path="/register/" element={<Register />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/forgot-password/" element={<ForgotPassword />} />
          <Route path="/create-new-password/" element={<CreatePassword />} />
          //Base Routes
          <Route path="/" element={<Home />} />
          <Route path="/product-detail/:slug/" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </MainWrapper>
    </BrowserRouter>
  );
};

export default App;
