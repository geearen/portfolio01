import React from 'react'
import About from '../components/Home/About/About';
import Nav from '../components/Home/NavBar/Nav';
import Stacks from '../components/Home/TechStacks/Stacks';
import Footer from '../components/Home/Footer/Footer';
import Projects from '../components/Home/Projects/Projects';
import Contact from '../components/Home/Contact/Contact';

function Home(){
  return (
    <>
      <Nav />
      <div className="home">
        <div className="about-me">
          <About />
        </div>

        <hr id="projects" />

        <div className="projects">
          <h1>Projects</h1>
          <section
            className="projects-section uk-child-width-1-2@s uk-child-width-1-2@m"
            data-uk-grid
          >
            <Projects />
          </section>
        </div>

        <hr id="tech-stack" />

        <div className="tech-stack">
          <h1>Tech Stack</h1>
          <section className="tech-stack-section">
            <Stacks />
          </section>
        </div>

        <hr id="contact" />
        
        <div className="contact-info">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;