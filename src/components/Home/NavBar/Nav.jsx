import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"


function Nav(){
  return (
    <ul
      className="nav justify-content-center"
      style={{ background: "#D5E0E7" }}
    >
      <li className="nav-item">
        <NavLink exact to="/">
          Allen Gonzales
        </NavLink>
      </li>
      <li className="nav-item">
        <a href="">Projects</a>
      </li>
      <li className="nav-item">
        <a href="">Tech Stack</a>
      </li>
      <li className="nav-item">
        <a href="">Contact</a>
      </li>
    </ul>
  );
}
export default Nav;