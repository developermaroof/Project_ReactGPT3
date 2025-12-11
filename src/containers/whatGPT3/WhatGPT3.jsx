import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <section className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="GPT-3 (Generative Pre-trained Transformer 3) is a state-of-the-art language processing AI model developed by OpenAI. With 175 billion parameters, it's one of the largest and most powerful language models ever created. GPT-3 can understand context, generate human-like text, answer questions, write code, translate languages, and perform a wide range of natural language tasks with remarkable accuracy and creativity."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Create intelligent, conversational chatbots that understand context, maintain natural dialogue, and provide personalized customer support 24/7. Transform user interactions with AI-powered assistants that feel genuinely human."
      />
      <Feature
        title="Knowledgebase"
        text="Build comprehensive knowledge bases that can instantly answer complex questions, provide detailed explanations, and help users find information quickly. Perfect for documentation, FAQs, and customer support systems."
      />
      <Feature
        title="Education"
        text="Revolutionize learning with AI-powered tutoring systems, personalized educational content, automated grading, and interactive learning experiences that adapt to each student's unique needs and learning style."
      />
    </div>
  </section>
);

export default WhatGPT3;
