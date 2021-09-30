import React from 'react'

export default function Splash() {
  return (
    <div className="splash">
      <div className="left-section">
        <img
          src="https://res.cloudinary.com/dsxis0hux/image/upload/v1632948791/pics/Open_Peeps_-_Bust_im9dc9.png"
          alt="splash image"
        />
      </div>
      <div className="right-section">
        <h1>Hi, I'm Allen Gonzales 👋 
          <br/>and I love coffee ☕
        </h1>
        <a href="/home"> ~ yarn create-react-app my-portfolio </a>
      </div>
    </div>
  );
}
