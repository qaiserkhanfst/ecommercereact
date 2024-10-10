import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleSignup = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
  };

  return (
    <CartProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/product-details/:id"
            element={isLoggedIn ? <ProductDetails /> : <Navigate to="/login" />}
          />
          <Route
            path="/cart"
            element={isLoggedIn ? <Cart /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
