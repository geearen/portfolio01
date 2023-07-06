import React from "react";
import * as FaIcons from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-info">
      <h1>Contacts</h1>
      <div className="contact-section">
        <div className="contact-content">
          <div className="contact-image-section">
            <h3>
              Allen Gonzales <br /> Los Angeles, CA
            </h3>
            <img></img>
          </div>
          <ul>
            <li>
              <a
                href="mailto:allengonzales018@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaIcons.FaEnvelope className="contact-icons" />
                allengonzales018@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/allen-gee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaIcons.FaLinkedinIn className="contact-icons" />
                /in/allen-gee
              </a>
            </li>
            <li>
              <a
                href="https://github.com/geearen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaIcons.FaGithubAlt className="contact-icons" />
                geearen
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/geearen.film/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaIcons.FaInstagram className="contact-icons" />
                geearen.film
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1_8wuKVWL0YXPwEK_okGkLj-0dYGE7tu1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaIcons.FaFileAlt className="contact-icons" />
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://calendly.com/geearen/10min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaIcons.FaCalendar className="contact-icons" />
                Schedule a call with Calendly
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
