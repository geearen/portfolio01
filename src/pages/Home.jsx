import React from 'react'
import About from '../components/Components/About/About';
// import Nav from '../components/Home/NavBar/Nav';
import Footer from '../components/Components/Footer/Footer';
import Contact from '../components/Components/Contact/Contact';

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

      </div>
      <Footer />
    </div>
  );
}

export default Home;