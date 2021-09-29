import React from 'react'

export default function Contact() {
  return (
    <div className="contact-section">

      <div className="contact-content uk-card uk-card-default">
        <h3 className="uk-card-title"> Contact Info Here: </h3>

        <a
          href="mailto:allengonzales018@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span uk-icon="icon: mail"></span>allengonzales018@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/allen-gee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span uk-icon="icon: linkedin"></span>/in/allen-gee
        </a>
        <a
          href="https://github.com/geearen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span uk-icon="icon: github"></span>geearen
        </a>
        <a
          href="https://www.instagram.com/geearen.film/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span uk-icon="icon: instagram"></span>geearen.film
        </a>
      </div>
    </div>
  );
}
