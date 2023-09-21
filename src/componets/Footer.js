import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer foot">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Contact Us</h2>
            <p>Add your contact details here</p>
          </div>
          <div className="col-md-6">
            <div className="social-icons">
              <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.github.com">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
