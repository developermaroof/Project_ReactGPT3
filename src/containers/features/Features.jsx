import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Advanced Natural Language Processing",
    text: "Experience cutting-edge NLP capabilities that understand context, nuance, and intent. GPT-3 processes and generates human-like text with unprecedented accuracy, making it perfect for content creation, translation, and communication.",
  },
  {
    title: "Seamless Integration & API Access",
    text: "Integrate GPT-3 effortlessly into your existing applications with our robust API. Build powerful AI features quickly with comprehensive documentation, developer tools, and dedicated support to accelerate your development process.",
  },
  {
    title: "Scalable & Enterprise-Ready",
    text: "Deploy AI solutions that scale with your business needs. From startups to enterprise-level applications, GPT-3 provides reliable performance, high availability, and the flexibility to handle projects of any size.",
  },
  {
    title: "Continuous Learning & Updates",
    text: "Stay ahead with regular model updates and improvements. Our team continuously enhances GPT-3's capabilities, ensuring you always have access to the latest AI advancements and best-in-class performance.",
  },
];

const Features = () => (
  <section className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </section>
);

export default Features;
