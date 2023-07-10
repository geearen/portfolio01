import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <h5>
          Built by: <span>Allen Gonzales</span>
        </h5>
        <h5>Powered with:</h5>
        <ul>
          <li>
            <a href="https://react.dev/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="react logo"
                className="footer-logo"
              />
              <h5>React</h5>
            </a>
          </li>
          <li>
            <a href="https://vercel.com/">
              <svg
                width="76"
                height="65"
                viewBox="0 0 76 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="footer-logo"
              >
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000" />
              </svg>
              <h5>Vercel</h5>
            </a>
          </li>
          <li>
            <a href="https://sass-lang.com/">
              <img
                src="https://sass-lang.com/assets/img/logos/logo.svg"
                alt="sass logo"
                className="footer-logo"
              />
              <h5>Sass</h5>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
