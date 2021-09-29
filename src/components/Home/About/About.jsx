import React from 'react'



export default function About() {
  return (
    <section className="about grid">
        <div className="g-col-6 about-portrait container">
          <img
            src="https://res.cloudinary.com/dsxis0hux/image/upload/v1632869056/pics/IMG_6396_sdmp6q.jpg"
            alt="portfolio portrait"
          />
        </div>

        <div className="g-col-6 about-text container">
          <div className="heading-text">
            <h1>Hi, I'm Allen Gonzales 👋</h1>
          </div>

          <p>
            {" "}
            I'm a Software Developer with a background in Avionics. Graduated in
            Computer Engineering Technology at CalState Long Beach.
          </p>
        </div>
    </section>
  );
}
