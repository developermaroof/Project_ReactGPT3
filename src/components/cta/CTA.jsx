import React from "react";
import "./cta.css";

const CTA = () => {
  const handleGetStarted = () => {
    const headerElement = document.getElementById("home");
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button" onClick={handleGetStarted} aria-label="Get started">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
