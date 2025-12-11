import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
import "./blog.css";

const Blog = () => {
  const blogPosts = [
    {
      imgUrl: blog01,
      date: "Dec 15, 2024",
      text: "GPT-3 and OpenAI: The Future of Artificial Intelligence. Let us explore how it's transforming industries.",
    },
    {
      imgUrl: blog02,
      date: "Dec 10, 2024",
      text: "Revolutionizing Content Creation: How GPT-3 is Changing the Way We Write and Create.",
    },
    {
      imgUrl: blog03,
      date: "Dec 5, 2024",
      text: "Building Intelligent Chatbots: A Complete Guide to Implementing GPT-3 in Your Applications.",
    },
    {
      imgUrl: blog04,
      date: "Nov 28, 2024",
      text: "The Power of Language Models: Understanding GPT-3's Impact on Business and Technology.",
    },
    {
      imgUrl: blog05,
      date: "Nov 20, 2024",
      text: "From Code to Conversation: How Developers Are Leveraging GPT-3 for Innovation.",
    },
  ];

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
