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
            Hi! I'm Allen Gonzales,
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
            I currently have about a year of experience in software development.
            As of right now I am currently looking for a new place, excited to
            learn new technogies and collaborate in a team.
            <br />
            <br />
            When I'm not coding, you can find me editing my photos, hanging out
            with my friends playing video games, or cooking and trying out new
            recipes.
          </p>
        </div>
      </div>
    </section>
  );
}
