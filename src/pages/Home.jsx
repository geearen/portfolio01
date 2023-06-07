import React from 'react'
import About from '../components/Home/About/About';
// import Nav from '../components/Home/NavBar/Nav';
import Stacks from '../components/Home/TechStacks/Stacks';
import Footer from '../components/Home/Footer/Footer';
import Projects from '../components/Home/Projects/Projects';
import Contact from '../components/Home/Contact/Contact';

function Home(){
  return (
    <div className="background-grad">
      {/* <Nav /> */}
      <div className="home">
        <div className="about-me">
          <About />
        </div>
        <div className="contact-info">
          <Contact />
        </div>

        <hr className="line" id="projects" />

        <div className="projects">
          <h1>Projects</h1>
          <section className="container">
            <Projects />
          </section>
        </div>

        <hr className="line" id="tech-stack" />

        <div className="tech-stack">
          <h1>Tech Stack</h1>
          <section className="tech-stack-section">
            <Stacks />
          </section>
        </div>

        <hr className="line" id="contact" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;