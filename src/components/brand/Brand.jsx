import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <img src={google} alt="google" />
      </a>
      <a href="http://slack.com" target="_blank" rel="noopener noreferrer">
        <img src={slack} alt="slack" />
      </a>
      <a href="http://atlassian.com" target="_blank" rel="noopener noreferrer">
        <img src={atlassian} alt="atlassian" />
      </a>
      <a href="http://dropbox.com" target="_blank" rel="noopener noreferrer">
        <img src={dropbox} alt="dropbox" />
      </a>
      <a href="http://shopify.com" target="_blank" rel="noopener noreferrer">
        <img src={shopify} alt="shopify" />
      </a>
    </div>
  );
};

export default Brand;
