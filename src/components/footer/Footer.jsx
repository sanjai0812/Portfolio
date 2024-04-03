import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">SANJAI</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://instagram.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Sanjai__Codes. All Rigths Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
