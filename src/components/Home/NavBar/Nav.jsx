import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav(){
  return (
    <nav className="navbar-container" data-uk-navbar data-uk-sticky>
      <div className="uk-navbar-center">
        <ul className="uk-navbar-nav">
          <li className="uk-navbar-item">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="uk-navbar-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="uk-navbar-item">
            <a href="#tech-stack">Tech Stack</a>
          </li>
          <li className="uk-navbar-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;