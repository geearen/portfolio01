import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav(){
  return (
    <>
      <nav className="navbar-container" data-uk-navbar data-uk-sticky>
        <div class="uk-navbar-left">
          <a
            class="uk-navbar-toggle"
            data-uk-navbar-toggle-icon
            data-uk-toggle="target: #menu"
          ></a>
        </div>
        <div className="uk-navbar-center">
          <a href="#home" data-uk-uk-scroll>
            <h3>Allen Gonzales</h3>
          </a>
        </div>
      </nav>

      <div id="menu" data-uk-offcanvas="overlay: false; mode: slide;">
        <div class="uk-offcanvas-bar uk-flex uk-flex-column">
          <button
            class="uk-offcanvas-close"
            type="button"
            data-uk-close
          ></button>
          <ul className="uk-nav uk-nav-center uk-margin-auto-vertical">
            <li className="uk-navbar-item">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="uk-navbar-item">
              <a href="#about-me">About me</a>
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
            <li>
              <a
                href="https://www.linkedin.com/in/allen-gee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span uk-icon="icon: linkedin; ratio:2"></span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/geearen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span uk-icon="icon: github; ratio:2"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Nav;