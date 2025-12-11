import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, text }) => (
  <article className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt={text.substring(0, 50) + "..."} loading="lazy" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </article>
);

export default Article;
