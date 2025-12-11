import React from "react";
import { assets } from "../../constants";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <button type="button" onClick={handleScrollToTop} aria-label="Request early access">
          Request Early Access
        </button>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <a href="#home" onClick={handleScrollToTop} aria-label="Home">
            <img src={assets.logo} alt="GPT-3 Logo" />
          </a>
          <p>
            Building the future of AI, one innovation at a time. <br /> All Rights Reserved
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT-3</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#blog">Blog</a></p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p><a href="#possibility">About Us</a></p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>123 Innovation Drive, Tech City</p>
          <p>+1 (555) 123-4567</p>
          <p><a href="mailto:info@gpt3-demo.com">info@gpt3-demo.com</a></p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>&copy; {currentYear} developer-maroof. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
