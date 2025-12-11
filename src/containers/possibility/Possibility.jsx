import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <section className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="AI Possibilities Visualization" loading="lazy" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        GPT-3 opens doors to unprecedented opportunities across every industry.
        From automating complex workflows to generating creative content, from
        enhancing customer experiences to accelerating research and development,
        the applications are limitless. Join thousands of innovators who are
        already transforming their businesses with the power of advanced AI.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </section>
);

export default Possibility;
