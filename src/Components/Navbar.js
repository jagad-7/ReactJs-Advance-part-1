import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle=({isActive})=>{
    return{
      TextDecoration: isActive ? 'none' : 'underline',
      fontWeight: isActive ? 'bold' : 'normal',
    }    
  }
  return (
    <div>
      <nav className="primary">
        <NavLink style={linkStyle} to={"/"}>
          Home
        </NavLink>
        <NavLink style={linkStyle} to={"/about"}>
          About
        </NavLink>
        <NavLink style={linkStyle} to={"/contact"}>
          Contact
        </NavLink>
        <NavLink style={linkStyle} to={"/projects"}>
          Projects
        </NavLink>
        <NavLink style={linkStyle} to={"/users"}>
          Users
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
