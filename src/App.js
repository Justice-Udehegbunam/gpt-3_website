import React from "react";
import { Brand, CTA, Navbar } from "./components";
import {
  Blog,
  Footer,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
