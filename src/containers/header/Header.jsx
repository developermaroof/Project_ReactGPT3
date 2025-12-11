import React, { useState } from "react";
import { assets } from "../../constants";
import "./header.css";

const Header = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <header className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something Amazing with GPT-3 OpenAI
        </h1>
        <p>
          Discover the revolutionary power of GPT-3, the most advanced language
          model that transforms how we interact with AI. From intelligent
          chatbots to creative content generation, unlock limitless possibilities
          and step into the future of artificial intelligence today.
        </p>

        <form className="gpt3__header-content__input" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
          />
          <button type="submit" aria-label="Get started">
            {isSubmitted ? "Thank You!" : "Get Started"}
          </button>
        </form>

        <div className="gpt3__header-content__people">
          <img src={assets.people} alt="People avatars" />
          <p>1,600+ people requested access in the last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={assets.ai} alt="AI Technology Visualization" />
      </div>
    </header>
  );
};

export default Header;
