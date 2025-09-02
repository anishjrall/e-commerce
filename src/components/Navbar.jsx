import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import { clearCart } from "../store/cartSlice"
import { useState } from "react";
export default function Navbar() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [darkmode,setDarkmode]=useState(false)
  const toggledarkmode=()=>{
    setDarkmode(!darkmode)
    document.body.style.backgroundColor=darkmode? "white":"black"
    document.body.style.color=darkmode?"black":"white"
  }

  const handleLogout = () => {
    dispatch(logout()); 
    navigate("/");     
    dispatch(clearCart())
  };

  return (
    <nav className="navbar">
      <div className="logo">MyStore</div>
      
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        {!isLoggedIn && <NavLink to="/signup">Signup</NavLink>}
        {isLoggedIn && <span className="nav-link" onClick={handleLogout}>Logout</span>}
        <span className="nav-link" onClick={toggledarkmode}>Dark Mode</span>
      </div>
    </nav>
  );
}
