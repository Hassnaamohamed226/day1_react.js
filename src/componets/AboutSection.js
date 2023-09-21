import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>About Me</h2>
          </div>
          <div className="col-md-6">
            <h3>Experience</h3>
            <p>Add your experience details here Add your education details here </p>
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
