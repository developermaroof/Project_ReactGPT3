import React from "react";
import Article from "../../components/article/Article";
import { blogPosts } from "../../constants";
import "./blog.css";

const Blog = () => {
  return (
    <section className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blogPosts[0].imgUrl}
            date={blogPosts[0].date}
            text={blogPosts[0].text}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          {blogPosts.slice(1).map((post, index) => (
            <Article
              key={index}
              imgUrl={post.imgUrl}
              date={post.date}
              text={post.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
