import React from "react";
import About from "../components/Components/About/About";
import Footer from "../components/Components/Footer/Footer";
import Contact from "../components/Components/Contact/Contact";
import PageContainer from "../components/Components/PageContainer/PageContainer";

function Home() {
  return (
    <PageContainer
      children={
        <div className="background-grad">
          <div className="home">
            <About />
            <Contact />
          </div>
        </div>
      }
    ></PageContainer>
  );
}

export default Home;
