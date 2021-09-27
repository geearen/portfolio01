import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"


function Nav(){
  return (
    <nav className="navbar navbar-light" style={{background: "#e3f2fd"}}>
      <NavLink exact to="/">
        Allen Gonzales
      </NavLink>
    </nav>
  );
}
export default Nav;