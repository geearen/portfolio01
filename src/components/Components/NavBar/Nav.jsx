import React from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

function Nav() {
  return (
    <div className="navbar">
      <ul className="navbar-container">
        <li className="navbar-item">
          <NavLink exact to="/">
            home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink exact to="/project">
            projects
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink exact to="/photo">
            photography
          </NavLink>
        </li>
        <li className="navbar-item">
          <a
            href="https://www.linkedin.com/in/allen-gee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaIcons.FaLinkedinIn />
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="https://github.com/geearen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaIcons.FaGithubAlt />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
