import React from 'react'
import About from '../components/Home/About/About';
import Nav from '../components/Home/NavBar/Nav';
import Stacks from '../components/Home/TechStacks/Stacks';
import Footer from '../components/Home/Footer/Footer';
import Projects from '../components/Home/Projects/Projects';
import Contact from '../components/Home/Contact/Contact';

function Home(){
  return(
    <div>
      <Nav/>
      <About/>
      <Projects/>
      <Stacks/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home;