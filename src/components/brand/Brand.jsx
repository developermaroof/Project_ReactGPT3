import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./import";
import "./brand.css";

const Brand = () => {
  const brands = [
    { name: "Google", img: google },
    { name: "Slack", img: slack },
    { name: "Atlassian", img: atlassian },
    { name: "Dropbox", img: dropbox },
    { name: "Shopify", img: shopify },
  ];

  return (
    <section className="gpt3__brand section__padding" aria-label="Trusted by leading companies">
      {brands.map((brand) => (
        <div key={brand.name}>
          <img src={brand.img} alt={brand.name} loading="lazy" />
        </div>
      ))}
    </section>
  );
};

export default Brand;
