import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar, ScrollToTop } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="gradient__bg">
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
