import React from "react";
import bgImage from "F:/hass_iti/R_JS/day_1/day1/src/4.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">
        <h1>Kaite Read</h1>
        <p>Web Developer&Designer</p>
        <button className="btn btn-primary">CONTACT ME</button>
      </div>
    </section>
  );
};

export default HeroSection;
