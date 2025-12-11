import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { assets, navLinks } from "../../constants";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  return (
    <nav className={`gpt3__navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href="#home" aria-label="Home">
            <img src={assets.logo} alt="GPT-3 Logo" />
          </a>
        </div>
        <div className="gpt3__navbar-links_container">
          {navLinks.map((link) => (
            <p key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.name}
              </a>
            </p>
          ))}
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button" aria-label="Sign up">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setToggleMenu(!toggleMenu)}
          className="menu-toggle-btn"
        >
          {toggleMenu ? (
            <RiCloseLine color="#fff" size={27} />
          ) : (
            <RiMenu3Line color="#fff" size={27} />
          )}
        </button>
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              {navLinks.map((link) => (
                <p key={link.href}>
                  <a href={link.href} onClick={handleLinkClick}>
                    {link.name}
                  </a>
                </p>
              ))}
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
