import React from "react";

export default function About() {
  return (
    <section className="about-container">
      <div className="about-portrait">
        <img
          src="https://res.cloudinary.com/dsxis0hux/image/upload/v1637386168/pics/20201227-MRJ01356_barxvr.jpg"
          alt="portfolio portrait"
        />
      </div>
      <div className="about-text">
        <h1>About me! 👋</h1>
        <div className="text-box">
          <p>
            {" "}
            Hi! I'm Allen Gonzales, currently a Software Developer at
            Rightpoint.
            <br />
            <br />
            3 years of Avionics Technician experience. I gained transferable
            skills for Software Development, such as problem solving, critical
            thinking and troubleshooting. I'm not afraid to disassemble things
            to gain insightful knowledge. I find excitement from learning new
            skills and I enjoy sharing what I learn. I take pride and ownership
            with everything I do. I’m not afraid to make mistakes and learn from
            them.
            <br />
            <br />
            When I'm not coding, you can find me editing my photos, hanging out
            with my friends playing video games or watching cooking show on
            youtube.
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
    </section>
  );
}
