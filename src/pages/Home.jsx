import React from 'react'
import About from '../components/Home/About/About';
import Nav from '../components/Home/NavBar/Nav';
import Stacks from '../components/Home/TechStacks/Stacks';
import Footer from '../components/Home/Footer/Footer';
import Projects from '../components/Home/Projects/Projects';
import Contact from '../components/Home/Contact/Contact';

function Home(){
  return(
    <>
      <Nav/>
        <div className="home">
          <div className="about-me">
            <About/>
          </div>

          <hr />
          <div className="projects">
            <Projects/>
          </div>

          <hr />
          <div className="tech-stack">
            <h1>Tech Stack</h1>
            <section className="tech-stack-section">
              <Stacks/>
            </section>
          </div>

          <hr />
          <div className="contact-info">
            <Contact/>
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default Home;