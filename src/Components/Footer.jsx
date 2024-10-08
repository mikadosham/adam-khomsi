import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <a
          href="https://github.com/mikadosham"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/adamkhomsi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <p>Lovingly slapped together with coffee and jazz.</p>
      <p>© 2024 Adam Khomsi</p>
    </footer>
  );
};

export default Footer;
