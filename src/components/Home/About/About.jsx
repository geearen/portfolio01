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
        <div id="about-me"></div>
      </div>
      <div className="container bottom">
        <div className="about-text">
          <div className="heading-text">
            <h1>About me! 👋</h1>
            <p>
              {" "}
              Hi! I'm Allen Gonzales and I'm a former Avionics Technician, now a
              Software Engineer with skills in critical thinking,
              troubleshooting, and a keen eye for aesthetics. I value
              adaptability, honesty, good communication skills and a good
              relationship within peers. I also thrive learning new skills and
              have a well-developed growth mindset.
              <br />
              <br />
              When I'm not coding, you can find me editing my photos and
              updating my photography website or hanging out with my friends
              playing video games or a sunday cookout.
            </p>
          </div>
        </div>

        {/* <div className="table">
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
        </div> */}
      </div>
    </section>
  );
}
