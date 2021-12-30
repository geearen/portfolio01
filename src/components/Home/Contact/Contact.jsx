import React from "react";
import * as FaIcons from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <h2>Contacts</h2>
        <ul>
          <li>
            <a
              href="mailto:allengonzales018@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaEnvelope />
              allengonzales018@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/allen-gee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaLinkedinIn />
              /in/allen-gee
            </a>
          </li>
          <li>
            <a
              href="https://github.com/geearen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaGithubAlt />
              geearen
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/geearen.film/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaInstagram />
              geearen.film
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1hnsuayjRw5MaOO1UIc8amX6nlfqXxxqENCGFIaB7NF0/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaIcons.FaFileAlt />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
