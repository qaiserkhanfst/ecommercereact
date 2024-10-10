import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to={
            localStorage.getItem("isLoggedIn") === "true" ? "/home" : "/signup"
          }
          className="font-bold text-xl"
        >
          E-commerce App
        </Link>
        <div className="space-x-4">
          {localStorage.getItem("isLoggedIn") === "true" ? (
            <>
              <Link to="/cart">Cart</Link>
              <button onClick={handleLogout} className="bg-red-500 p-2 rounded">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
