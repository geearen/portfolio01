import React from 'react'

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-content uk-card uk-card-default">
        <a
          href="mailto:allengonzales018@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span uk-icon="icon: mail; ratio:3"></span>allengonzales018@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/allen-gee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span uk-icon="icon: linkedin; ratio:3"></span>/in/allen-gee
        </a>
        <a
          href="https://github.com/geearen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span uk-icon="icon: github; ratio:3"></span>geearen
        </a>
        <a
          href="https://www.instagram.com/geearen.film/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span uk-icon="icon: instagram; ratio:3"></span>geearen.film
        </a>
        <a
          href="https://docs.google.com/document/d/1hnsuayjRw5MaOO1UIc8amX6nlfqXxxqENCGFIaB7NF0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span uk-icon="icon: file-text; ratio:3"></span>Resume
        </a>
      </div>
    </div>
  );
}
