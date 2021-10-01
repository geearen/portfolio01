import React from 'react'

export default function About() {
  return (
    <section className="about">
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
          <div className="heading-text" id="about-me">
            <h1>Hi, I'm Allen Gonzales 👋</h1>
            <p>
              {" "}
              I'm a Software Developer with a background in Avionics. Graduated in
              Computer Engineering Technology at CalState Long Beach.
            </p>
          </div>

        </div>
      </div>

          <div className="container">
            <div className="table">

            <h1>My Tool Box</h1>
            <table className="table-container uk-table uk-table-divider">
              <thead>
                <tr>
                  <th>Languages</th>
                  <th>Libraries | Frameworks</th>
                  <th>Databases</th>
                  <th>Other</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>JavaScript</td>
                  <td>React</td>
                  <td>MongoDB</td>
                  <td>MVC</td>
                </tr>
                <tr>
                  <td>Python</td>
                  <td>Django</td>
                  <td>PostgreSQL</td>
                  <td>ORM</td>
                </tr>
                <tr>
                  <td>HTML5</td>
                  <td>jQuery</td>
                  <td>Mongoose</td>
                  <td>ODM</td>
                </tr>
                <tr>
                  <td>CSS</td>
                  <td>Node.js</td>
                  <td></td>
                  <td>EJS</td>
                </tr>
                <tr>
                  <td>SASS</td>
                  <td>Express.js</td>
                  <td></td>
                  <td>DTL</td>
                </tr>
                <tr>
                  <td>TypeScript</td>
                  <td></td>
                  <td></td>
                  <td>REST API</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
    </section>
  );
}
