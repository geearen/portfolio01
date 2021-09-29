import React from 'react'



export default function About() {
  return (
    <section className="about uk-child-width-expand@s" data-uk-grid>
      <div className="container">
        <div className="about-portrait">
          <img
            src="https://res.cloudinary.com/dsxis0hux/image/upload/v1632869056/pics/IMG_6396_sdmp6q.jpg"
            alt="portfolio portrait"
          />
        </div>
      </div>

      <div className="container">
        <div className="about-text">
          <div className="heading-text">
            <h1>Hi, I'm Allen Gonzales 👋</h1>
          </div>

          <p>
            {" "}
            I'm a Software Developer with a background in Avionics. Graduated in
            Computer Engineering Technology at CalState Long Beach.
          </p>
        </div>
      </div>
    </section>
  );
}
