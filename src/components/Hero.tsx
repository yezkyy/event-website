import React from "react";
import "../styles/Hero.css";

const Hero: React.FC = () => (
  <header className="hero">
    <div className="hero-content">
      <h1>Event Name</h1>
      <p>Join us for an amazing experience!</p>
      <button>Register Now</button>
    </div>
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
      <div className="wave" id="wave5"></div>
    </div>
  </header>
);

export default Hero;