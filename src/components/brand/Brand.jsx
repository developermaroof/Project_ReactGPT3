import React from "react";
import { brandLogos } from "../../constants";
import "./brand.css";

const Brand = () => {
  const brands = [
    { name: "Google", img: brandLogos.google },
    { name: "Slack", img: brandLogos.slack },
    { name: "Atlassian", img: brandLogos.atlassian },
    { name: "Dropbox", img: brandLogos.dropbox },
    { name: "Shopify", img: brandLogos.shopify },
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
