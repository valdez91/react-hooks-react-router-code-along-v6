import { NavLink } from "react-router-dom";
import "./NavBar.css"


const NavBar=() =>{
  return (
    <nav id="navbar">
      <NavLink
        to="/"
        
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        className="nav-link"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default NavBar;