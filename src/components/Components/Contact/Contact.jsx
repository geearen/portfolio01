import React from "react";
import * as FaIcons from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-content">
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
              href="https://drive.google.com/file/d/1b-kFWsZvchh70g9mY9h_WzdHdxc9ocqF/view?usp=sharing"
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
